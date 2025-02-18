import deepFreeze from "../utils/deepFreeze";

// #region Dialogue
// Template
export const DEFAULT_DIALOGUE = {
	color: "purple",
	portrait: `misc/someone_shadow.png`,
	speaker: "DEFAULTS.DIALOGUE.SPEAKER",
	dialogue: "DEFAULTS.DIALOGUE.DIALOGUE",
};

// Blank
export const DEFAULT_DIALOGUE_BLANK = {
	color: DEFAULT_DIALOGUE.color,
	portrait: "",
	speaker: "",
	dialogue: "",
}
// #endregion

// #region Multiple choice
// #region Flat version
// Template
export const DEFAULT_CHOICE = {
	color: "purple",
};

// Blank
export const DEFAULT_CHOICE_BLANK = {
	color: DEFAULT_CHOICE.color,
	text: "",
	selected: false,
}
// #endregion

// #region Single option
// Template
export const DEFAULT_CHOICE_OPTION = 
{
	text: "DEFAULTS.CHOICE.TEXT",
	selected: false,
};

// Blank
export const DEFAULT_CHOICE_OPTION_BLANK = 
{
	text: DEFAULT_CHOICE_BLANK.text,
	selected: DEFAULT_CHOICE_BLANK.selected,
};
// #endregion
// #endregion

deepFreeze(
	DEFAULT_DIALOGUE, DEFAULT_DIALOGUE_BLANK,
	DEFAULT_CHOICE, DEFAULT_CHOICE_BLANK,
	DEFAULT_CHOICE_OPTION, DEFAULT_CHOICE_OPTION_BLANK
);

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