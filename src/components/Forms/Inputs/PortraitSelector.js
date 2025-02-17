import { memo } from "react";
import ALL_PORTRAITS from "../../../constants/portraits";

function PortraitSelector({ portrait, setPortrait }) {
	return (
		<select
			className="inputportrait"
			name="inputportrait"
			required
			value={portrait}
			onChange={setPortrait}
		>
			<option value="">-- No portrait chosen --</option>
			{Object.entries(ALL_PORTRAITS).map(pair => {
				return <optgroup label={pair[0]} key={pair[0]}>
					{Object.entries(pair[1]).map(sprite => {
						return <option value={sprite[1]} key={sprite[1]}>{sprite[0]}</option>
					})}
				</optgroup>;
			})}
		</select>
	);
}

export default memo(PortraitSelector);