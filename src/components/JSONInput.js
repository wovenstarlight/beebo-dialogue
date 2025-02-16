import "../styles/JSONForm.css";
import validateDialogue from "../utils/validateDialogue";

function JSONInput({ dialogues, setDialogues }) {
	function getJSON() {
		return JSON.stringify(
			dialogues.map(el => {
				return {...el, id: undefined};
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
		showMessage(e.target, "Copied!");
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
		showMessage(e.target, "Downloading...");
	}

	/** Upload a .json file to the editor. */
	async function uploadJSON(e) {
		const file = e.target.files[0];

		// confirm it's a JSON file
		if (file.type !== "application/json") {
			window.alert("Wrong file type!\n\nYou must upload a .json file.");
			return;
		}

		try {
			let contents = JSON.parse(await file.text());	// confirm it's proper JSON

			if (!(contents.every(obj => {	// confirm that every array item…
				return Object.prototype.toString.call(obj) === "[object Object]"	// is an object
				&& Object.keys(obj).some(x => ["color", "portrait", "speaker", "dialogue"].includes(x))	// has at least one of the dialogue keys
			}))) {
				window.alert("Wrong format!\n\nThe dialogue file should contain an array of objects, each of which only has a subset of the keys \"color\", \"portrait\", \"speaker\", and \"dialogue\".");
				return;
			}

			// Input validated! Now go through and make the dialogue
			setDialogues(contents.map((obj, index) => {
				return {
					id: `upload_${(new Date()).getTime()}_${index}`,
					...validateDialogue(obj),
				}
			}));

			// Let user know it was successful
			showMessage(e.target.previousElementSibling, "Uploaded!");
		} catch (error) {
			window.alert(error.message);
		}
	}
	// #endregion

	return <form id="jsonform" name="jsonform" className="menu">
		<p className="explainer">...or,</p>
		<h2>Edit via JSON</h2>
		<p className="explainer">Save/create multiple dialogue boxes at once!</p>

		<textarea id="jsoninput" name="jsoninput" value={getJSON()} readOnly={true} />

		<div className="buttons">
			<button type="button" className="jsonbtn" id="copyjson" onClick={copyJSON} aria-describedby="copyexplainer">Copy</button>
			<p className="explainer" id="copyexplainer">Copy the above JSON to your clipboard</p>

			<button type="button" className="jsonbtn" id="downloadjson" onClick={downloadJSON} aria-describedby="downloadexplainer">Download</button>
			<p className="explainer" id="downloadexplainer">Download as a JSON file to your device</p>

			<label className="jsonbtn" id="uploadlabel" aria-describedby="uploadexplainer">
				<span className="btnlabel">Upload</span>
				<input id="uploadjson" name="uploadjson" onChange={uploadJSON} type="file" accept=".json" />
			</label>
			<p className="explainer" id="uploadexplainer">Upload a JSON file (this overwrites existing dialogue!)</p>
		</div>
		
		<a id="samplefile" href={`${process.env.PUBLIC_URL}/assets/sampleFile.json`} download>Need a reference?</a>
	</form>;
}

export default JSONInput;