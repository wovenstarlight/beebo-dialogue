import { DEFAULT_DIALOGUE, DEFAULT_CHOICE, DEFAULT_CHOICE_OPTION, DEFAULT_IMAGE } from "../constants/blockDefaults";
import { CHOICE, DIALOGUE, IMAGE } from "../constants/blockNames";
import ALL_COLORS from "../constants/colors";
import ALL_PORTRAITS from "../constants/portraits";

/** Cleans input for a component of the given type.
 * @param {string} args.type The type of component to be created.
 * @param {object} args.data The raw data for the component.
 * @param {function} translator A translator function to get the localized versions of text used in this block.
 * @returns A validated data object in the expected format for the given component.
 */
export default function validate({ type, data, translator }) {
	switch (type) {
		case IMAGE:
			return validateImage({ data: data, t: translator });

		case CHOICE:
			return validateChoice({ data: data, t: translator });
		
		case DIALOGUE:
		default:
			return validateDialogue({ data: data, t: translator });
	}
}

/** Cleans input for a Dialogue component.
 * @param {object} data Raw data for a box of dialogue.
 * @param {string} data.color The color palette for this block. Checked for type `string` and being a member of the corresponding enumerated list.
 * @param {string} data.speaker The speaker of the dialogue. Checked for type `string` and being a member of the corresponding enumerated list.
 * @param {string} data.portrait The shorthand URL to the portrait/sprite for the speaker. Checked for type `string` and non-emptiness, and excess characters are truncated.
 * @param {string} data.dialogue The text being spoken. Checked for type `string` and non-emptiness, and excess characters are truncated.
 * @param {function} t A translator function to get the localized versions of text used in this block.
 * @returns A validated data object.
 */
export function validateDialogue({ data: { color, portrait, speaker, dialogue }, t }) {
	return {
		color: validateColor(color, DEFAULT_DIALOGUE.color),
		portrait: typeof portrait === "string" && ALL_PORTRAITS.some(el => portrait in el.options) ? portrait : DEFAULT_DIALOGUE.portrait,
		speaker: typeof speaker === "string" && speaker.length > 0 ? speaker.slice(0, 100) : t(DEFAULT_DIALOGUE.speaker),
		dialogue: typeof dialogue === "string" && dialogue.length > 0 ? dialogue.slice(0, 250) : t(DEFAULT_DIALOGUE.dialogue),
	};
}

/** Cleans input for a Choice component.
 * @param {object} data Raw data for a multiple choice menu.
 * @param {string} data.color The color palette for this block. Checked for type `string` and being a member of the corresponding enumerated list.
 * @param {object[]} data.options The individual options making up the menu. Checked for type `object`.
 * @param {string} data.options.text The text label displayed for this option. Checked for type `string` and non-emptiness, and excess characters are truncated.
 * @param {?boolean} data.options.selected Whether this option should be highlighted as though being clicked. Checked for type `boolean`.
 * @param {function} t A translator function to get the localized versions of text used in this block.
 * @returns A validated data object.
 */
export function validateChoice({ data: { color, options }, t }) {
	return {
		color: validateColor(color, DEFAULT_CHOICE.color),
		options: (
			Object.prototype.toString.call(options) === "[object Array]"
			&& options.every(opt => Object.prototype.toString.call(opt) === "[object Object]")
		)
			? options.map((opt, index) => {
				return {
					id: `option_${index}`,
					text: typeof opt.text === "string" && opt.text.length > 0 ? opt.text.slice(0, 160) : DEFAULT_CHOICE_OPTION.text,
					selected: typeof opt.selected === "boolean" ? opt.selected : DEFAULT_CHOICE_OPTION.selected,
				}
			})
			: [{ text: DEFAULT_CHOICE_OPTION.text }],
	};
}

/** Cleans input for an Image component.
 * @param {object} data Raw data for an image.
 * @param {string} data.color The color palette for this block's border. Checked for type `string` and being a member of the corresponding enumerated list.
 * @param {string} data.image The data URL for this image. Checked for type `string` and being a valid image data URL (starting with `data:image/*;base64;*`).
 * @param {boolean} data.stretch Whether this image should be stretched to fill available space. `false` if it should be displayed at its original size.
 * @param {string} data.altText Alternative text for this image; by default, is the original filename. Checked for type `string` and non-emptiness.
 * @param {function} t A translator function to get the localized versions of text used in this block.
 * @returns A validated image object.
 */
export function validateImage({ data: { color, image, stretch, altText }, t }) {
	return {
		color: validateColor(color, DEFAULT_IMAGE.color),
		image: typeof image === "string" && image.match(/^data:image\/\w+;base64,.+/g) ? image : DEFAULT_IMAGE.image,
		stretch: typeof stretch === "boolean" ? stretch : DEFAULT_IMAGE.stretch,
		altText: typeof altText === "string" && altText.length > 0 ? altText : t("forms.fields.image"),
	};
}

/** Validates a color palette.
 * @param {string} color A color palette name.
 * @param {string} defaultColor A valid color palette name to use as a fallback
 * @returns `color` if a valid palette from the enumerated list, or `defaultColor` otherwise.
 */
function validateColor(color, defaultColor) {
	return typeof color === "string" && color in ALL_COLORS ? color : defaultColor;
}