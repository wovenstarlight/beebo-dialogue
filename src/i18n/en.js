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
		},
		JSON: {
			TITLE: "Mass-edit via JSON",
			SUBTITLE: "Save/create multiple dialogue boxes at once!",
			EXPLAIN_COPY: "Copy the above JSON to your clipboard",
			EXPLAIN_DOWNLOAD: "Download as a JSON file to your device",
			EXPLAIN_UPLOAD: "Upload a JSON file (this overwrites existing dialogue!)",
		},
		FIELDS: {
			PALETTE: "Palette",
			PALETTE_REUSE: "When off, palette will reset to purple after every submission",
		},
	},
	
	ACTIONS: {
		ADD: "Add element",
		RESET: "Reset form",
		DELETE_ALL: "Delete all",
		SAVE_IMAGE: "Save as PNG",
		COPY: "Copy",
		DOWNLOAD: "Download",
		UPLOAD: "Upload",
		AUTOFILL: "Need a reference?",
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
	},
};

deepFreeze(MESSAGES);

export default MESSAGES;