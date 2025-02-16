import "../styles/JSONForm.css";

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

	// #region TODO: Handlers
	/** Render the JSON as dialogues. */
	function handleSubmit(e) {}
	
	/** Copy JSON to the user's clipboard. */
	function copyJSON(e) {}

	/** Download JSON as a .json file. */
	function downloadJSON(e) {}

	/** Upload a .json file to the editor. */
	function uploadJSON(e) {}
	// #endregion

	return <form id="jsonform" name="jsonform" onSubmit={handleSubmit} className="menu">
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
				Upload
				<input id="uploadjson" name="uploadjson" onChange={uploadJSON} type="file" accept=".json" />
			</label>
			<p className="explainer" id="uploadexplainer">Upload a JSON file (this overwrites existing dialogue!)</p>
		</div>
	</form>;
}

export default JSONInput;