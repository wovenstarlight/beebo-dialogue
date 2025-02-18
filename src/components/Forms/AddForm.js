import { useContext, useState } from "react";
import { BlockContext } from "../../context/BlockContext";
import { useTranslation } from "react-i18next";
import { CHOICE_SAMPLES, DIALOGUE_SAMPLES } from "../../constants/blockSamples";
import { DEFAULT_CHOICE_BLANK, DEFAULT_CHOICE_OPTION_BLANK, DEFAULT_DIALOGUE_BLANK } from "../../constants/blockDefaults";
import validate from "../../utils/validateData";
import ColorSelector from "./Inputs/ColorSelector";
import DialogueInputs from "./Inputs/DialogueInputs";
import ChoiceInputs from "./Inputs/ChoiceInputs";

export default function AddForm() {
	const [, setBlocks] = useContext(BlockContext);
	const { t } = useTranslation();

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
				translator: t,
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
			setDialogueOptions({
				...sample,
				speaker: t(sample.speaker),
				dialogue: t(sample.dialogue),
			});
		}
		else if (activeTab === "choice") {
			let sample = CHOICE_SAMPLES[Math.floor(Math.random() * CHOICE_SAMPLES.length)];
			// And include `id`s for the various options!
			setChoiceOptions({
				...sample,
				options: sample.options.map((opt, index) => { return {
					...opt,
					id: `${(new Date()).getTime()}_${index}`,
					text: t(opt.text),
				} })
			});
			setDialogueOptions((options) => { return {...options, color: sample.color} });
		}
	}

	/* BREAKDOWN
		- main form with the standard inputs
		- checkbox to keep the color palette selected.
		- buttons to create the corresponding box and to reset the form.
		- button that autofills the form with sample dialogue.
	*/
	return <form id="addform" name="addform" onSubmit={handleSubmit} className={`menu blockform ${dialogueOptions.color}`}>
		<h2>{t("FORMS.ADDER.TITLE")}</h2>

		<fieldset id="tabber">
			<legend>{t("FORMS.ADDER.TABBER_TITLE")}</legend>
			<label>
				<input
					type="radio" name="currentTab" className="visuallyhidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value="dialogue"
					checked={activeTab === "dialogue"}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">{t("FORMS.ADDER.DIALOGUE")}</span>
			</label>
			<label>
				<input
					type="radio" name="currentTab" className="visuallyhidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value="choice"
					checked={activeTab === "choice"}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">{t("FORMS.ADDER.CHOICES")}</span>
			</label>
		</fieldset>

		<label className="labelcolor">
			<span className="labeltext">{t("FORMS.FIELDS.PALETTE")}</span>
			<ColorSelector color={dialogueOptions.color} setColor={setColor} />
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
				{t("ACTIONS.PALETTE_REUSE")}
				<br/>
				<small>{t("FORMS.FIELDS.PALETTE_REUSE")}</small>
			</span>
		</label>

		<button className="barbtn submitbtn" type="submit">{t("ACTIONS.ADD")}</button>
		<button className="barbtn resetbtn" type="button" onClick={clearForm}>{t("ACTIONS.RESET")}</button>
		<button className="barbtn samplebtn" type="button" onClick={fillSample}>{t("ACTIONS.AUTOFILL")}</button>
	</form>;
}