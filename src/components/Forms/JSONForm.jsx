import { memo, useContext } from "react";
import BlockContext from "../../context/BlockContext";
import { useTranslation } from "react-i18next";
import getBlockType from "../../utils/getBlockType";
import validate from "../../utils/validateData";
import "../../styles/JSONForm.css";

/**
 * A form for mass-editing content blocks through JSON files.
 * @returns A <form> element for reading/writing JSON.
 */
export default memo(function JSONForm() {
	const [allBlocks, setBlocks] = useContext(BlockContext);
	const { t, i18n } = useTranslation();

	/**
	 * Converts the list of content blocks into JSON format, removing any IDs used for rendering.
	 * @returns A JSON string representing `allBlocks`.
	 */
	function getJSON() {
		return JSON.stringify(
			allBlocks.map(el => {
				let noID = {...el, id: undefined};
				if ("options" in el) noID.options = el.options.map(opt => {
					return { ...opt, id: undefined};
				})
				if ("altText" in el) noID.altText = undefined;
				return noID;
			}),
			null,
			"  "
		)
	}

	// #region Handlers
	/**
	 * Replaces the given button's text with a given message for a few seconds and unfocuses from the currently-selected button. Helper for JSON form handlers.
	 * @param {HTMLButtonElement|HTMLSpanElement} btn The element containing the label to be replaced.
	 * @param {string} message The message to be displayed on `btn`.
	 */
	function showMessage(btn, message) {
		/** Original button text, to be switched back to after a few seconds. */
		let original = btn.innerText;
		
		btn.innerText = message;
		setTimeout(() => { btn.innerText = original }, 2000);

		// And unfocus the element to stop showing the explainer
		document.activeElement.blur();
	}

	/** Copies JSON to the user's clipboard. */
	function copyJSON(e) {
		let form = e.target.closest("form");
		
		// Copy text to clipboard
		navigator.clipboard.writeText(form.querySelector("#jsoninput").value.trim());

		// Let user know
		showMessage(e.target, t("alerts.confirm_copied"));
	}

	/** Downloads JSON as a .json file.
	 * Taken from {@link https://www.geeksforgeeks.org/how-to-save-text-as-a-file-in-html-css-and-javascript/ GeeksforGeeks}.
	 */
	function downloadJSON(e) {
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
		showMessage(e.target, t("alerts.confirm_downloaded"));
	}

	/** Uploads a .json file to the editor and renders its contents. */
	async function uploadJSON(e) {
		const file = e.target.files[0];

		// confirm it's a JSON file
		if (file.type !== "application/json") {
			window.alert(t("alerts.error_json_filetype"));
			return;
		}

		try {
			let contents = JSON.parse(await file.text());	// confirm it's proper JSON

			if (!(contents.every(obj => {	// confirm that every array item…
				return Object.prototype.toString.call(obj) === "[object Object]"	// is an object
				&& Object.keys(obj).some(	// has at least one of the dialogue/MCQ keys
					x => ["color", "portrait", "speaker", "dialogue", "options", "image", "stretch", "altText"].includes(x)
				)
			}))) {
				window.alert(t("alerts.error_json_format"));
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
			showMessage(e.target.previousElementSibling, t("alerts.confirm_uploaded"));
		} catch (error) {
			window.alert(error.message);
		}
	}
	// #endregion

	return <form id="jsonform" name="jsonform" className="menu">
		<h2>{t("forms.json.title")}</h2>
		<p className="explainer">{t("forms.json.subtitle")}</p>

		<textarea id="jsoninput" name="jsoninput" value={getJSON()} readOnly={true} />

		<div className="buttons">
			<button type="button" className="blockbtn" id="copyjson" onClick={copyJSON} aria-describedby="copyexplainer">{t("actions.copy")}</button>

			<button type="button" className="blockbtn" id="downloadjson" onClick={downloadJSON} aria-describedby="downloadexplainer">{t("actions.download")}</button>

			<label className="blockbtn" id="uploadlabel" aria-describedby="uploadexplainer">
				<span className="btnlabel">{t("actions.upload")}</span>
				<input className="visuallyhidden" name="uploadjson" onChange={uploadJSON} type="file" accept=".json" />
			</label>
		</div>

		<p className="explainer">
			<span id="copyexplainer">{t("forms.json.explain_copy")}</span>
			<span id="downloadexplainer">{t("forms.json.explain_download")}</span>
			<span id="uploadexplainer">{t("forms.json.explain_upload")}</span>
		</p>
		
		<a className="samplebtn barbtn" href={`${process.env.PUBLIC_URL}/assets/sample-dialogue/${i18n.language}.json`} download={`${t("forms.json.sample")}.json`}>{t("actions.autofill")}</a>
	</form>;
})