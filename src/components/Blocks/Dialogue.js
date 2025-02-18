import { useTranslation } from "react-i18next";
import { DEFAULT_DIALOGUE } from "../../constants/blockDefaults";
import "../../constants/documentation";
import "../../styles/TextBox.css";

/**
 * The contents of a dialogue box.
 * @param {DataDialogue} args Data representing this dialogue box.
 * @returns Rendered dialogue with its speaker.
 */
export default function Dialogue({ speaker, portrait, dialogue }) {
	const { t } = useTranslation();

	return <>
		<header className="speaker">
			<span className="question" aria-hidden={true}>?</span>
			<span className="name">{speaker ?? t(DEFAULT_DIALOGUE.speaker)}</span>
		</header>
		<div className="body">
			<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait ?? DEFAULT_DIALOGUE.portrait)} aria-hidden="true" />
			<p className="text">{dialogue ?? t(DEFAULT_DIALOGUE.dialogue)}</p>
		</div>
	</>;
}