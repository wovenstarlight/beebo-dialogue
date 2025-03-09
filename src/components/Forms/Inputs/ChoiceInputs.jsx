import { Trans, useTranslation } from "react-i18next";
import { DEFAULT_CHOICE_OPTION_BLANK } from "../../../constants/blockDefaults";
import "../../../constants/documentation";
import ColorSelector from "./ColorSelector";
import { splitAround } from "../../../utils/arrayUtils";

/** Form fields for creating/editing a Choice block.
 * @param {object} args
 * @param {DataChoice} args.data Data representing the values of this form's inputs.
 * @param {function} args.setData The setter for this form's inputs.
 * @param {boolean} [args.includePalette=true] `true` if the palette selector should be rendered; `false` if it should be omitted.
 * @returns A set of form fields corresponding to a Choice block.
 */
export default function ChoiceInputs({ data, setData, includePalette = true }) {
	const { t } = useTranslation();

	/* BREAKDOWN
	3 sets of inputs:
		- one for the color palette
		- one section for the individual labels
			- the actual text
			- whether to mark as selected or not
			- move/delete buttons
	*/

	/** Adds a blank option field. */
	function addOption() {
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.concat({
				id: `${(new Date()).getTime()}_${choiceData.options.length}`,
				...DEFAULT_CHOICE_OPTION_BLANK,
			}),
		} });
	}

	return <>
		{includePalette && <label className="labelcolor">
			<span className="labeltext">{t("forms.fields.palette")}</span>
			<ColorSelector color={data.color} setColor={(e) => setData({ ...data, color: e.target.value })} />
		</label>}

		{data.options.map((obj, index, arr) => <OptionInput
			key={obj.id}
			index={index}
			optionData={obj}
			allOptions={arr}
			setData={setData}
		/>)}

		{data.options.length < 4 && <button type="button" className="barbtn addbtn" onClick={addOption}>{t("actions.add_option")}</button>}
	</>;
}

/** Input fields for a single option in a Choice block. Includes:
 * - Text input for the actual label
 * - Checkbox for whether to mark this option as selected
 * - Reordering buttons (only if more than 1 option is present)
 * - Deletion button (only if more than 1 option is present)
 * @param {object} args
 * @param {int} args.index The 0-based index of this option in the list of options.
 * @param {DataChoiceOption} args.optionData Data representing this option.
 * @param {DataChoiceOption[]} args.allOptions The list of all options, in which the current option is included.
 * @param {function} args.setData The setter for the overall menu's data.
 * @returns An input group for a Choice menu's option.
 */
function OptionInput({ index, optionData, allOptions, setData }) {
	const { t } = useTranslation();

	/** Sets the current option's text label. */
	function setOptionText(e) {
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.slice(0, index).concat(
				{
					...choiceData.options[index],
					text: e.target.value,
				},
				choiceData.options.slice(index + 1),
			),
		} });
	}

	/** Sets whether the current option is marked as selected (i.e. gets highlighted like it's being clicked). */
	function setOptionSelected(e) {
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.slice(0, index).concat(
				{
					...choiceData.options[index],
					selected: e.target.checked,
				},
				choiceData.options.slice(index + 1),
			),
		} });
	}

	/** Swaps the current option with its predecessor. */
	function moveOptionUp() {
		let [pre, curr, post] = splitAround(allOptions, optionData.id);
		setData(choiceData => { return {
			...choiceData,
			options: pre.slice(0, -1).concat(curr, pre.at(-1), post),
		} });
	}
	/** Swaps the current option with its successor. */
	function moveOptionDown() {
		let [pre, curr, post] = splitAround(allOptions, optionData.id);
		setData(choiceData => { return {
			...choiceData,
			options: pre.concat(post.at(0), curr, post.slice(1)),
		} });
	}

	/** Removes the current option from the list. */
	function deleteOption() {
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.filter(opt => opt.id !== optionData.id),
		} });
	}

	return <div className="optiongroup" id={optionData.id}>
		<label className="labeloption">
			<span className="labeltext">{t("forms.fields.option_number", { index: index + 1 })}</span>
			<input
				className="inputoption"
				name={`inputoption${index}`}
				type="text"
				minLength={1}
				maxLength={160}
				required
				value={optionData.text}
				onChange={setOptionText}
			/>
		</label>
		<div className="blockitemmods">
			<label className="labelselected">
				<input type="checkbox" name={`inputselect${index}`} checked={optionData.selected} onChange={setOptionSelected} className="visuallyhidden" />
				<span className="icon" aria-hidden={true} />
				<span className="labeltext"><Trans
					i18nKey="actions.mark_selected"
					values={{ index: index + 1 }}
					components={{ hidden: <span className="visuallyhidden" /> }}
				/></span>
			</label>
			
			{allOptions.length > 1 && <>
				<button type="button" className="blockbtn movebtn" onClick={moveOptionUp} disabled={allOptions.at(0).id === optionData.id}>{t("actions.move_up")}</button>
				<button type="button" className="blockbtn movebtn" onClick={moveOptionDown} disabled={allOptions.at(-1).id === optionData.id}>{t("actions.move_down")}</button>
				<button type="button" className="blockbtn deletebtn" onClick={deleteOption}>{t("actions.delete")}</button>
			</>}
		</div>
	</div>;
}