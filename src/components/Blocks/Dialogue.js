import { useContext, useState } from "react";
import { BlockContext } from "../../context/BlockContext";
import TextBox from "./TextBox";
import DialogueInputs from "../Forms/Inputs/DialogueInputs";
import validateDialogue from "../../utils/validateDialogue";
import getNeighbours from "../../utils/getNeighbours";

export default function DialogueBlock({ data }) {
	const [allBlocks, setBlocks] = useContext(BlockContext);

	// #region Edit this box
	/** Temporary variables for editing this dialogue box with. */
	const [temp, setTemp] = useState({
		color: data.color,
		speaker: data.speaker,
		portrait: data.portrait,
		dialogue: data.dialogue,
	})
	const [editing, setEditing] = useState(false);
	/** Update this dialogue box with the edited information. */
	function handleSubmit(e) {
		e.preventDefault();
		let [pre, , post] = getNeighbours(allBlocks, data.id);
		setBlocks(pre.concat([{
			id: data.id,
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
			color: data.color,
			speaker: data.speaker,
			portrait: data.portrait,
			dialogue: data.dialogue,
		})
		// And hide this form
		setEditing(false);
	}
	// #endregion

	return <>
	{!editing && <TextBox {...data} setEditing={setEditing} />}
	
	{editing && <form id={`edit_${data.id}`} name={`edit_${data.id}`} onSubmit={handleSubmit} className={`menu dialogueform ${temp.color}`}>
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