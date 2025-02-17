import { useState } from "react";
import DialogueInputs from "./Inputs/DialogueInputs";
import sampleDialogues from "../../assets/data/sampleDialogue";
import validateDialogue from "../../utils/validateDialogue";

export default function AddForm({ setBlocks }) {
	const [dialogueOptions, setDialogueOptions] = useState({
		color: "purple",
		speaker: "",
		dialogue: "",
		portrait: "",
		keepColor: false,
	});

	function handleSubmit(e) {
		e.preventDefault();
		const newDialogue = {
			id: `${dialogueOptions.color.toLowerCase()}_${(new Date()).getTime()}`,
			...validateDialogue({
				color: dialogueOptions.color,
				portrait: dialogueOptions.portrait,
				speaker: dialogueOptions.speaker,
				dialogue: dialogueOptions.dialogue,
			})
		};
		setBlocks(values => [...values, newDialogue]);
		clearForm(e);
	}

	function clearForm(e) {
		const keepColor = dialogueOptions.keepColor,
			ogColor = dialogueOptions.color;
		// Clear stored values
		setDialogueOptions((options) => ({
			...options,
			color: keepColor ? ogColor : "purple",
			speaker: "",
			dialogue: "",
			portrait: "",
		}));
		// And remove the invalid markers
		e.target.closest("form").reset();
	}

	function fillSample() {
		let sample = sampleDialogues[Math.floor(Math.random() * sampleDialogues.length)];
		// Clear stored values
		setDialogueOptions({
			color: sample.color,
			speaker: sample.speaker,
			dialogue: sample.dialogue,
			portrait: sample.portrait,
		});
	}

	/* BREAKDOWN
		- main DialogueForm with the standard inputs
		- checkbox to keep the color palette selected.
		- buttons to create the corresponding box and to reset the form.
		- button that autofills the form with sample dialogue.
	*/
	return <form id="addform" name="addform" onSubmit={handleSubmit} className={`menu dialogueform ${dialogueOptions.color}`}>
		<h2>Add new dialogue</h2>

		<DialogueInputs
			data={dialogueOptions}
			setData={setDialogueOptions}
		/>

		<label id="keepcolor">
			<input type="checkbox" checked={dialogueOptions.keepColor} onChange={(e) => setDialogueOptions({ ...dialogueOptions, keepColor: e.target.checked })} />
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