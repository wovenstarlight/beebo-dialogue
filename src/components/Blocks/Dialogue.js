import { useState } from "react";
import TextBox from "./TextBox";
import DialogueInputs from "../Forms/Inputs/DialogueInputs";
import validateDialogue from "../../utils/validateDialogue";
import getNeighbours from "../../utils/getNeighbours";

export default function DialogueBlock({
	data, data: { id, color, speaker, portrait, dialogue },	// Keep both destructured and whole `data` arg for further substitutions
	allBlocks, setBlocks,
	isFirst, isLast,
}) {

	// #region Edit this box
	/** Temporary variables for editing this dialogue box with. */
	const [temp, setTemp] = useState({
		color: color,
		speaker: speaker,
		portrait: portrait,
		dialogue: dialogue,
	})
	const [editing, setEditing] = useState(false);
	/** Open the editing menu for this dialogue box. */
	function openEditor() {
		setEditing(true);
	}
	/** Update this dialogue box with the edited information. */
	function handleSubmit(e) {
		e.preventDefault();
		let [pre, , post] = getNeighbors();
		setBlocks(pre.concat([{
			id: id,
			...validateDialogue({
				color: temp.color,
				speaker: temp.speaker,
				portrait: temp.portrait,
				dialogue: temp.dialogue,
			})
		}], post));
		setEditing(false);
	}
	function cancelEdit(e) {
		// Reset the temporary variables to their original values
		setTemp({
			color: color,
			speaker: speaker,
			portrait: portrait,
			dialogue: dialogue,
		})
		// And hide this form
		setEditing(false);
	}
	// #endregion

	return <>
	{!editing && <TextBox
		data={data}
		setBlocks={setBlocks}
		isFirst={isFirst}
		isLast={isLast}
		editHandler={openEditor}
		getNeighbors={getNeighbors}
	/>}
	
	{editing && <form id={`edit_${id}`} name={`edit_${id}`} onSubmit={handleSubmit} className={`menu dialogueform ${temp.color}`}>
		<h2>Edit dialogue</h2>
		<DialogueInputs
			data={temp}
			setData={setTemp}
			handleSubmit={handleSubmit}
		/>

		<button className="submitbtn" type="submit">Update</button>
		<button className="resetbtn" type="reset" onClick={cancelEdit}>Cancel</button>
	</form>}
	</>;
}

export default DialogueBlock;