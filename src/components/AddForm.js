import { useState } from "react";
import "../styles/AddForm.css";
import PortraitSelector from "./PortraitSelector";
import allColors from "../assets/data/colors";

	const [color, setColor] = useState("purple");
	const [speaker, setSpeaker] = useState("");
	const [dialogue, setDialogue] = useState("");
	const [portrait, setPortrait] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		alert(`Trying to create dialogue box with "${speaker}" saying "${dialogue}"`);
		// Clear stored values
		setColor("purple");
		setSpeaker("");
		setDialogue("");
		setPortrait("");
		// And remove the invalid markers
		e.target.closest("form").reset();
	}

	return (
		<form id="addform" name="addform" onSubmit={handleSubmit} className={color}>
			<label id="labelcolor">
				<span className="labeltext">Palette</span>
				<select
					id="inputcolor"
					name="inputcolor"
					required
					value={color}
					onChange={(e) => setColor(e.target.value)}
				>
					{Object.entries(allColors).map(color => {
						return <option className={color[1]} value={color[1]}>{color[0]}</option>
					})}
				</select>
			</label>

			<label id="labelportrait">
				<span className="labeltext">Portrait</span>
				<PortraitSelector portrait={portrait} setPortrait={setPortrait} />
				<img className="portrait" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait.length ? portrait : "default.png")} />
			</label>

			<label id="labelspeaker">
				<span className="labeltext">Speaker</span>
				<input
					id="inputspeaker"
					name="inputspeaker"
					type="text"
					minLength={1}
					maxLength={50}
					required
					list="speakerslist"
					value={speaker}
					onChange={(e) => setSpeaker(e.target.value)}
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
			</datalist>

			<label id="labeldialogue">
				<span className="labeltext">Dialogue</span>
				<textarea
					id="inputdialogue"
					name="inputdialogue"
					minLength={1}
					maxLength={110}
					required
					value={dialogue}
					onChange={(e) => setDialogue(e.target.value)}
				/>
			</label>

			<button id="addbtn" type="submit">Add</button>
			<button id="clearbtn" type="reset">Clear</button>
		</form>
	)
}

export default AddForm;