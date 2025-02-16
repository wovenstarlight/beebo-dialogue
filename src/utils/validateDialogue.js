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
function validateDialogue({ color, ...args }) {
	let obj = {
		color: typeof color === "string" && Object.values(allColors).includes(color) ? color : "purple",
	};

	return ("options" in args)
		? {
			...obj,
			options: (
				Object.prototype.toString.call(args.options) === "[object Array]"
				&& args.options.every(opt => Object.prototype.toString.call(opt) === "[object Object]")
			)
				? args.options.map(opt => {
					return {
						text: typeof opt.text === "string" ? opt.text : "Lorem ipsum dolor sit amet",
						selected: typeof opt.selected === "boolean" ? opt.selected : false,
					}
				})
				: [{ text: "Lorem ipsum dolor sit amet" }],
		}
		: {
			...obj,
			portrait: typeof args.portrait === "string" && Object.values(allPortraits).some(el => Object.values(el).includes(args.portrait)) ? args.portrait : `misc/someone_shadow.png`,
			speaker: typeof args.speaker === "string" ? args.speaker.slice(0, 100) : "Y/N",
			dialogue: typeof args.dialogue === "string" ? args.dialogue.slice(0, 250) : "Lorem ipsum dolor sit amet.",
		};
}

export default validateDialogue;