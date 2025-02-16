import { useState } from "react";
import DialogueForm from "./DialogueForm";
import sampleDialogues from "../assets/data/sampleDialogue";
import validateDialogue from "../utils/validateDialogue";

function AddForm({ setDialogues }) {
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
		setDialogues(values => [...values, newDialogue]);
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
	return (
		<DialogueForm
			id="addform"
			title="Add new dialogue"
			handleSubmit={handleSubmit}
			keepColor={keepColor}
			setKeepColor={setKeepColor}
			color={color}
			setColor={setColor}
			speaker={speaker}
			setSpeaker={setSpeaker}
			dialogue={dialogue}
			setDialogue={setDialogue}
			portrait={portrait}
			setPortrait={setPortrait}
		>
			<button className="submitbtn" type="submit">Add</button>
			<button className="resetbtn" type="reset" onClick={clearForm}>Clear</button>
			<button className="autofillbtn" type="button" onClick={fillSample}>Need a reference?</button>
		</DialogueForm>
	)
}

export default AddForm;