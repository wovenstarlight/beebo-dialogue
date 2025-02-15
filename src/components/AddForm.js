import "../styles/AddForm.css";

function AddForm() {
	return (
		<form id="addform" name="addform">
			<label>
				<span className="labeltext">Speaker</span>
				<input id="inputspeaker" name="inputspeaker" type="text" minLength={1} maxLength={50} required />
			</label>
			{/* Select for the portrait */}
			<label>
				<span className="labeltext">Dialogue</span>
				<textarea id="inputdialogue" name="inputdialogue" type="text" minLength={1} maxLength={110} required />
			</label>
			<button id="addbtn">Add</button>
			<button id="clearbtn">Clear</button>
		</form>
	)
}

export default AddForm;