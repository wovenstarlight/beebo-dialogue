import { useTranslation } from "react-i18next";
import ALL_CHARACTERS from "../../../constants/characters";
import "../../../constants/documentation";
import PortraitSelector from "./PortraitSelector";
import ColorSelector from "./ColorSelector";
import getPortraitURL from "../../../utils/getPortraitURL";

/** Form fields for creating/editing a Dialogue block.
 * @param {object} args
 * @param {DataDialogue} args.data Data representing the values of this form's inputs.
 * @param {function} args.setData The setter for this form's inputs.
 * @param {boolean} [includePalette=true] `true` if the palette selector should be rendered; `false` if it should be omitted.
 * @returns A set of form fields corresponding to a Dialogue block.
 */
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
			<span className="labeltext">{t("forms.fields.palette")}</span>
			<ColorSelector color={data.color} setColor={(e) => setData({ ...data, color: e.target.value })} />
		</label>}

		<label className="labelportrait">
			<span className="labeltext">{t("forms.fields.portrait")}</span>
			<PortraitSelector portrait={data.portrait} setPortrait={(e) => setData({ ...data, portrait: e.target.value })} />
			<img className="portrait" alt="" src={getPortraitURL(data.portrait)} />
		</label>

		<label className="labelspeaker">
			<span className="labeltext">{t("forms.fields.speaker")}</span>
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
					let retval = [t(`content.characters.${chara}.long`)],
						speakerLabel = t(`content.characters.${chara}.speaker_label`),
						unknownLabel = t(`content.characters.${chara}.unknown_label`);
					// Actual name
					if (!speakerLabel.startsWith("content.characters")) retval.push(speakerLabel);
					// Descriptor if any
					if (!unknownLabel.startsWith("content.characters")) retval.push(unknownLabel);
					return retval;
				})	// Get all labels
				.filter((el, index, arr) => arr.indexOf(el) === index)	// Filter out duplicates
				.map(opt => <option key={opt} value={opt} />)
			}
		</datalist>

		<label className="labeldialogue">
			<span className="labeltext">{t("forms.fields.dialogue")}</span>
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