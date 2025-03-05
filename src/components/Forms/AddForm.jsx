import { memo, useContext, useState } from "react";
import BlockContext from "../../context/BlockContext";
import { useTranslation } from "react-i18next";
import { DEFAULT_CHOICE_BLANK, DEFAULT_CHOICE_OPTION_BLANK, DEFAULT_DIALOGUE_BLANK, DEFAULT_IMAGE_BLANK } from "../../constants/blockDefaults";
import { CHOICE, DIALOGUE, IMAGE } from "../../constants/blockNames";
import { CHOICE_SAMPLES, DIALOGUE_SAMPLES } from "../../constants/blockSamples";
import "../../constants/documentation";
import ChoiceInputs from "./Inputs/ChoiceInputs";
import ColorSelector from "./Inputs/ColorSelector";
import DialogueInputs from "./Inputs/DialogueInputs";
import { MultipleImageInputs } from "./Inputs/ImageInputs";
import validate from "../../utils/validateData";
import "../../styles/AddEditForms.css";

/**
 * A form with tabbed sections for adding Dialogue and Choice blocks.
 * @returns A <form> element for creating a content block.
 */
export default memo(function AddForm() {
	const [, setBlocks] = useContext(BlockContext);
	const { t } = useTranslation();

	/** The currently-selected tab. Determines what data gets submitted. */
	const [activeTab, setActiveTab] = useState(DIALOGUE);
	/** `true` the selected color palette should persist across submissions; `false` if it should be reset with each submission. */
	const [keepColor, setKeepColor] = useState(true);

	/** Options tracking the dialogue-related form fields. @type {DataDialogue} */
	const [dialogueOptions, setDialogueOptions] = useState(DEFAULT_DIALOGUE_BLANK);
	/** Options tracking the choice-related form fields. @type {DataChoice} */
	const [choiceOptions, setChoiceOptions] = useState({
		...DEFAULT_CHOICE_BLANK,
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
	/** Options tracking the image-related form fields. @type {DataImage} */
	const [imageOptions, setImageOptions] = useState({
		...DEFAULT_IMAGE_BLANK,
		images: [],
	});

	/** Gets the form fields corresponding to the currently-selected tab. */
	function getOptions() {
		return activeTab === IMAGE ? imageOptions
			: activeTab === CHOICE ? choiceOptions
			: dialogueOptions;
	}

	/** Updates color for both the dialogue and choice form tabs. */
	function setColor(e) {
		setDialogueOptions((options) => { return { ...options, color: e.target.value } });
		setChoiceOptions((options) => { return { ...options, color: e.target.value } });
		setImageOptions((options) => { return { ...options, color: e.target.value } });
	}

	/** Creates a block from the data in the currently-selected form tab. */
	function createBlock(e) {
		e.preventDefault();
		if (activeTab !== IMAGE) {
			// Single block; directly create and add new block
			const newBlock = {
				id: `${activeTab.toLowerCase()}_${(new Date()).getTime()}`,
				...validate({
					type: activeTab,
					data: getOptions(),
					translator: t,
				})
			}
			setBlocks(values => [...values, newBlock]);
		}
		else /* activeTab === IMAGE */ {
			// Multiple blocks; create for each one
			let idBase = `${activeTab.toLowerCase()}_${(new Date()).getTime()}`;
			setBlocks(values => [
				...values,
				...imageOptions.images.map((imageData, index) => {return {
					id: `${idBase}_${index}`,
					...validate({
						type: activeTab,
						data: {
							color: imageOptions.color,
							...imageData,
						},
						translator: t,
					}),
				}}),
			])
		}
		clearForm(e, false);
	}

	/** Clears the form fields. To be used upon form submission or reset.
	 * @param {boolean} [resetFull=true] `true` if all form fields including the color palette selector should be reset, regardless of whether persistence is enabled; `false` otherwise.
	 */
	function clearForm(e, resetFull = true) {
		const ogColor = getOptions().color;
		// Clear stored values
		setDialogueOptions({
			...DEFAULT_DIALOGUE_BLANK,
			color: !resetFull && keepColor ? ogColor : DEFAULT_DIALOGUE_BLANK.color,
		});
		setChoiceOptions({
			...DEFAULT_CHOICE_BLANK,
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
		setImageOptions({
			...DEFAULT_IMAGE_BLANK,
			color: !resetFull && keepColor ? ogColor : DEFAULT_DIALOGUE_BLANK.color,
			images: [],
		});
		// And remove the invalid markers
		e.target.closest("form").reset();
	}

	/** Autofills sample data in the currently-selected form tab.
	 * Samples are drawn from various parts of the game.
	 */
	function fillSample() {
		if (activeTab === DIALOGUE) {
			let sample = DIALOGUE_SAMPLES[Math.floor(Math.random() * DIALOGUE_SAMPLES.length)];
			// Clear stored values
			setDialogueOptions({
				...sample,
				speaker: t(sample.speaker),
				dialogue: t(sample.dialogue),
			});
		}
		else if (activeTab === CHOICE) {
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
		- button that autofills the form with sample content.
	*/

	return <form id="addform" name="addform" onSubmit={createBlock} className={`menu blockform ${dialogueOptions.color}`}>
		<h2>{t("forms.adder.title")}</h2>

		<fieldset id="tabber">
			<legend>{t("forms.adder.tabber_title")}</legend>
			<label className="blockbtn">
				<input
					type="radio" name="currentTab" className="visuallyhidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value={DIALOGUE}
					checked={activeTab === DIALOGUE}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">{t("forms.adder.dialogue")}</span>
			</label>
			<label className="blockbtn">
				<input
					type="radio" name="currentTab" className="visuallyhidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value={CHOICE}
					checked={activeTab === CHOICE}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">{t("forms.adder.choices")}</span>
			</label>
			<label className="blockbtn">
				<input
					type="radio" name="currentTab" className="visuallyhidden"
					onChange={(e) => setActiveTab(e.target.value)}
					value={IMAGE}
					checked={activeTab === IMAGE}
				/>
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">{t("forms.adder.image")}</span>
			</label>
		</fieldset>

		<label className="labelcolor">
			<span className="labeltext">{t("forms.fields.palette")}</span>
			<ColorSelector color={dialogueOptions.color} setColor={setColor} />
			{activeTab === IMAGE && <span className="explainer">{t("forms.fields.explain_image_palette")}</span>}
		</label>

		<fieldset id="adddialogue" className="inputsection" disabled={activeTab !== DIALOGUE} hidden={activeTab !== DIALOGUE}>
			<DialogueInputs
				data={dialogueOptions}
				setData={setDialogueOptions}
				includePalette={false}
			/>
		</fieldset>

		<fieldset id="addchoice" className="inputsection" disabled={activeTab !== CHOICE} hidden={activeTab !== CHOICE}>
			<ChoiceInputs
				data={choiceOptions}
				setData={setChoiceOptions}
				includePalette={false}
			/>
		</fieldset>

		<fieldset id="addimages" className="inputsection" disabled={activeTab !== IMAGE} hidden={activeTab !== IMAGE}>
			<MultipleImageInputs
				data={imageOptions}
				setData={setImageOptions}
				includePalette={false}
			/>
		</fieldset>

		<label id="keepcolor">
			<input type="checkbox" checked={keepColor} onChange={(e) => setKeepColor(e.target.checked)} className="visuallyhidden" />
			<span className="icon" aria-hidden={true} />
			<span className="labeltext">
				{t("actions.reuse_palette")}
				<br/>
				<small>{t("forms.fields.explain_reuse_palette")}</small>
			</span>
		</label>

		<button className="barbtn submitbtn" type="submit">{t("actions.add")}</button>
		<button className="barbtn resetbtn" type="button" onClick={clearForm}>{t("actions.reset")}</button>
		{[CHOICE, DIALOGUE].includes(activeTab) && <button className="barbtn samplebtn" type="button" onClick={fillSample}>{t("actions.autofill")}</button>}
	</form>;
})