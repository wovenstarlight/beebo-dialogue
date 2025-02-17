import "../../styles/TextBox.css";

export default function Dialogue({ speaker, portrait, dialogue }) {
	return <>
		<header className="speaker">
			<span className="question" aria-hidden={true}>?</span>
			<span className="name">{speaker ?? "Y/N"}</span>
		</header>
		<div className="body">
			<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait ?? "misc/someone_shadow.png")} aria-hidden="true" />
			<p className="text">{dialogue ?? "Lorem ipsum dolor sit amet."}</p>
		</div>
	</>;
}