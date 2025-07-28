import "./documentation";
import deepFreeze from "../utils/deepFreeze";

/** A mapping of color palettes to their corresponding keys in the i18n files.
 * 
 * The first color in the list acts as the default value.
 * @type {object.<Palette, LanguageKey>}
 */
const ALL_COLORS = {
	purple:		"purple",
	orange:		"orange",
	gray:		"gray",
	red:		"red",
	royalblue:	"royal_blue",
	violet:		"violet",
	pink:		"pink",
	green:		"green",
	cornflower:	"cornflower_blue",
	yellow:		"yellow",
	darkgray:	"dark_gray",
	skyblue:	"sky_blue",
	redtrain:	"red_train",
	redyellow:	"red_yellow",
};

deepFreeze(ALL_COLORS);

export default ALL_COLORS;