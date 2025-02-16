import "../styles/DialogueForm.css";
import PortraitSelector from "./PortraitSelector";
import allColors from "../assets/data/colors";

function DialogForm({
	id, title, handleSubmit, hidden,
	keepColor, setKeepColor,
	color, setColor,
	speaker, setSpeaker,
	dialogue, setDialogue,
	portrait, setPortrait,
	children
}) {
	return (
	<form id={id} name={id} onSubmit={handleSubmit} className={`menu dialogueform ${color}`} hidden={hidden}>
		<h2>{title}</h2>

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
					return <option className={color[1]} value={color[1]} key={color[1]}>{color[0]}</option>
				})}
			</select>
		</label>

		<label id="labelportrait">
			<span className="labeltext">Portrait</span>
			<PortraitSelector portrait={portrait} setPortrait={setPortrait} />
			<img className="portrait" alt="" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait.length ? portrait : "misc/someone_shadow.png")} />
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
				value={dialogue}
				onChange={(e) => setDialogue(e.target.value)}
			/>
		</label>

		{keepColor != null && <label id="keepcolor">
			<input type="checkbox" checked={keepColor} onChange={(e) => setKeepColor(e.target.checked)} />
			<span className="icon" />
			<span className="labeltext">
				Reuse same palette for future dialogue
				<br/>
				<small>When off, palette will be reset after every submission</small>
			</span>
		</label>}

		{children}
	</form>);
}

export default DialogForm;