import { useState } from "react";
import DialogueInputs from "../Forms/Inputs/DialogueInputs";
import TextBox from "../TextBox";
import validateDialogue from "../../utils/validateDialogue";

function DialogueBlock({ id, color, speaker, portrait, dialogue, allBlocks, setBlocks, isFirst, isLast }) {
	/** Finds the neighboring dialogue boxes. Helper for `moveUp`/`moveDown` and `edit`. */
	function getNeighbors() {
		let index = allBlocks.findIndex(el => el.id === id);
		return [allBlocks.slice(0, index), allBlocks[index], allBlocks.slice(index + 1)];
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
		setBlocks(pre.concat([{
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
		setBlocks={setBlocks}
		isFirst={isFirst}
		isLast={isLast}
		editHandler={openEditor}
		getNeighbors={getNeighbors}
	/>}
	
	{editing && <form id={`edit_${id}`} name={`edit_${id}`} onSubmit={handleSubmit} className={`menu dialogueform ${tempColor}`}>
		<h2>Edit dialogue</h2>
		<DialogueInputs
			color={tempColor}
			setColor={setTempColor}
			speaker={tempSpeaker}
			setSpeaker={setTempSpeaker}
			dialogue={tempDialogue}
			setDialogue={setTempDialogue}
			portrait={tempPortrait}
			setPortrait={setTempPortrait}
			handleSubmit={handleSubmit}
		/>

		<button className="submitbtn" type="submit">Update</button>
		<button className="resetbtn" type="reset" onClick={cancelEdit}>Cancel</button>
	</form>}
	</>;
}

export default DialogueBlock;