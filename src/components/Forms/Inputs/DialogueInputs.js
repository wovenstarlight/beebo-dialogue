import "../../../styles/Forms.css";
import { useTranslation } from "react-i18next";
import PortraitSelector from "./PortraitSelector";
import ColorSelector from "./ColorSelector";
import ALL_CHARACTERS from "../../../constants/characters";

export default function DialogueInputs({ data, setData, includePalette = true }) {
	const { t } = useTranslation();
	/* BREAKDOWN
	Four inputs:
		- one for the color palette used by the box.
		- one for speaker. Has a datalist with suggestions from canon. (Pity that Ángel's accent means it doesn't automatically get suggested under "A"…)
		- one for the portrait. Needs the full list of portraits so it's been memo'd in a separate component for minimal re-rendering.
		- one for the actual text. Length limit set roughly at how much takes up the full box.
	*/

	return <>
		{includePalette && <label className="labelcolor">
			<span className="labeltext">{t("FORMS.FIELDS.PALETTE")}</span>
			<ColorSelector color={data.color} setColor={(e) => setData({ ...data, color: e.target.value })} />
		</label>}

		<label className="labelportrait">
			<span className="labeltext">{t("FORMS.FIELDS.PORTRAIT")}</span>
			<PortraitSelector portrait={data.portrait} setPortrait={(e) => setData({ ...data, portrait: e.target.value })} />
			<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(data.portrait.length ? data.portrait : "misc/someone_shadow.png")} />
		</label>

		<label className="labelspeaker">
			<span className="labeltext">{t("FORMS.FIELDS.SPEAKER")}</span>
			<input
				className="inputspeaker"
				name="inputspeaker"
				type="text"
				minLength={1}
				maxLength={100}
				required
				list={`speakerslist${ data.id ? `_${data.id}` : "" }`}
				value={data.speaker}
				onChange={(e) => setData({ ...data, speaker: e.target.value })}
			/>
		</label>
		<datalist id={`speakerslist${ data.id ? `_${data.id}` : "" }`}>
			{ALL_CHARACTERS
				.flatMap(chara => {
					let retval = [t(`DEFAULTS.CHARACTERS.${chara}.LONG`)],
						speakerLabel = t(`DEFAULTS.CHARACTERS.${chara}.SPEAKER_LABEL`),
						unknownLabel = t(`DEFAULTS.CHARACTERS.${chara}.UNKNOWN_LABEL`);
					// Actual name
					if (!speakerLabel.startsWith("DEFAULTS.CHARACTERS")) retval.push(speakerLabel);
					// Descriptor if any
					if (!unknownLabel.startsWith("DEFAULTS.CHARACTERS")) retval.push(unknownLabel);
					return retval;
				})	// Get all labels
				.filter((el, index, arr) => arr.indexOf(el) === index)	// Filter out duplicates
				.map(opt => <option key={opt} value={opt} />)
			}
		</datalist>

		<label className="labeldialogue">
			<span className="labeltext">{t("FORMS.FIELDS.DIALOGUE")}</span>
			<textarea
				className="inputdialogue"
				name="inputdialogue"
				minLength={1}
				maxLength={250}
				required
				value={data.dialogue}
				onChange={(e) => setData({ ...data, dialogue: e.target.value })}
			/>
		</label>
	</>;
}