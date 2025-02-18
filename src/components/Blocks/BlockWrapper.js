import { useContext, useState } from "react";
import { BlockContext } from "../../context/BlockContext";
import { useTranslation } from "react-i18next";
import { getDefaults } from "../../constants/blockDefaults";
import "../../constants/documentation";
import Choice from "./Choice";
import ChoiceInputs from "../Forms/Inputs/ChoiceInputs";
import Dialogue from "./Dialogue";
import DialogueInputs from "../Forms/Inputs/DialogueInputs";
import splitAround from "../../utils/splitAround";
import validate from "../../utils/validateData";
import "../../styles/ModMenu.css";

/**
 * A wrapper element for a content block.
 * @param {object} args
 * @param {BlockType} args.type The type of block this is.
 * @param {DataDialogue|DataChoice} args.data Data representing this block.
 * @returns A content block with a modification menu/editing form.
 */
export default function BlockWrapper({ type, data }) {
	const [allBlocks, setBlocks] = useContext(BlockContext);
	const { t } = useTranslation();

	// #region Edit this box
	/* Temporary variables for editing this block with. */
	/** Basic information for this block. @type {DataDialogue|DataChoice} */
	let initial;
	switch (type) {
		case "choice":
			initial = {
				color: data.color,
				options: data.options,
			};
			break;

		case "dialogue":
		default:
			initial = {
				color: data.color,
				speaker: data.speaker,
				portrait: data.portrait,
				dialogue: data.dialogue,
			};
			break;
	}
	initial.id = data.id;
	/** Temporary data for use in the edit menu. */
	const [temp, setTemp] = useState(initial);
	/** Tracker for whether the edit menu is open. */
	const [editing, setEditing] = useState(false);

	/** Update this block with the edited information. */
	function updateBlock(e) {
		// Regardless of block type, will need to setBlocks to use new object
		e.preventDefault();
		let [pre, , post] = splitAround(allBlocks, data.id);
		setBlocks(pre.concat({
			id: data.id,
			...validate({
				type: type,
				data: temp,
				translator: t,
			}),
		}, post));
		setEditing(false);
	}

	/** Close edit menu and reset temporary variables. */
	function cancelEdit() {
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
			editMenuContent = <>
				<h2>{t("FORMS.EDITOR.TITLE_CHOICE")}</h2>
				<ChoiceInputs
					data={temp}
					setData={setTemp}
				/>
			</>;
			break;

		case "dialogue":
		default:
			blockContent = <Dialogue {...data} />;
			editMenuContent = <>
				<h2>{t("FORMS.EDITOR.TITLE_DIALOGUE")}</h2>
				<DialogueInputs
					data={temp}
					setData={setTemp}
				/>
			</>;
			break;
	}

	return <>
		{!editing && <article id={data.id} className={`${type} ${data.color ?? getDefaults({ type: type }).color}`}>
			{blockContent}

			<ModMenu id={data.id} setEditing={setEditing} />
		</article>}
		
		{editing && <form id={`edit_${data.id}`} name={`edit_${data.id}`} onSubmit={updateBlock} className={`menu blockform ${temp.color}`}>
			{editMenuContent}
	
			<button className="barbtn submitbtn" type="submit">{t("ACTIONS.UPDATE")}</button>
			<button className="barbtn resetbtn" type="reset" onClick={cancelEdit}>{t("ACTIONS.CANCEL")}</button>
		</form>}
	</>;
}

/**
 * A menu for modifying its associated block. Includes:
 * - content edit button
 * - block deletion button
 * - reordering buttons
 * @param {object} args
 * @param {string} args.id The ID of the associated block, to confirm its list placement.
 * @param {function} setEditing The setter for whether this block's content is being edited.
 * @returns A modification menu.
 */
function ModMenu({ id, setEditing }) {
	let [allBlocks, setBlocks] = useContext(BlockContext);
	const { t } = useTranslation();

	/** Tracks whether block is at top of list. For disabling the "move up" button. */
	const isFirst = allBlocks.at(0)?.id === id;
	/** Tracks whether block is at bottom of list. For disabling the "move down" button. */
	const isLast = allBlocks.at(-1)?.id === id;

	// #region Handlers
	/** Toggles the edit menu for the current block. */
	function editBlock() {
		setEditing(true);
	}

	/** Deletes the current block. */
	function deleteBlock() {
		setBlocks(blocks => blocks.filter(el => el.id !== id));
	}

	/** Swaps the current block with its predecessor. */
	function moveBlockUp() {
		setBlocks(blocks => {
			let [pre, curr, post] = splitAround(blocks, id);
			return pre.slice(0, -1).concat(curr, pre.at(-1), post);
		});
	}
	/** Swaps the current block with its successor. */
	function moveBlockDown() {
		setBlocks(blocks => {
			let [pre, curr, post] = splitAround(blocks, id);
			return pre.concat(post.at(0), curr, post.slice(1));
		});
	}
	//#endregion

	return <div className="modmenu buttons">
		<button className="blockbtn editbtn" onClick={editBlock}>{t("ACTIONS.EDIT")}</button>
		<button className="blockbtn deletebtn" onClick={deleteBlock}>{t("ACTIONS.DELETE")}</button>
		{/* Don't render the move buttons at all if this is the only block i.e. both first and last */}
		{!(isFirst && isLast) && <> 
		<button className="blockbtn movebtn" onClick={moveBlockUp} disabled={isFirst}>{t("ACTIONS.MOVE_UP")}</button>
		<button className="blockbtn movebtn" onClick={moveBlockDown} disabled={isLast}>{t("ACTIONS.MOVE_DOWN")}</button>
		</>}
	</div>;
}