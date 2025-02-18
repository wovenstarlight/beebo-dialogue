import { memo } from "react";
import ALL_PORTRAITS from "../../../constants/portraits";
import MESSAGES from "../../../constants/lang/en";

function PortraitSelector({ portrait, setPortrait }) {
	return (
		<select
			className="inputportrait"
			name="inputportrait"
			required
			value={portrait}
			onChange={setPortrait}
		>
			<option value="">{MESSAGES.FORMS.ADDER.UNSET_PORTRAIT}</option>
			{ALL_PORTRAITS.map(pair => {
				return <optgroup label={pair.label} key={pair.label}>
					{Object.entries(pair.options).map(sprite => {
						return <option value={sprite[0]} key={sprite[0]}>{sprite[1]}</option>
					})}
				</optgroup>;
			})}
		</select>
	);
}

export default memo(PortraitSelector);