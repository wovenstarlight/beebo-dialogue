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
		speaker: "content.characters.oliver.long",
		dialogue: "forms.adder.samples.dialogue.oliver_cat",
	},
	{
		color: "purple",
		portrait: "oliver/house/shadow.png",
		speaker: "content.characters.oliver.long",
		dialogue: "forms.adder.samples.dialogue.oliver_wrong",
	},
	{
		color: "orange",
		portrait: "oliver/galleryout/shadow.png",
		speaker: "content.characters.oliver.long",
		dialogue: "forms.adder.samples.dialogue.oliver_right",
	},
	{
		color: "purple",
		portrait: "angel/house/happy.png",
		speaker: "content.characters.angel.speaker_label",
		dialogue: "forms.adder.samples.dialogue.angel_intro",
	},
	{
		color: "darkgray",
		portrait: "angel/color/dominion_neutro.png",
		speaker: "content.characters.dominion.long",
		dialogue: "forms.adder.samples.dialogue.dominion_silent",
	},
	{
		color: "purple",
		portrait: "vivi/house/happy.png",
		speaker: "content.characters.vivi.speaker_label",
		dialogue: "forms.adder.samples.dialogue.vivi_invincible",
	},
	{
		color: "purple",
		portrait: "marigold/house/neutro.png",
		speaker: "content.characters.marigold.unknown_label",
		dialogue: "forms.adder.samples.dialogue.marigold_suspicion",
	},
	{
		color: "purple",
		portrait: "nina/house/annoy.png",
		speaker: "content.characters.nina.long",
		dialogue: "forms.adder.samples.dialogue.nina_idyllic",
	},
	{
		color: "skyblue",
		portrait: "nadia/color/annoy.png",
		speaker: "content.characters.nadia.speaker_label",
		dialogue: "forms.adder.samples.dialogue.nadia_upset",
	},
	{
		color: "skyblue",
		portrait: "simon/color/neutro.png",
		speaker: "content.characters.simon.speaker_label",
		dialogue: "forms.adder.samples.dialogue.simon_fatherless",
	},
	{
		color: "purple",
		portrait: "owen/house/excited.png",
		speaker: "content.characters.owen.long",
		dialogue: "forms.adder.samples.dialogue.owen_freed",
	},
	{
		color: "purple",
		portrait: "eugene/smile.png",
		speaker: "content.characters.eugene.long",
		dialogue: "forms.adder.samples.dialogue.eugene_cautious",
	},
	{
		color: "gray",
		portrait: "angel/color/happy.png",
		speaker: "content.characters.angel.speaker_label",
		dialogue: "forms.adder.samples.dialogue.angel_beebin_time",
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
				text: "forms.adder.samples.choice.bar.vivi",
				selected: false,
			},
			{
				text: "forms.adder.samples.choice.bar.coowner",
				selected: false,
			},
			{
				text: "forms.adder.samples.choice.bar.others",
				selected: false,
			},
			{
				text: "forms.adder.samples.choice.bar.men",
				selected: true,
			},
		],
	},
	{
		color: "purple",
		options: [
			{
				text: "forms.adder.samples.choice.self.fears",
			},
			{
				text: "forms.adder.samples.choice.self.cases",
			},
			{
				text: "forms.adder.samples.choice.self.career",
			},
		]
	},
	{
		color: "purple",
		options: [
			{
				text: "forms.adder.samples.choice.fight.fight",
				selected: true,
			},
		]
	}
];

deepFreeze(DIALOGUE_SAMPLES, CHOICE_SAMPLES);