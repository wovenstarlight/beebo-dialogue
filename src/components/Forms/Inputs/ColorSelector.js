import { memo } from "react";
import { useTranslation } from "react-i18next";
import ALL_COLORS from "../../../constants/colors";

function ColorSelector({ color, setColor }) {
	const { t } = useTranslation();

	return <select
		className="inputcolor"
		name="inputcolor"
		required
		value={color}
		onChange={setColor}
		autoFocus={true}
	>
		{Object.entries(ALL_COLORS).map(color => {
			return <option className={color[0]} value={color[0]} key={color[0]}>{t(`DEFAULTS.COLORS.${color[1]}`)}</option>
		})}
	</select>;
}

export default memo(ColorSelector);