import "../styles/TextBox.css";

function TextBox({
	data: { id, color, speaker, portrait, dialogue },
	getNeighbors, setBlocks, editHandler, isFirst, isLast
}) {
	/** Deletes the current dialogue box. */
	function deleteBox() {
		setBlocks(dialogues => dialogues.filter(el => el.id !== id));
	}

	// #region Move this box
	/** Swaps the current dialogue box with its predecessor. */
	function moveUp() {
		let [pre, curr, post] = getNeighbors();
		setBlocks(pre.slice(0, -1).concat([curr, pre.at(-1)], post));
	}
	/** Swaps the current dialogue box with its successor. */
	function moveDown() {
		let [pre, curr, post] = getNeighbors();
		setBlocks(pre.concat([post.at(0), curr], post.slice(1)));
	}
	//#endregion

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

			<div className="buttons">
				<button className="edit" onClick={editHandler}>Edit</button>
				<button className="delete" onClick={deleteBox}>Delete</button>
				{/* Don't render the move buttons at all if this is the only box i.e. both first and last */}
				{!(isFirst && isLast) && <> 
				<button className="move" onClick={moveUp} disabled={isFirst}>Move up</button>
				<button className="move" onClick={moveDown} disabled={isLast}>Move down</button>
				</>}
			</div>
		</article>
	);
}

export default TextBox;