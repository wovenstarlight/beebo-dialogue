import { useState } from "react";
import "../styles/AddForm.css";

function AddForm() {
	const [speaker, setSpeaker] = useState("");
	const [dialogue, setDialogue] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		alert(`Trying to create dialogue box with "${speaker}" saying "${dialogue}"`);
		setSpeaker("");		// clear the value
		setDialogue("");	// clear the value
		e.target.reset();	// and remove the invalid markers
	}

	return (
		<form id="addform" name="addform" onSubmit={handleSubmit}>
			<label>
				<span className="labeltext">Speaker</span>
				<input
				id="inputspeaker"
				name="inputspeaker"
				type="text"
				minLength={1}
				maxLength={50}
				required
				value={speaker}
				onChange={(e) => setSpeaker(e.target.value)}
				/>
			</label>
			{/* Select for the portrait */}
			<label>
				<span className="labeltext">Dialogue</span>
				<textarea
				id="inputdialogue"
				name="inputdialogue"
				minLength={1}
				maxLength={110}
				required
				value={dialogue}
				onChange={(e) => setDialogue(e.target.value)}
				/>
			</label>
			<button id="addbtn" type="submit">Add</button>
			<button id="clearbtn" type="reset">Clear</button>
		</form>
	)
}

export default AddForm;