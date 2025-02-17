import { DEFAULT_DIALOGUE } from "../../constants/blockDefaults";
import "../../styles/TextBox.css";

export default function Dialogue({ speaker, portrait, dialogue }) {
	return <>
		<header className="speaker">
			<span className="question" aria-hidden={true}>?</span>
			<span className="name">{speaker ?? DEFAULT_DIALOGUE.speaker}</span>
		</header>
		<div className="body">
			<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait ?? DEFAULT_DIALOGUE.portrait)} aria-hidden="true" />
			<p className="text">{dialogue ?? DEFAULT_DIALOGUE.dialogue}</p>
		</div>
	</>;
}