// #region Dialogue
// Template
export const DEFAULT_DIALOGUE = {
	color: "purple",
	portrait: `misc/someone_shadow.png`,
	speaker: "Y/N",
	dialogue: "Lorem ipsum dolor sit amet.",
};
Object.freeze(DEFAULT_DIALOGUE);

// Blank
export const DEFAULT_DIALOGUE_BLANK = {
	color: DEFAULT_DIALOGUE.color,
	portrait: "",
	speaker: "",
	dialogue: "",
}
Object.freeze(DEFAULT_DIALOGUE_BLANK);
// #endregion

// #region Multiple choice
// #region Flat version
// Template
export const DEFAULT_CHOICE = {
	color: "purple",
	text: "Lorem ipsum dolor sit amet",
	selected: false,
};
Object.freeze(DEFAULT_CHOICE);

// Blank
export const DEFAULT_CHOICE_BLANK = {
	color: DEFAULT_CHOICE.color,
	text: "",
	selected: false,
}
Object.freeze(DEFAULT_CHOICE_BLANK);
// #endregion

// #region Single option
// Template
export const DEFAULT_CHOICE_OPTION = 
{
	text: DEFAULT_CHOICE.text,
	selected: DEFAULT_CHOICE.selected,
};
Object.freeze(DEFAULT_CHOICE_OPTION);

// Blank
export const DEFAULT_CHOICE_OPTION_BLANK = 
{
	text: DEFAULT_CHOICE_BLANK.text,
	selected: DEFAULT_CHOICE_BLANK.selected,
};
Object.freeze(DEFAULT_CHOICE_OPTION_BLANK);
// #endregion
// #endregion

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