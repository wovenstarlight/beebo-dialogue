export const DEFAULT_DIALOGUE = {
	color: "purple",
	portrait: `misc/someone_shadow.png`,
	speaker: "Y/N",
	dialogue: "Lorem ipsum dolor sit amet.",
};
Object.freeze(DEFAULT_DIALOGUE);

export const DEFAULT_DIALOGUE_BLANK = {
	color: DEFAULT_DIALOGUE.color,
	portrait: "",
	speaker: "",
	dialogue: "",
}
Object.freeze(DEFAULT_DIALOGUE_BLANK);

export const DEFAULT_CHOICE = {
	color: "purple",
	text: "Lorem ipsum dolor sit amet",
	selected: false,
};
Object.freeze(DEFAULT_CHOICE);

export const DEFAULT_CHOICE_BLANK = {
	color: DEFAULT_CHOICE.color,
	text: "",
	selected: false,
}
Object.freeze(DEFAULT_CHOICE_BLANK);

export function getDefaults({ type, blank = false }) {
	switch (type) {
		case "choice":
			return blank ? DEFAULT_CHOICE_BLANK : DEFAULT_CHOICE;

		case "dialogue":
		default:
			return blank ? DEFAULT_DIALOGUE_BLANK : DEFAULT_DIALOGUE;
	}
}