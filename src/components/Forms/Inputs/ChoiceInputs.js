import "../../../styles/Forms.css";
import allColors from "../../../constants/colors";
import { DEFAULT_CHOICE_OPTION_BLANK } from "../../../constants/blockDefaults";

export default function ChoiceInputs({ data, setData, includePalette = true }) {
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

	/** Add a blank option field. */
	function addOption() {
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.concat({
				tempID: `${(new Date()).getTime()}_${choiceData.options.length}`,
				...DEFAULT_CHOICE_OPTION_BLANK,
			}),
		} });
	}

	/** Remove a given option from the list. */
	function deleteOption(e) {
		let id = e.target.closest(".optiongroup").id;
		setData(choiceData => { return {
			...choiceData,
			options: choiceData.options.filter(opt => opt.tempID !== id),
		} });
	}

	return <>
		{includePalette && <label className="labelcolor">
			<span className="labeltext">Palette</span>
			<select
				className="inputcolor"
				name="inputcolor"
				required
				value={data.color}
				onChange={(e) => setData({ ...data, color: e.target.value })}
				autoFocus={true}
			>
				{Object.entries(allColors).map(color => {
					return <option className={color[1]} value={color[1]} key={color[1]}>{color[0]}</option>
				})}
			</select>
		</label>}

		{data.options.map((obj, index) => <OptionInput
			key={obj.tempID}
			index={index}
			optionData={obj}
			setOptionText={setOptionText}
		/>)}

		{data.options.length < 4 && <button type="button" className="addbtn" onClick={addOption}>Add an option</button>}
	</>;
}

function OptionInput({ index, optionData, setOptionText }) {
	return <div className="optiongroup" id={optionData.tempID}>
	<label className="labeloption">
		<span className="labeltext">Option {index + 1}</span>
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
	{/* TODO: mark as selected toggle + delete button + move buttons */}
	</div>;
}