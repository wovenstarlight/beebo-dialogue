import { useContext, useState } from "react";
import { BlockContext } from "../../context/BlockContext";
import DialogueInputs from "./Inputs/DialogueInputs";
import sampleDialogues from "../../assets/data/sampleDialogue";
import validate from "../../utils/validateData";
import ChoiceInputs from "./Inputs/ChoiceInputs";

export default function AddForm() {
	const [, setBlocks] = useContext(BlockContext);

	const [activeTab, setActiveTab] = useState("dialogue");
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
			...validate({
				type: "dialogue",
				data: {
					color: dialogueOptions.color,
					portrait: dialogueOptions.portrait,
					speaker: dialogueOptions.speaker,
					dialogue: dialogueOptions.dialogue,
				},
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
		- main form with the standard inputs
		- checkbox to keep the color palette selected.
		- buttons to create the corresponding box and to reset the form.
		- button that autofills the form with sample dialogue.
	*/
	return <form id="addform" name="addform" onSubmit={handleSubmit} className={`menu blockform ${dialogueOptions.color}`}>
		<h2>Add new element</h2>

		<fieldset id="tabber">
			<legend>Choose what you'd like to add:</legend>
			<label>
				<input
					type="radio" name="currentTab" className="hidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value="dialogue"
					checked={activeTab === "dialogue"}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">Dialogue</span>
			</label>
			<label>
				<input
					type="radio" name="currentTab" className="hidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value="choice"
					checked={activeTab === "choice"}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">Choices</span>
			</label>
		</fieldset>

		<fieldset id="adddialogue" className="inputsection" disabled={activeTab !== "dialogue"} hidden={activeTab !== "dialogue"}>
			<DialogueInputs
				data={dialogueOptions}
				setData={setDialogueOptions}
			/>
		</fieldset>

		<fieldset id="addchoice" className="inputsection" disabled={activeTab !== "choice"} hidden={activeTab !== "choice"}>
			<ChoiceInputs
				data={dialogueOptions}
				setData={setDialogueOptions}
			/>
		</fieldset>

		<label id="keepcolor">
			<input type="checkbox" checked={dialogueOptions.keepColor} onChange={(e) => setDialogueOptions({ ...dialogueOptions, keepColor: e.target.checked })} className="hidden" />
			<span className="icon" aria-hidden={true} />
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