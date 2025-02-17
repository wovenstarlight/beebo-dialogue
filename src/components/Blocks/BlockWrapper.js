import { useContext, useState } from "react";
import { BlockContext } from "../../context/BlockContext";
import "../../styles/ModMenu.css";
import getNeighbours from "../../utils/getNeighbours";
import validate from "../../utils/validateData";
import Dialogue from "./Dialogue";
import Choice from "./Choice";
import ModMenu from "./ModMenu";
import DialogueInputs from "../Forms/Inputs/DialogueInputs";

export default function BlockWrapper({ type, data }) {
	const [allBlocks, setBlocks] = useContext(BlockContext);

	// #region Block types
	/**
	 * @typedef DataDialogue
	 * Data representing a box of dialogue
	 * @type {object}
	 * @property {string} color The color palette for this block
	 * @property {string} speaker The speaker of the dialogue
	 * @property {string} portrait The shorthand URL to the portrait/sprite for the speaker
	 * @property {string} dialogue The text being spoken
	 */
	/**
	 * @typedef DataChoice
	 * Data representing a multiple choice menu
	 * @type {object}
	 * @property {string} color The color palette for this block
	 * @property {DataChoiceOption[]} options The individual options making up the menu
	 */
	/**
	 * @typedef DataChoiceOption
	 * Data representing a single option from a multiple choice menu
	 * @type {object}
	 * @property {?string} color The color palette for this option. Inherited from the parent menu if not provided
	 * @property {string} text The text label displayed for this option
	 * @property {?boolean} selected `true` if this option should be highlighted as though being clicked; `false`/`null` otherwise
	 */
	// #endregion

	// #region Edit this box
	/* Temporary variables for editing this block with. */
	/** Basic information for this block. @type {DataDialogue|DataChoice} */
	let initial;
	switch (type) {
		case "dialogue":
			initial = {
				color: data.color,
				speaker: data.speaker,
				portrait: data.portrait,
				dialogue: data.dialogue,
			};
			break;
		
		case "choice":
			initial = {
				color: data.color,
				options: data.options,
			};
			break;
	}
	const [temp, setTemp] = useState(initial);
	const [editing, setEditing] = useState(false);

	/** Update this block with the edited information. */
	function updateBlock(e) {
		// Regardless of block type, will need to setBlocks to use new object
		e.preventDefault();
		let [pre, , post] = getNeighbours(allBlocks, data.id);
		setBlocks(pre.concat([{
			id: data.id,
			...validate({
				type: type,
				data: temp,
			}),
		}], post));
		setEditing(false);
	}

	/** Close edit menu and reset temporary variables. */
	function cancelEdit(e) {
		// Reset the temporary variables to their original values
		setTemp(value => {
			let obj = {};
			for (const key in value) obj[key] = data[key];
			return obj;
		})
		// And hide this form
		setEditing(false);
	}
	// #endregion

	/** The actual, game-style content that will eventually end up in screenshots. */
	let blockContent;
	/** The edit menu title/inputs/labels for this block. */
	let editMenuContent;
	switch (type) {
		case "choice":
			blockContent = <Choice {...data} />;
			editMenuContent = <p>{/*TODO*/}</p>
			break;

		case "dialogue":
		default:
			blockContent = <Dialogue {...data} />;
			editMenuContent = <>
				<h2>Edit dialogue</h2>
				<DialogueInputs
					data={temp}
					setData={setTemp}
					submitForm={updateBlock}
				/>
			</>;
			break;
	}

	return <>
		{!editing && <article id={data.id} className={`${type} ${data.color ?? "purple"}`}>
			{blockContent}

			<ModMenu id={data.id} setEditing={setEditing} />
		</article>}
		
		{editing && <form id={`edit_${data.id}`} name={`edit_${data.id}`} onSubmit={updateBlock} className={`menu ${type}form ${temp.color}`}>
			{editMenuContent}
	
			<button className="submitbtn" type="submit">Update</button>
			<button className="resetbtn" type="reset" onClick={cancelEdit}>Cancel</button>
		</form>}
	</>;
}