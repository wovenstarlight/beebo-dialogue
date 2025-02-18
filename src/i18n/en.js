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

	ACTIONS: {
		DELETE_ALL: "Delete all",
		SAVE_IMAGE: "Save as PNG",
	},

	ALERTS: {
		CONFIRM_DELETE_ALL: "Really delete all currently-generated dialogue boxes?\n\nThis is irreversible!",
		ERROR_IMAGE_CONVERSION: "There was an error while trying to convert the image. Please let me know about the issue on Github!",
	},

	DEFAULTS: {
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