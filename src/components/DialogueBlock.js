import { useState } from "react";
import DialogueForm from "./DialogueForm";
import TextBox from "./TextBox";
import validateDialogue from "../utils/validateDialogue";

function DialogueUnit({ id, color, speaker, portrait, dialogue, allDialogues, setDialogues, isFirst, isLast }) {
	/** Finds the neighboring dialogue boxes. Helper for `moveUp`/`moveDown` and `edit`. */
	function getNeighbors() {
		let index = allDialogues.findIndex(el => el.id === id);
		return [allDialogues.slice(0, index), allDialogues[index], allDialogues.slice(index + 1)];
	}

	// #region Edit this box
	/** Temporary variables for editing this dialogue box with. */
	const [tempColor, setTempColor] = useState(color);
	const [tempSpeaker, setTempSpeaker] = useState(speaker);
	const [tempPortrait, setTempPortrait] = useState(portrait);
	const [tempDialogue, setTempDialogue] = useState(dialogue);
	const [editing, setEditing] = useState(false);
	/** Open the editing menu for this dialogue box. */
	function openEditor() {
		setEditing(true);
	}
	/** Update this dialogue box with the edited information. */
	function handleSubmit(e) {
		e.preventDefault();
		let [pre, , post] = getNeighbors();
		setDialogues(pre.concat([{
			id: id,
			...validateDialogue({
				color: tempColor,
				speaker: tempSpeaker,
				portrait: tempPortrait,
				dialogue: tempDialogue,
			})
		}], post));
		setEditing(false);
	}
	function cancelEdit(e) {
		// Reset the temporary variables to their original values
		setTempColor(color);
		setTempSpeaker(speaker);
		setTempPortrait(portrait);
		setTempDialogue(dialogue);
		// And hide this form
		setEditing(false);
	}
	// #endregion

	return <>
	{!editing && <TextBox
		id={id}
		color={color}
		speaker={speaker}
		portrait={portrait}
		dialogue={dialogue}
		allDialogues={allDialogues}
		setDialogues={setDialogues}
		isFirst={isFirst}
		isLast={isLast}
		editHandler={openEditor}
		getNeighbors={getNeighbors}
	/>}
	
	{editing && <DialogueForm
		id={`edit_${id}`}
		title="Edit"
		color={tempColor}
		setColor={setTempColor}
		speaker={tempSpeaker}
		setSpeaker={setTempSpeaker}
		dialogue={tempDialogue}
		setDialogue={setTempDialogue}
		portrait={tempPortrait}
		setPortrait={setTempPortrait}
		handleSubmit={handleSubmit}
	>
		<button className="submitbtn" type="submit">Update</button>
		<button className="resetbtn" type="reset" onClick={cancelEdit}>Cancel</button>
	</DialogueForm>}
	</>;
}

export default DialogueUnit;