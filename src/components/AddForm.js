import { useState } from "react";
import BaseForm from "./BaseForm";
import sampleDialogues from "../assets/data/sampleDialogue";
import validateDialogue from "../utils/validateDialogue";

function AddForm({ setDialogues }) {
	const [color, setColor] = useState("purple");
	const [speaker, setSpeaker] = useState("");
	const [dialogue, setDialogue] = useState("");
	const [portrait, setPortrait] = useState("");

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
		setColor("purple");
		setSpeaker("");
		setDialogue("");
		setPortrait("");
		// And remove the invalid markers
		e.target.closest("form").reset();
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
	Four inputs:
		- one for the color palette used by the box.
		- one for speaker. Has a datalist with suggestions from canon. (Pity that Ángel's accent means it doesn't automatically get suggested under "A"…)
		- one for the portrait. Needs the full list of portraits so it's been banished to its own component.
		- one for the actual text. Length limit set roughly at how much takes up the full box.
	
	Plus buttons to create the corresponding box and to reset the form.
	And one for testing purposes that autofills the form with sample dialogue.
	*/
	return (
		<BaseForm
			id="addform"
			title="Add new dialogue"
			handleSubmit={handleSubmit}
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
		</BaseForm>
	)
}

export default AddForm;