import { memo } from "react";
import ALL_COLORS from "../../../constants/colors";

function ColorSelector({ color, setColor }) {
	return <select
		className="inputcolor"
		name="inputcolor"
		required
		value={color}
		onChange={setColor}
		autoFocus={true}
	>
		{Object.entries(ALL_COLORS).map(color => {
			return <option className={color[1]} value={color[1]} key={color[1]}>{color[0]}</option>
		})}
	</select>;
}

export default memo(ColorSelector);