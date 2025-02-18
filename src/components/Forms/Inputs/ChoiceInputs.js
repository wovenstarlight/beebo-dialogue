import "../../../styles/Forms.css";
import { Trans, useTranslation } from "react-i18next";
import { DEFAULT_CHOICE_OPTION_BLANK } from "../../../constants/blockDefaults";
import splitAround from "../../../utils/splitAround";
import ColorSelector from "./ColorSelector";

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

	/** Set a single option's text label. */
	function setOptionText(e) {
		let index = parseInt(e.target.getAttribute("name").slice("inputoption".length));
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

	/** Set whether a single option displays like it's being clicked. */
	function setOptionSelected(e) {
		let index = parseInt(e.target.getAttribute("name").slice("inputoption".length));
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

	function moveOptionUp(e) {
		let id = e.target.closest(".optiongroup").id;
		let [pre, curr, post] = splitAround(data.options, id);
		setData(choiceData => { return {
			...choiceData,
			options: pre.slice(0, -1).concat(curr, pre.at(-1), post),
		} });
	}
	function moveOptionDown(e) {
		let id = e.target.closest(".optiongroup").id;
		let [pre, curr, post] = splitAround(data.options, id);
		setData(choiceData => { return {
			...choiceData,
			options: pre.concat(post.at(0), curr, post.slice(1)),
		} });
	}

	/** Add a blank option field. */
	function addOption() {
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.concat({
				id: `${(new Date()).getTime()}_${choiceData.options.length}`,
				...DEFAULT_CHOICE_OPTION_BLANK,
			}),
		} });
	}

	/** Remove a given option from the list. */
	function deleteOption(e) {
		let id = e.target.closest(".optiongroup").id;
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.filter(opt => opt.id !== id),
		} });
	}

	return <>
		{includePalette && <label className="labelcolor">
			<span className="labeltext">{t("FORMS.FIELDS.PALETTE")}</span>
			<ColorSelector color={data.color} setColor={(e) => setData({ ...data, color: e.target.value })} />
		</label>}

		{data.options.map((obj, index, arr) => <OptionInput
			key={obj.id}
			index={index}
			optionData={obj}
			allOptions={arr}
			setOptionText={setOptionText}
			setOptionSelected={setOptionSelected}
			moveOptionUp={data.options.length > 1 ? moveOptionUp : null}
			moveOptionDown={data.options.length > 1 ? moveOptionDown : null}
			deleteOption={data.options.length > 1 ? deleteOption : null}
		/>)}

		{data.options.length < 4 && <button type="button" className="barbtn addbtn" onClick={addOption}>{t("ACTIONS.ADD_OPTION")}</button>}
	</>;
}

function OptionInput({
	index, optionData, allOptions,
	setOptionText, setOptionSelected,
	moveOptionUp, moveOptionDown, deleteOption,
}) {
	const { t } = useTranslation();
	
	const isFirst = allOptions.at(0).id === optionData.id;
	const isLast = allOptions.at(-1).id === optionData.id;

	return <div className="optiongroup" id={optionData.id}>
		<label className="labeloption">
			<span className="labeltext"><Trans i18nKey="FORMS.FIELDS.OPTION_NUMBER" values={{ index: index + 1 }} /></span>
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
		<div className="optionmods">
			<label className="labelselected">
				<input type="checkbox" name={`inputselect${index}`} checked={optionData.selected} onChange={setOptionSelected} className="visuallyhidden" />
				<span className="icon" aria-hidden={true} />
				<span className="labeltext"><Trans i18nKey="ACTIONS.MARK_SELECTED" values={{ index: index + 1 }} components={{ hidden: <span className="visuallyhidden" /> }} /></span>
			</label>
			
			{moveOptionUp && <button type="button" className="blockbtn movebtn" onClick={moveOptionUp} disabled={isFirst}>{t("ACTIONS.MOVE_UP")}</button>}
			{moveOptionDown && <button type="button" className="blockbtn movebtn" onClick={moveOptionDown} disabled={isLast}>{t("ACTIONS.MOVE_DOWN")}</button>}
			{deleteOption && <button type="button" className="blockbtn deletebtn" onClick={deleteOption}>{t("ACTIONS.DELETE")}</button>}
		</div>
	</div>;
}