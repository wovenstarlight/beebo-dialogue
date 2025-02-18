import "./documentation";
import ALL_COLORS from "./colors";
import deepFreeze from "../utils/deepFreeze";

// #region Dialogue
/** Default data for a dialogue block. For filling in templates.
 * @type {DataDialogue}
 */
export const DEFAULT_DIALOGUE = {
	color: "purple",
	portrait: `misc/someone_shadow.png`,
	speaker: "DEFAULTS.DIALOGUE.SPEAKER",
	dialogue: "DEFAULTS.DIALOGUE.DIALOGUE",
};

/** Blank data for a dialogue block. For initializing dialogue objects.
 * @type {DataDialogue}
 */
export const DEFAULT_DIALOGUE_BLANK = {
	color: DEFAULT_DIALOGUE.color,
	portrait: "",
	speaker: "",
	dialogue: "",
}
// #endregion

// #region Multiple choice
// #region Flat version
/** Default data for a choice block. For filling in templates.
 * @type {DataChoice}
 */
export const DEFAULT_CHOICE = {
	color: "purple",
};

/** Blank data for a choice block. For initializing choice objects.
 * @type {DataChoice}
 */
export const DEFAULT_CHOICE_BLANK = {
	color: DEFAULT_CHOICE.color,
}
// #endregion

// #region Single option
/** Default data for a single option in a choice block. For filling in templates.
 * @type {DataChoiceOption}
 */
export const DEFAULT_CHOICE_OPTION = 
{
	text: "DEFAULTS.CHOICE.TEXT",
	selected: false,
};

/** Blank data for a single option in a choice block. For initializing option objects.
 * @type {DataChoiceOption}
 */
export const DEFAULT_CHOICE_OPTION_BLANK = 
{
	text: "",
	selected: false,
};
// #endregion
// #endregion

deepFreeze(
	DEFAULT_DIALOGUE, DEFAULT_DIALOGUE_BLANK,
	DEFAULT_CHOICE, DEFAULT_CHOICE_BLANK,
	DEFAULT_CHOICE_OPTION, DEFAULT_CHOICE_OPTION_BLANK
);

/**
 * Returns the default values for a given block type, whether empty or non-empty.
 * @param {object} args
 * @param {BlockType|"option"} args.type The type of block or block component to retrieve defaults for.
 * @param {boolean} [args.blank=false] `true` to get the empty data object for the block `type`, `false` to get the non-empty defaults for the block `type`.
 * @returns The requested block type's defaults.
 */
export function getDefaults({ type, blank = false }) {
	switch (type) {
		case "choice":
			return blank ? DEFAULT_CHOICE_BLANK : DEFAULT_CHOICE;
		
		case "option":
			return blank ? DEFAULT_CHOICE_OPTION_BLANK : DEFAULT_CHOICE_OPTION;

		case "dialogue":
		default:
			return blank ? DEFAULT_DIALOGUE_BLANK : DEFAULT_DIALOGUE;
	}
}