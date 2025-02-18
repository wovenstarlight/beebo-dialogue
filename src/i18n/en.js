import deepFreeze from "../utils/deepFreeze";

const MESSAGES = {
	SITE_HEADER: {
		TITLE: "Detective Beebo dialogue builder",
		SUBTITLE: "Based on the game <hyperlink>Detective Beebo: Night at the Mansion</hyperlink> by Bwobbers",
		GIF_MAKER: "A static image version of <hyperlink>kongkrog's dialogue GIF maker</hyperlink>",
	},

	BODY: {
		STARTUP: "Use the form below to get started!",
	},

	FOOTER: {
		CREATOR: "Made by wovenstarlight",
		SOURCE_CODE: "Source code on Github",
		FONTS: "Font credits: <hyperlinkNokia>Nokia Cellphone FC</hyperlinkNokia> and SqueezedPixels by Bwobbers",
	},

	FORMS: {
		ADDER: {
			TITLE: "Add new element",
			TABBER_TITLE: "Choose what you'd like to add:",
			DIALOGUE: "Dialogue",
			CHOICES: "Choices",
			UNSET_PORTRAIT: "-- No portrait chosen --",
		},
		JSON: {
			TITLE: "Mass-edit via JSON",
			SUBTITLE: "Save/create multiple dialogue boxes at once!",
			EXPLAIN_COPY: "Copy the above JSON to your clipboard",
			EXPLAIN_DOWNLOAD: "Download as a JSON file to your device",
			EXPLAIN_UPLOAD: "Upload a JSON file (this overwrites existing dialogue!)",
		},
		EDITOR: {
			TITLE_CHOICE: "Edit choices",
			TITLE_DIALOGUE: "Edit dialogue",
		},
		FIELDS: {
			PALETTE: "Palette",
			PORTRAIT: "Potrait",
			SPEAKER: "Speaker",
			DIALOGUE: "Dialogue",
			OPTION_NUMBER: "Option {{index}}",
			PALETTE_REUSE: "When off, palette will reset to purple after every submission",
		},
	},
	
	ACTIONS: {
		ADD: "Add element",
		UPDATE: "Update element",
		RESET: "Reset form",
		CANCEL: "Cancel",
		EDIT: "Edit",
		MOVE_UP: "Move up",
		MOVE_DOWN: "Move down",
		DELETE: "Delete",
		DELETE_ALL: "Delete all",
		SAVE_IMAGE: "Save as PNG",
		COPY: "Copy",
		DOWNLOAD: "Download",
		UPLOAD: "Upload",
		AUTOFILL: "Need a reference?",
		ADD_OPTION: "Add an option",
		MARK_SELECTED: "<hidden>Mark option {{index}} as</hidden> Selected",
		PALETTE_REUSE: "Reuse same palette for future elements",
	},

	ALERTS: {
		CONFIRM_DELETE_ALL: "Really delete all currently-generated dialogue boxes?\n\nThis is irreversible!",
		CONFIRM_COPIED: "Copied!",
		CONFIRM_DOWNLOADED: "Downloaded!",
		CONFIRM_UPLOADED: "Uploaded!",
		ERROR_IMAGE_CONVERSION: "There was an error while trying to convert the image. Please let me know about the issue on Github!",
		ERROR_JSON_FILETYPE: "Wrong file type!\n\nYou must upload a .json file.",
		ERROR_JSON_FORMAT: "Wrong format!\n\nThe dialogue file should contain an array of objects, each of which only has a subset of the keys \"color\", \"portrait\", \"speaker\", \"dialogue\", and \"options\".",
	},

	DEFAULTS: {
		DIALOGUE: {
			SPEAKER: "Someone",
			DIALOGUE: "Lorem ipsum dolor sit amet.",
		},
		CHOICE: {
			TEXT: "Lorem ipsum dolor sit amet",
		},
		COLORS: {
			PURPLE: "Purple (House of Vera/Eugene Coli)",
			ORANGE: "Orange (Oliver Beebo)",
			GRAY: "Gray (Ángel Valdivia)",
			RED: "Red (Vivi Villalobos)",
			ROYAL_BLUE: "Royal blue (Marigold Margulis)",
			VIOLET: "Violet (Nina Coli)",
			PINK: "Pink (Nadia Margulis)",
			GREEN: "Green (Simon Margulis)",
			CORNFLOWER_BLUE: "Cornflower blue (Owen)",
			YELLOW: "Yellow (Art gallery)",
			DARK_GRAY: "Dark gray (City/Police)",
			SKY_BLUE: "Sky blue (True ending)",
		},
		CHARACTERS: {
			OLIVER: {
				LONG: "Oliver Beebo",
				SHORT: "Oliver",
			},
			ANGEL: {
				SPEAKER_LABEL: "Ángel",
				LONG: "Ángel Valdivia",
				SHORT: "Ángel",
			},
			VIVI: {
				SPEAKER_LABEL: "Vivi",
				LONG: "Vivi Villalobos",
				SHORT: "Vivi",
			},
			MARIGOLD: {
				LONG: "Marigold Margulis",
				SHORT: "Marigold",
			},
			NINA: {
				LONG: "Nina Coli",
				SHORT: "Nina",
			},
			NADIA: {
				SPEAKER_LABEL: "Nadia",
				LONG: "Nadia Margulis",
				SHORT: "Nadia",
			},
			SIMON: {
				SPEAKER_LABEL: "Simon",
				LONG: "Simon Margulis",
				SHORT: "Simon",
			},
			OWEN: {
				LONG: "Owen",
				SHORT: "Owen",
			},
			EUGENE: {
				LONG: "Eugene Coli",
				SHORT: "Eugene",
			},
			DOMINION: {
				LONG: "Dominion",
				SHORT: "Dominion",
			},
			POLICE_CHIEF: {
				LONG: "Police Chief",
				SHORT: "Chief",
			},
			POLICE_OFFICER_1: {
				SPEAKER_LABEL: "Police Officer",
				LONG: "Police Officer 1",
				SHORT: "Officer",
			},
			POLICE_OFFICER_2: {
				SPEAKER_LABEL: "Police Officer",
				LONG: "Police Officer 2",
				SHORT: "Officer",
			},
			POLICE_OFFICER_3: {
				SPEAKER_LABEL: "Police Officer",
				LONG: "Police Officer 3",
				SHORT: "Officer",
			},
			BARTENDER: {
				LONG: "Bartender",
				SHORT: "Bartender",
			},
			SOMEONE: {
				LONG: "Someone",
				SHORT: "Someone",
			},
			WORKER: {
				LONG: "Worker",
				SHORT: "Worker",
			},
			TUTORIAL: {
				LONG: "Tutorial",
				SHORT: "Tutorial",
			},
		},
	},
};

deepFreeze(MESSAGES);

export default MESSAGES;