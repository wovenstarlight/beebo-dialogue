import { useContext } from "react";
import { BlockContext } from "../../context/BlockContext";
import splitAround from "../../utils/splitAround";
import "../../styles/ModMenu.css";

export default function ModMenu({ id, setEditing }) {
	let [allBlocks, setBlocks] = useContext(BlockContext);
	const isFirst = allBlocks.at(0)?.id === id,
		isLast = allBlocks.at(-1)?.id === id;

	// #region Handlers
	/** Toggles the edit menu for the current block. */
	function editBlock() {
		setEditing(true);
	}

	/** Deletes the current block. */
	function deleteBlock(e) {
		setBlocks(dialogues => dialogues.filter(el => el.id !== id));
	}

	/** Swaps the current block with its predecessor. */
	function moveBlockUp() {
		let [pre, curr, post] = splitAround(allBlocks, id);
		setBlocks(pre.slice(0, -1).concat([curr, pre.at(-1)], post));
	}
	/** Swaps the current block with its successor. */
	function moveBlockDown() {
		let [pre, curr, post] = splitAround(allBlocks, id);
		setBlocks(pre.concat([post.at(0), curr], post.slice(1)));
	}
	//#endregion

	return <div className="modmenu buttons">
		<button className="edit" onClick={editBlock}>Edit</button>
		<button className="delete" onClick={deleteBlock}>Delete</button>
		{/* Don't render the move buttons at all if this is the only block i.e. both first and last */}
		{!(isFirst && isLast) && <> 
		<button className="move" onClick={moveBlockUp} disabled={isFirst}>Move up</button>
		<button className="move" onClick={moveBlockDown} disabled={isLast}>Move down</button>
		</>}
	</div>;
}