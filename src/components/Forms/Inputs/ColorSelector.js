import { memo } from "react";
import { useTranslation } from "react-i18next";
import ALL_COLORS from "../../../constants/colors";
import "../../../constants/documentation";

/**
 * A dropdown menu for selecting a color palette.
 * @param {object} args
 * @param {Palette} args.color The value of this form field; one of the available color palettes.
 * @param {function} args.setColor The setter for the value of this form field.
 * @returns A <select> element with options for palettes.
 */
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
		{Object.entries(ALL_COLORS).map(colorObj => {
			return <option className={colorObj[0]} value={colorObj[0]} key={colorObj[0]}>{t(`DEFAULTS.COLORS.${colorObj[1]}`)}</option>
		})}
	</select>;
}

// Memo to reduce re-rendering of the multiple <option>s
export default memo(ColorSelector);