import { useContext } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/JSONForm.css";
import validate from "../../utils/validateData";
import { BlockContext } from "../../context/BlockContext";
import getBlockType from "../../utils/getBlockType";

export default function JSONForm() {
	const [allBlocks, setBlocks] = useContext(BlockContext);
	const { t } = useTranslation();

	function getJSON() {
		return JSON.stringify(
			allBlocks.map(el => {
				let noID = {...el, id: undefined};
				if ("options" in el) noID.options = el.options.map(opt => {
					return { ...opt, id: undefined};
				})
				return noID;
			}),
			null,
			"  "
		)
	}

	// #region Handlers
	/** Show a status message and unfocus from a clicked button. Helper for JSON form handlers. */
	function showMessage(btn, message) {
		let original = btn.innerText;
		
		btn.innerText = message;
		setTimeout(() => { btn.innerText = original }, 2000);

		// And unfocus the element to stop showing the explainer
		document.activeElement.blur();
	}

	/** Copy JSON to the user's clipboard. */
	function copyJSON(e) {
		let form = e.target.closest("form");
		
		// Copy text to clipboard
		navigator.clipboard.writeText(form.querySelector("#jsoninput").value.trim());

		// Let user know
		showMessage(e.target, t("ALERTS.CONFIRM_COPIED"));
	}

	/** Download JSON as a .json file. */
	function downloadJSON(e) {
		// From https://www.geeksforgeeks.org/how-to-save-text-as-a-file-in-html-css-and-javascript/
		let input = e.target.closest("form").querySelector("#jsoninput").value.trim();

		// Create and click download link
		let inputBlob =
			new Blob([input], { type: "text/plain" });
		let inputBlobURL = URL.createObjectURL(inputBlob);
		let dlLink = document.createElement("a");
		dlLink.setAttribute("download", "beebo-dialogue.json");
		dlLink.href = inputBlobURL;
		dlLink.click();

		// Let user know
		showMessage(e.target, t("ALERTS.CONFIRM_DOWNLOADED"));
	}

	/** Upload a .json file to the editor. */
	async function uploadJSON(e) {
		const file = e.target.files[0];

		// confirm it's a JSON file
		if (file.type !== "application/json") {
			window.alert(t("ALERTS.ERROR_JSON_FILETYPE"));
			return;
		}

		try {
			let contents = JSON.parse(await file.text());	// confirm it's proper JSON

			if (!(contents.every(obj => {	// confirm that every array item…
				return Object.prototype.toString.call(obj) === "[object Object]"	// is an object
				&& Object.keys(obj).some(	// has at least one of the dialogue/MCQ keys
					x => ["color", "portrait", "speaker", "dialogue", "options"].includes(x)
				)
			}))) {
				window.alert(t("ALERTS.ERROR_JSON_FORMAT"));
				return;
			}

			// Input validated! Now go through and make the dialogue
			setBlocks(contents.map((obj, index) => {
				return {
					id: `upload_${(new Date()).getTime()}_${index}`,
					...validate({
						type: getBlockType(obj),
						data: obj,
						translator: t,
					}),
				}
			}));

			// Let user know it was successful
			showMessage(e.target.previousElementSibling, t("ALERTS.CONFIRM_UPLOADED"));
		} catch (error) {
			window.alert(error.message);
		}
	}
	// #endregion

	return <form id="jsonform" name="jsonform" className="menu">
		<h2>{t("FORMS.JSON.TITLE")}</h2>
		<p className="explainer">{t("FORMS.JSON.SUBTITLE")}</p>

		<textarea id="jsoninput" name="jsoninput" value={getJSON()} readOnly={true} />

		<div className="buttons">
			<button type="button" className="blockbtn" id="copyjson" onClick={copyJSON} aria-describedby="copyexplainer">{t("ACTIONS.COPY")}</button>
			<p className="explainer" id="copyexplainer">{t("FORMS.JSON.EXPLAIN_COPY")}</p>

			<button type="button" className="blockbtn" id="downloadjson" onClick={downloadJSON} aria-describedby="downloadexplainer">{t("ACTIONS.DOWNLOAD")}</button>
			<p className="explainer" id="downloadexplainer">{t("FORMS.JSON.EXPLAIN_DOWNLOAD")}</p>

			<label className="blockbtn" id="uploadlabel" aria-describedby="uploadexplainer">
				<span className="btnlabel">{t("ACTIONS.UPLOAD")}</span>
				<input className="visuallyhidden" name="uploadjson" onChange={uploadJSON} type="file" accept=".json" />
			</label>
			<p className="explainer" id="uploadexplainer">{t("FORMS.JSON.EXPLAIN_UPLOAD")}</p>
		</div>
		
		<a className="samplebtn barbtn" href={`${process.env.PUBLIC_URL}/assets/sample-dialogue.json`} download>{t("ACTIONS.AUTOFILL")}</a>
	</form>;
}