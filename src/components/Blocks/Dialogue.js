import { useContext, useState } from "react";
import { BlockContext } from "../../context/BlockContext";
import "../../styles/TextBox.css";
import ModMenu from "./ModMenu";
import DialogueInputs from "../Forms/Inputs/DialogueInputs";
import validate from "../../utils/validateData";
import getNeighbours from "../../utils/getNeighbours";

function TextBox({ id, color, speaker, portrait, dialogue, setEditing }) {
	return (
		<article id={id} className={`dialogue ${color ?? "purple"}`}>
			<header className="speaker">
				<span className="question" aria-hidden={true}>?</span>
				<span className="name">{speaker ?? "Y/N"}</span>
			</header>
			<div className="body">
				<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait ?? "misc/someone_shadow.png")} aria-hidden="true" />
				<p className="text">{dialogue ?? "Lorem ipsum dolor sit amet."}</p>
			</div>

			<ModMenu id={id} setEditing={setEditing} />
		</article>
	);
}

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
			...validate({
				type: "dialogue",
				data: {
					color: temp.color,
					speaker: temp.speaker,
					portrait: temp.portrait,
					dialogue: temp.dialogue,
				},
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