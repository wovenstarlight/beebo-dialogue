export const DEFAULT_DIALOGUE = {
	color: "purple",
	portrait: `misc/someone_shadow.png`,
	speaker: "Y/N",
	dialogue: "Lorem ipsum dolor sit amet.",
};

export const DEFAULT_CHOICE = {
	color: "purple",
	text: "Lorem ipsum dolor sit amet",
	selected: false,
};

export function getDefaults(type) {
	switch (type) {
		case "choice":
			return DEFAULT_CHOICE;

		case "dialogue":
		default:
			return DEFAULT_DIALOGUE;
	}
}