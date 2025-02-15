import "../styles/TextBox.css";

function TextBox({ id, color, speaker, portrait, dialogue, allDialogues, setDialogues, isFirst, isLast }) {
	/** Deletes the current dialogue box. */
	function deleteBox() {
		setDialogues(dialogues => dialogues.filter(el => el.id !== id));
	}

	/** Finds the neighboring dialogue boxes. Helper for `moveUp`/`moveDown`. */
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

	return <article id={id} className={`dialogue ${color ?? "house"}`}>
		<header className="speaker">
			<span className="question">?</span>
			<span className="name">{speaker ?? "Y/N"}</span>
		</header>
		<div className="body">
			<img className="portrait" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait ?? "default.png")} />
			<p className="text">{dialogue ?? "Lorem ipsum dolor sit amet."}</p>
		</div>

		<div className="buttons">
			<button className="move" onClick={moveUp} disabled={isFirst}>Move up</button>
			<button className="delete" onClick={deleteBox}>Delete</button>
			<button className="move" onClick={moveDown} disabled={isLast}>Move down</button>
		</div>
	</article>
}

export default TextBox;