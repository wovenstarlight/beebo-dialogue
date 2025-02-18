import "./documentation";
import deepFreeze from "../utils/deepFreeze";

// Dialogue retrieved from "Dialogue res/JSON/en"

/** Sample dialogue blocks, retrieved from the game.
 * @type {DataDialogue[]}
 */
export const DIALOGUE_SAMPLES = [
	{
		color: "orange",
		portrait: "oliver/color/annoy.png",
		speaker: "CONTENT.CHARACTERS.OLIVER.LONG",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.OLIVER_CAT",
	},
	{
		color: "purple",
		portrait: "oliver/house/shadow.png",
		speaker: "CONTENT.CHARACTERS.OLIVER.LONG",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.OLIVER_WRONG",
	},
	{
		color: "orange",
		portrait: "oliver/galleryout/shadow.png",
		speaker: "CONTENT.CHARACTERS.OLIVER.LONG",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.OLIVER_RIGHT",
	},
	{
		color: "purple",
		portrait: "angel/house/happy.png",
		speaker: "CONTENT.CHARACTERS.ANGEL.SPEAKER_LABEL",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.ANGEL_INTRO",
	},
	{
		color: "darkgray",
		portrait: "angel/color/dominion_neutro.png",
		speaker: "CONTENT.CHARACTERS.DOMINION.LONG",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.DOMINION_SILENT",
	},
	{
		color: "purple",
		portrait: "vivi/house/happy.png",
		speaker: "CONTENT.CHARACTERS.VIVI.SPEAKER_LABEL",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.VIVI_INVINCIBLE",
	},
	{
		color: "purple",
		portrait: "marigold/house/neutro.png",
		speaker: "CONTENT.CHARACTERS.MARIGOLD.UNKNOWN_LABEL",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.MARIGOLD_SUSPICION",
	},
	{
		color: "purple",
		portrait: "nina/house/annoy.png",
		speaker: "CONTENT.CHARACTERS.NINA.LONG",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.NINA_IDYLLIC",
	},
	{
		color: "skyblue",
		portrait: "nadia/color/annoy.png",
		speaker: "CONTENT.CHARACTERS.NADIA.SPEAKER_LABEL",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.NADIA_UPSET",
	},
	{
		color: "skyblue",
		portrait: "simon/color/neutro.png",
		speaker: "CONTENT.CHARACTERS.SIMON.SPEAKER_LABEL",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.SIMON_FATHERLESS",
	},
	{
		color: "purple",
		portrait: "owen/house/excited.png",
		speaker: "CONTENT.CHARACTERS.OWEN.LONG",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.OWEN_FREED",
	},
	{
		color: "purple",
		portrait: "eugene/smile.png",
		speaker: "CONTENT.CHARACTERS.EUGENE.LONG",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.EUGENE_CAUTIOUS",
	},
	{
		color: "gray",
		portrait: "angel/color/happy.png",
		speaker: "CONTENT.CHARACTERS.ANGEL.SPEAKER_LABEL",
		dialogue: "FORMS.ADDER.SAMPLES.DIALOGUE.ANGEL_BEEBIN_TIME",
	},
];

/** Sample choice blocks, retrieved from the game.
 * @type {DataChoice[]}
 */
export const CHOICE_SAMPLES = [
	{
		color: "purple",
		options: [
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.BAR.VIVI",
				selected: false,
			},
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.BAR.COOWNER",
				selected: false,
			},
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.BAR.OTHERS",
				selected: false,
			},
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.BAR.MEN",
				selected: true,
			},
		],
	},
	{
		color: "purple",
		options: [
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.SELF.FEARS",
			},
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.SELF.CASES",
			},
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.SELF.CAREER",
			},
		]
	},
	{
		color: "purple",
		options: [
			{
				text: "FORMS.ADDER.SAMPLES.CHOICE.FIGHT.FIGHT",
				selected: true,
			},
		]
	}
];

deepFreeze(DIALOGUE_SAMPLES, CHOICE_SAMPLES);