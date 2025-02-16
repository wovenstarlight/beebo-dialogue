import allColors from "../assets/data/colors";
import allPortraits from "../assets/data/portraits";

/**
 * Cleans input for a dialogue component, checking that all are strings.
 * 
 * For `color`/`portrait`, checks for valid values from the enumerated lists.
 * For `speaker`/`dialogue`, truncates excess characters.
 * @param {{color: string, portrait: string, speaker: string, dialogue: string}} props Raw data for a dialogue component.
 * @returns A dialogue object with validated data.
 */
function validateDialogue({ color, portrait, speaker, dialogue }) {
	return {
		color: typeof color === "string" && Object.values(allColors).includes(color) ? color : "purple",
		portrait: typeof portrait === "string" && Object.values(allPortraits).some(el => Object.values(el).includes(portrait)) ? portrait : `misc/someone_shadow.png`,
		speaker: typeof speaker === "string" ? speaker.slice(0, 100) : "Y/N",
		dialogue: typeof dialogue === "string" ? dialogue.slice(0, 250) : "Lorem ipsum dolor sit amet.",
	}
}

export default validateDialogue;