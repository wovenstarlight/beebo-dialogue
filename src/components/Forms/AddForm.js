import { useState } from "react";
import DialogueInputs from "./Inputs/DialogueInputs";
import sampleDialogues from "../../assets/data/sampleDialogue";
import validateDialogue from "../../utils/validateDialogue";

function AddForm({ setBlocks }) {
	const [color, setColor] = useState("purple");
	const [speaker, setSpeaker] = useState("");
	const [dialogue, setDialogue] = useState("");
	const [portrait, setPortrait] = useState("");
	const [keepColor, setKeepColor] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const newDialogue = {
			id: `${color.toLowerCase()}_${(new Date()).getTime()}`,
			...validateDialogue({
				color: color,
				portrait: portrait,
				speaker: speaker,
				dialogue: dialogue,
			})
		};
		setBlocks(values => [...values, newDialogue]);
		clearForm(e);
	}

	function clearForm(e) {
		// Clear stored values
		if (!keepColor) setColor("purple");
		else var ogColor = color;
		setSpeaker("");
		setDialogue("");
		setPortrait("");
		// And remove the invalid markers
		e.target.closest("form").reset();
		if (keepColor) setColor(ogColor);
	}

	function fillSample(e) {
		let sample = sampleDialogues[Math.floor(Math.random() * sampleDialogues.length)];
		// Clear stored values
		setColor(sample.color);
		setSpeaker(sample.speaker);
		setDialogue(sample.dialogue);
		setPortrait(sample.portrait);
	}

	/* BREAKDOWN
		- main DialogueForm with the standard inputs
		- checkbox to keep the color palette selected.
		- buttons to create the corresponding box and to reset the form.
		- button that autofills the form with sample dialogue.
	*/
	return <form id="addform" name="addform" onSubmit={handleSubmit} className={`menu dialogueform ${color}`}>
		<h2>Add new dialogue</h2>

		<DialogueInputs
			color={color}
			setColor={setColor}
			speaker={speaker}
			setSpeaker={setSpeaker}
			dialogue={dialogue}
			setDialogue={setDialogue}
			portrait={portrait}
			setPortrait={setPortrait}
		/>

		<label id="keepcolor">
			<input type="checkbox" checked={keepColor} onChange={(e) => setKeepColor(e.target.checked)} />
			<span className="icon" />
			<span className="labeltext">
				Reuse same palette for future dialogue
				<br/>
				<small>When off, palette will reset to purple after every submission</small>
			</span>
		</label>

		<button className="submitbtn" type="submit">Add</button>
		<button className="resetbtn" type="reset" onClick={clearForm}>Clear</button>
		<button className="autofillbtn" type="button" onClick={fillSample}>Need a reference?</button>
	</form>;
}

export default AddForm;