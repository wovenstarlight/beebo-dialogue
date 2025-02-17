import { DEFAULT_DIALOGUE, DEFAULT_CHOICE } from "../assets/data/blockDefaults";
import allColors from "../assets/data/colors";
import allPortraits from "../assets/data/portraits";

/**
 * Cleans input for a component of the given type.
 * @param {string} args.type The type of component to be created.
 * @param {object} args.data The raw data for the component.
 * @returns A validated data object in the expected format for the given component.
 */
export default function validate({ type, data }) {
	switch (type) {
		case "choice":
			return validateChoice(data);
		
		case "dialogue":
		default:
			return validateDialogue(data);
	}
}

/**
 * Cleans input for a Dialogue component.
 * @param {object} data Raw data for a box of dialogue.
 * @param {string} data.color The color palette for this block. Checked for type `string` and being a member of the corresponding enumerated list.
 * @param {string} data.speaker The speaker of the dialogue. Checked for type `string` and being a member of the corresponding enumerated list.
 * @param {string} data.portrait The shorthand URL to the portrait/sprite for the speaker. Checked for type `string` and non-emptiness, and excess characters are truncated.
 * @param {string} data.dialogue The text being spoken. Checked for type `string` and non-emptiness, and excess characters are truncated.
 * @returns A validated data object.
 */
export function validateDialogue({ color, portrait, speaker, dialogue }) {
	return {
		color: typeof color === "string" && Object.values(allColors).includes(color) ? color : DEFAULT_DIALOGUE.color,
		portrait: typeof portrait === "string" && Object.values(allPortraits).some(el => Object.values(el).includes(portrait)) ? portrait : DEFAULT_DIALOGUE.portrait,
		speaker: typeof speaker === "string" && speaker.length > 0 ? speaker.slice(0, 100) : DEFAULT_DIALOGUE.speaker,
		dialogue: typeof dialogue === "string" && dialogue.length > 0 ? dialogue.slice(0, 250) : DEFAULT_DIALOGUE.dialogue,
	};
}

/**
 * Cleans input for a Choice component.
 * @param {object} data Raw data for a multiple choice menu.
 * @param {string} data.color The color palette for this block. Checked for type `string` and being a member of the corresponding enumerated list.
 * @param {object[]} data.options The individual options making up the menu. Checked for type `object`.
 * @param {string} data.options.text The text label displayed for this option. Checked for type `string` and non-emptiness.
 * @param {?boolean} data.options.selected Whether this option should be highlighted as though being clicked. Checked for type `boolean`.
 * @returns A validated data object.
 */
export function validateChoice({ color, options }) {
	return {
		color: typeof color === "string" && Object.values(allColors).includes(color) ? color : DEFAULT_CHOICE.color,
		options: (
			Object.prototype.toString.call(options) === "[object Array]"
			&& options.every(opt => Object.prototype.toString.call(opt) === "[object Object]")
		)
			? options.map(opt => {
				return {
					text: typeof opt.text === "string" && opt.text.length > 0 ? opt.text : DEFAULT_CHOICE.text,
					selected: typeof opt.selected === "boolean" ? opt.selected : DEFAULT_CHOICE.selected,
				}
			})
			: [{ text: DEFAULT_CHOICE.text }],
	};
}