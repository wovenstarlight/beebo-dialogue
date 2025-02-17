import "../../../styles/Forms.css";
import PortraitSelector from "./PortraitSelector";
import allColors from "../../../assets/data/colors";

export default function DialogueInputs({ data, setData }) {
	/* BREAKDOWN
	Four inputs:
		- one for the color palette used by the box.
		- one for speaker. Has a datalist with suggestions from canon. (Pity that Ángel's accent means it doesn't automatically get suggested under "A"…)
		- one for the portrait. Needs the full list of portraits so it's been memo'd in a separate component for minimal re-rendering.
		- one for the actual text. Length limit set roughly at how much takes up the full box.
	*/

	return <>
		<label id="labelcolor">
			<span className="labeltext">Palette</span>
			<select
				id="inputcolor"
				name="inputcolor"
				required
				value={data.color}
				onChange={(e) => setData({ ...data, color: e.target.value })}
			>
				{Object.entries(allColors).map(color => {
					return <option className={color[1]} value={color[1]} key={color[1]}>{color[0]}</option>
				})}
			</select>
		</label>

		<label id="labelportrait">
			<span className="labeltext">Portrait</span>
			<PortraitSelector portrait={data.portrait} setPortrait={(e) => setData({ ...data, portrait: e.target.value })} />
			<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(data.portrait.length ? data.portrait : "misc/someone_shadow.png")} />
		</label>

		<label id="labelspeaker">
			<span className="labeltext">Speaker</span>
			<input
				id="inputspeaker"
				name="inputspeaker"
				type="text"
				minLength={1}
				maxLength={100}
				required
				list="speakerslist"
				value={data.speaker}
				onChange={(e) => setData({ ...data, speaker: e.target.value })}
			/>
		</label>
		<datalist id="speakerslist">
			<option value="Oliver Beebo" />
			<option value="Ángel" />
			<option value="Vivi" />
			<option value="Nina Coli" />
			<option value="Marigold Margulis" />
			<option value="Nadia" />
			<option value="Simon" />
			<option value="Owen" />
			<option value="Eugene Coli" />
			<option value="Police Chief" />
			<option value="Police Officer" />
		</datalist>

		<label id="labeldialogue">
			<span className="labeltext">Dialogue</span>
			<textarea
				id="inputdialogue"
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