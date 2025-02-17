import "../../../styles/Forms.css";
import allColors from "../../../constants/colors";
import { DEFAULT_CHOICE_OPTION_BLANK } from "../../../constants/blockDefaults";
import splitAround from "../../../utils/splitAround";

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

		{data.options.map((obj, index, arr) => <OptionInput
			key={obj.id}
			index={index}
			optionData={obj}
			setOptionText={setOptionText}
			setOptionSelected={setOptionSelected}
			moveOptionUp={data.options.length > 1 && index !== 0 ? moveOptionUp : null}
			moveOptionDown={data.options.length > 1 && index !== arr.length - 1 ? moveOptionDown : null}
			deleteOption={data.options.length > 1 ? deleteOption : null}
		/>)}

		{data.options.length < 4 && <button type="button" className="barbtn addbtn" onClick={addOption}>Add an option</button>}
	</>;
}

function OptionInput({
	index, optionData,
	setOptionText, setOptionSelected,
	moveOptionUp, moveOptionDown, deleteOption,
}) {
	return <div className="optiongroup" id={optionData.id}>
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
		<div className="optionmods">
			<label className="labelselected">
				<input type="checkbox" name={`inputselect${index}`} checked={optionData.selected} onChange={setOptionSelected} className="visuallyhidden" />
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">Mark<span className="visuallyhidden"> option {index + 1}</span> as selected</span>
			</label>
			
			{moveOptionUp && <button type="button" className="blockbtn movebtn" onClick={moveOptionUp}>Move up</button>}
			{moveOptionDown && <button type="button" className="blockbtn movebtn" onClick={moveOptionDown}>Move down</button>}
			{deleteOption && <button type="button" className="blockbtn deletebtn" onClick={deleteOption}>Delete</button>}
		</div>
	</div>;
}