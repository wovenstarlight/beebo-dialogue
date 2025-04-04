import { memo, useContext, useState } from "react";
import BlockContext from "../../context/BlockContext";
import { useTranslation } from "react-i18next";
import { getDefaults } from "../../constants/blockDefaults";
import { CHOICE, DIALOGUE, IMAGE } from "../../constants/blockNames";
import "../../constants/documentation";
import Choice from "./Choice";
import ChoiceInputs from "../Forms/Inputs/ChoiceInputs";
import Dialogue from "./Dialogue";
import Image from "./Image";
import { SingleImageInputs } from "../Forms/Inputs/ImageInputs";
import DialogueInputs from "../Forms/Inputs/DialogueInputs";
import { splitAround } from "../../utils/arrayUtils";
import validate from "../../utils/validateData";
import "../../styles/Block.css";

/** A wrapper element for a content block.
 * @param {object} args
 * @param {BlockType} args.type The type of block this is.
 * @param {DataDialogue|DataChoice} args.data Data representing this block.
 * @returns A content block with a modification menu/editing form.
 */
export default memo(function BlockWrapper({ type, data }) {
	const [allBlocks, setBlocks] = useContext(BlockContext);
	const { t } = useTranslation();

	// #region Edit this box
	/** Temporary data for use in the edit menu. */
	const [temp, setTemp] = useState({ ...data });
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
		case IMAGE:
			blockContent = <Image {...data} />;
			editMenuContent = <>
				<h2>{t("forms.editor.title_image")}</h2>
				<SingleImageInputs
					data={temp}
					setData={setTemp}
				/>
			</>;
			break;

		case CHOICE:
			blockContent = <Choice {...data} />;
			editMenuContent = <>
				<h2>{t("forms.editor.title_choice")}</h2>
				<ChoiceInputs
					data={temp}
					setData={setTemp}
				/>
			</>;
			break;

		case DIALOGUE:
		default:
			blockContent = <Dialogue {...data} />;
			editMenuContent = <>
				<h2>{t("forms.editor.title_dialogue")}</h2>
				<DialogueInputs
					data={temp}
					setData={setTemp}
				/>
			</>;
			break;
	}

	return <>
		{!editing && <article id={data.id} className={`block ${type} ${data.color ?? getDefaults({ type: type }).color}`}>
			{blockContent}

			<ModMenu id={data.id} setEditing={setEditing} />
		</article>}
		
		{editing && <form id={`edit_${data.id}`} name={`edit_${data.id}`} onSubmit={updateBlock} className={`menu blockform ${temp.color}`}>
			{editMenuContent}
	
			<button className="barbtn submitbtn" type="submit">{t("actions.update")}</button>
			<button className="barbtn resetbtn" type="reset" onClick={cancelEdit}>{t("actions.cancel")}</button>
		</form>}
	</>;
});

/** A menu for modifying its associated block. Includes:
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
		<button className="blockbtn editbtn" onClick={editBlock}>{t("actions.edit")}</button>
		<button className="blockbtn deletebtn" onClick={deleteBlock}>{t("actions.delete")}</button>
		{/* Don't render the move buttons at all if this is the only block i.e. both first and last */}
		{!(isFirst && isLast) && <> 
		<button className="blockbtn movebtn" onClick={moveBlockUp} disabled={isFirst}>{t("actions.move_up")}</button>
		<button className="blockbtn movebtn" onClick={moveBlockDown} disabled={isLast}>{t("actions.move_down")}</button>
		</>}
	</div>;
}