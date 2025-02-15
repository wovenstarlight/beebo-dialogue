import { useState } from "react";
import "../styles/TextBox.css";
import BaseForm from "./BaseForm";

function TextBox({ id, color, speaker, portrait, dialogue, allDialogues, setDialogues, isFirst, isLast }) {
	// #region Edit this box
	/** Temporary variables for editing this dialogue box with. */
	const [tempColor, setTempColor] = useState(color);
	const [tempSpeaker, setTempSpeaker] = useState(speaker);
	const [tempPortrait, setTempPortrait] = useState(portrait);
	const [tempDialogue, setTempDialogue] = useState(dialogue);
	const [editIsHidden, setEditIsHidden] = useState(true);
	/** Open the editing menu for this dialogue box. */
	function editBox(e) {
		let article = e.target.closest("article")
		article.setAttribute("hidden", "true");	// using JS directly to avoid re-rendering
		setEditIsHidden(false);
	}
	/** Update this dialogue box with the edited information. */
	function handleSubmit(e) {
		e.preventDefault();
		let [pre, , post] = getNeighbors();
		setDialogues(pre.concat([{
			id: id,
			color: tempColor,
			speaker: tempSpeaker,
			portrait: tempPortrait,
			dialogue: tempDialogue,
		}], post));
		setEditIsHidden(true);
		// using JS directly to avoid re-rendering again after the update from setDialogues
		e.target.previousElementSibling.removeAttribute("hidden");
	}
	function cancelEdit(e) {
		// Reset the temporary variables to their original values
		setTempColor(color);
		setTempSpeaker(speaker);
		setTempPortrait(portrait);
		setTempDialogue(dialogue);
		// And hide this form
		setEditIsHidden(true);
		e.target.closest("form").previousElementSibling.removeAttribute("hidden");	// using JS directly to avoid re-rendering
	}
	// #endregion

	/** Deletes the current dialogue box. */
	function deleteBox() {
		setDialogues(dialogues => dialogues.filter(el => el.id !== id));
	}

	// #region Move this box
	/** Finds the neighboring dialogue boxes. Helper for `moveUp`/`moveDown` and `edit`. */
	function getNeighbors() {
		let index = allDialogues.findIndex(el => el.id === id);
		return [allDialogues.slice(0, index), allDialogues[index], allDialogues.slice(index + 1)];
	}
	/** Swaps the current dialogue box with its predecessor. */
	function moveUp() {
		let [pre, curr, post] = getNeighbors();
		setDialogues(pre.slice(0, -1).concat([curr, pre.at(-1)], post));
	}
	/** Swaps the current dialogue box with its successor. */
	function moveDown() {
		let [pre, curr, post] = getNeighbors();
		setDialogues(pre.concat([post.at(0), curr], post.slice(1)));
	}
	//#endregion

	return <>
		<article id={id} className={`dialogue ${color ?? "house"}`}>
			<header className="speaker">
				<span className="question">?</span>
				<span className="name">{speaker ?? "Y/N"}</span>
			</header>
			<div className="body">
				<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait ?? "default.png")} aria-hidden="true" />
				<p className="text">{dialogue ?? "Lorem ipsum dolor sit amet."}</p>
			</div>

			<div className="buttons">
				<button className="edit" onClick={editBox}>Edit</button>
				<button className="delete" onClick={deleteBox}>Delete</button>
				{/* Don't render the move buttons at all if this is the only box i.e. both first and last */}
				{!(isFirst && isLast) && <> 
				<button className="move" onClick={moveUp} disabled={isFirst}>Move up</button>
				<button className="move" onClick={moveDown} disabled={isLast}>Move down</button>
				</>}
			</div>
		</article>
		<BaseForm
			id={`edit_${id}`}
			title="Edit"
			handleSubmit={handleSubmit}
			hidden={editIsHidden}
			color={tempColor}
			setColor={setTempColor}
			speaker={tempSpeaker}
			setSpeaker={setTempSpeaker}
			dialogue={tempDialogue}
			setDialogue={setTempDialogue}
			portrait={tempPortrait}
			setPortrait={setTempPortrait}
		>
			<button className="submitbtn" type="submit">Update</button>
			<button className="resetbtn" type="reset" onClick={cancelEdit}>Cancel</button>
		</BaseForm>
	</>;
}

export default TextBox;