import "../styles/TextBox.css";

function TextBox({ id, color, speaker, portrait, dialogue, setDialogues }) {
	function deleteBox(e) {
		setDialogues(dialogues => dialogues.filter(el => el.id !== e.target.parentElement.id));
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
		<button className="delete" onClick={deleteBox}>Delete</button>
	</article>
}

export default TextBox;