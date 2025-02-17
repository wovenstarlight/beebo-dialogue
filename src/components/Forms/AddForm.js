import { useContext, useState } from "react";
import { BlockContext } from "../../context/BlockContext";
import ALL_COLORS from "../../constants/colors";
import { CHOICE_SAMPLES, DIALOGUE_SAMPLES } from "../../constants/blockSamples";
import { DEFAULT_CHOICE_BLANK, DEFAULT_CHOICE_OPTION_BLANK, DEFAULT_DIALOGUE_BLANK } from "../../constants/blockDefaults";
import validate from "../../utils/validateData";
import DialogueInputs from "./Inputs/DialogueInputs";
import ChoiceInputs from "./Inputs/ChoiceInputs";

export default function AddForm() {
	const [, setBlocks] = useContext(BlockContext);

	const [activeTab, setActiveTab] = useState("dialogue");
	const [keepColor, setKeepColor] = useState(true);

	const [dialogueOptions, setDialogueOptions] = useState(DEFAULT_DIALOGUE_BLANK);
	const [choiceOptions, setChoiceOptions] = useState({
		color: DEFAULT_CHOICE_BLANK.color,
		options: [
			{
				id: `${(new Date()).getTime()}_0`,
				...DEFAULT_CHOICE_OPTION_BLANK,
			},
			{
				id: `${(new Date()).getTime()}_1`,
				...DEFAULT_CHOICE_OPTION_BLANK,
			},
		],
	});

	function getOptions() {
		return activeTab === "dialogue"
			? dialogueOptions
			: choiceOptions;
	}

	/** Share color between the two forms. */
	function setColor(e) {
		setDialogueOptions((options) => { return { ...options, color: e.target.value } });
		setChoiceOptions((options) => { return { ...options, color: e.target.value } });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newBlock = {
			id: `${activeTab.toLowerCase()}_${(new Date()).getTime()}`,
			...validate({
				type: activeTab,
				data: getOptions(),
			})
		}
		setBlocks(values => [...values, newBlock]);
		clearForm(e, false);
	}

	function clearForm(e, resetFull = true) {
		const ogColor = getOptions().color;
		// Clear stored values
		setDialogueOptions({
			...DEFAULT_DIALOGUE_BLANK,
			color: !resetFull && keepColor ? ogColor : DEFAULT_DIALOGUE_BLANK.color,
		});
		setChoiceOptions({
			color: !resetFull && keepColor ? ogColor : DEFAULT_CHOICE_BLANK.color,
			options: [
				{
					id: `${(new Date()).getTime()}_0`,
					...DEFAULT_CHOICE_OPTION_BLANK,
				},
				{
					id: `${(new Date()).getTime()}_1`,
					...DEFAULT_CHOICE_OPTION_BLANK,
				},
			],
		});
		// And remove the invalid markers
		e.target.closest("form").reset();
	}

	function fillSample() {
		if (activeTab === "dialogue") {
			let sample = DIALOGUE_SAMPLES[Math.floor(Math.random() * DIALOGUE_SAMPLES.length)];
			// Clear stored values
			setDialogueOptions(sample);
		}
		else if (activeTab === "choice") {
			let sample = CHOICE_SAMPLES[Math.floor(Math.random() * CHOICE_SAMPLES.length)];
			// And include `id`s for the various options!
			setChoiceOptions({
				...sample,
				options: sample.options.map((opt, index) => { return {
					...opt,
					id: `${(new Date()).getTime()}_${index}`,
				} })
			});
		}
	}

	/* BREAKDOWN
		- main form with the standard inputs
		- checkbox to keep the color palette selected.
		- buttons to create the corresponding box and to reset the form.
		- button that autofills the form with sample dialogue.
	*/
	return <form id="addform" name="addform" onSubmit={handleSubmit} className={`menu blockform ${dialogueOptions.color}`}>
		<h2>Add new element</h2>

		<fieldset id="tabber">
			<legend>Choose what you'd like to add:</legend>
			<label>
				<input
					type="radio" name="currentTab" className="visuallyhidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value="dialogue"
					checked={activeTab === "dialogue"}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">Dialogue</span>
			</label>
			<label>
				<input
					type="radio" name="currentTab" className="visuallyhidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value="choice"
					checked={activeTab === "choice"}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">Choices</span>
			</label>
		</fieldset>

		<label className="labelcolor">
			<span className="labeltext">Palette</span>
			<select
				className="inputcolor"
				name="inputcolor"
				required
				value={dialogueOptions.color}
				onChange={setColor}
				autoFocus={true}
			>
				{Object.entries(ALL_COLORS).map(color => {
					return <option className={color[1]} value={color[1]} key={color[1]}>{color[0]}</option>
				})}
			</select>
		</label>

		<fieldset id="adddialogue" className="inputsection" disabled={activeTab !== "dialogue"} hidden={activeTab !== "dialogue"}>
			<DialogueInputs
				data={dialogueOptions}
				setData={setDialogueOptions}
				includePalette={false}
			/>
		</fieldset>

		<fieldset id="addchoice" className="inputsection" disabled={activeTab !== "choice"} hidden={activeTab !== "choice"}>
			<ChoiceInputs
				data={choiceOptions}
				setData={setChoiceOptions}
				includePalette={false}
			/>
		</fieldset>

		<label id="keepcolor">
			<input type="checkbox" checked={keepColor} onChange={(e) => setKeepColor(e.target.checked)} className="visuallyhidden" />
			<span className="icon" aria-hidden={true} />
			<span className="labeltext">
				Reuse same palette for future elements
				<br/>
				<small>When off, palette will reset to purple after every submission</small>
			</span>
		</label>

		<button className="barbtn submitbtn" type="submit">Add element</button>
		<button className="barbtn resetbtn" type="button" onClick={clearForm}>Reset form</button>
		<button className="barbtn samplebtn" type="button" onClick={fillSample}>Need a reference?</button>
	</form>;
}