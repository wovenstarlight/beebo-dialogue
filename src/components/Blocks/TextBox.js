import "../../styles/TextBox.css";
import ModMenu from "./ModMenu";

export default function TextBox({ id, color, speaker, portrait, dialogue, setEditing }) {
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