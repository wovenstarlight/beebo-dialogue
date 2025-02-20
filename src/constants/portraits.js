import "./documentation";
import deepFreeze from "../utils/deepFreeze";

// Portraits retrieved from "Dialogue res/Cuadros"

/**
 * A list of all character sprites available in the game.
 * @type {PortraitGroup[]}
 */
const ALL_PORTRAITS = [
	// #region Oliver Beebo
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			short_identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"oliver/house/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/house/hatangy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/house/hatannoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/hataw.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.AW",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/bleed.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BLEEDING",
			},
			"oliver/house/hatbleed.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BLEEDING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/confused.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"oliver/house/hatconfused.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/cry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/house/hatcry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/house/hatdown.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/verg.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EMBARRASSED",
			},
			"oliver/house/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"oliver/house/hatexcited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/glad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"oliver/house/hatglad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/house/hathappy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/happybleed.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY_BLEEDING",
			},
			"oliver/house/hathappybleed.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY_BLEEDING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/house/hathehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/judgy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/house/hatjudgy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/house/hatside.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sideodd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/house/hatsideodd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/house/hatneutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/house/hatodd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/question.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/house/hatquestion.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/red.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"oliver/house/hatred.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/scared.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/house/hatscared.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/shadow.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/house/hatshadow.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sillyangy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILLY_ANGRY",
			},
			"oliver/house/smug.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMUG",
			},
			"oliver/house/hatsmug.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMUG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/house/hatspeak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sorpr.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/house/hatsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/house/hatmidsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sweet.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SWEET",
			},
			"oliver/house/hatsweet.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SWEET",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/uneasy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.UNEASY",
			},
			"oliver/house/hatuneasy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.UNEASY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
			"oliver/house/hatworry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			short_identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.ORANGE",
		},
		options: {
			"oliver/color/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/color/confused.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"oliver/color/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/color/verg.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EMBARRASSED",
			},
			"oliver/color/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"oliver/color/glad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"oliver/color/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/color/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/color/judgy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/color/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/color/sideodd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/color/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/color/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/color/question.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/color/red.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"oliver/color/shadow.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/color/sorpr.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/color/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/color/sweet.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SWEET",
			},
			"oliver/color/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			short_identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GALLERY_YELLOW",
		},
		options: {
			"oliver/galleryin/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/galleryin/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/galleryin/verg.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/galleryin/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/galleryin/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/galleryin/judgy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/galleryin/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/galleryin/sideodd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/galleryin/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/galleryin/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/galleryin/question.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/galleryin/scared.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/galleryin/shadow.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/galleryin/sorpr.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/galleryin/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/galleryin/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/galleryin/uneasy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.UNEASY",
			},
			"oliver/galleryin/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			short_identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GALLERY_ORANGE",
		},
		options: {
			"oliver/galleryout/verg.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/galleryout/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/galleryout/scared.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/galleryout/shadow.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/galleryout/sorpr.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/galleryout/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/galleryout/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			short_identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.YOUNG",
		},
		options: {
			"oliver/young/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/young/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/young/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/young/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/young/judge.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/young/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/young/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/young/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/young/question.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/young/surp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/young/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/young/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"oliver/young/tired.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.TIRED",
			},
			"oliver/young/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	// #endregion

	// #region Ángel Valdivia
	{
		label: {
			identifier: "CONTENT.CHARACTERS.ANGEL.LONG",
			short_identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"angel/house/bigangy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY_STRONG",
			},
			"angel/house/hatbigangy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY_STRONG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/browraise.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BROW_RAISED",
			},
			"angel/house/hatbrowraise.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BROW_RAISED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/confused.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"angel/house/hatconfused.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"angel/house/hatdown.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/glad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"angel/house/hatglad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/haha.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAHA",
			},
			"angel/house/hathaha.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAHA",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"angel/house/hathappy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"angel/house/hathehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/hmph.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HMPH",
			},
			"angel/house/hathmph.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HMPH",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"angel/house/hatside.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/side2.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"angel/house/hatside2.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"angel/house/hatneutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"angel/house/hatodd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/red.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"angel/house/hatred.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"angel/house/hatsad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sadsmile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SMILE",
			},
			"angel/house/hatsadsmile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SMILE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sadspeak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SPEAKING",
			},
			"angel/house/hatsadspeak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/scarf.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARF",
			},
			"angel/house/kill.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILHOUETTE",
			},
			"angel/house/smile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"angel/house/hatsmile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/smiling.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
			},
			"angel/house/hatsmiling.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"angel/house/hatspeak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/surprised.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"angel/house/hatsurprised.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"angel/house/hatthink.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/deepthink.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING_STRONG",
			},
			"angel/house/hatdeepthink.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING_STRONG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/bigworry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
			"angel/house/hatbigworry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED_STRONG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.ANGEL.LONG",
			short_identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GRAY",
		},
		options: {
			"angel/color/browraise.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BROW_RAISED",
			},
			"angel/color/confused.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"angel/color/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"angel/color/glad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"angel/color/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"angel/color/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"angel/color/hmph.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HMPH",
			},
			"angel/color/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"angel/color/side2.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"angel/color/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"angel/color/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"angel/color/sad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"angel/color/sadsmile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SMILE",
			},
			"angel/color/smile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"angel/color/smiling.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
			},
			"angel/color/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"angel/color/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"angel/color/bigworry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
			"angel/color/dominion_neutro.png": {
				identifier: "CONTENT.CHARACTERS.DOMINION.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
		},
	},
	// #endregion

	// #region Vivi Villalobos
	{
		label: {
			identifier: "CONTENT.CHARACTERS.VIVI.LONG",
			short_identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"vivi/house/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"vivi/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"vivi/house/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"vivi/house/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"vivi/house/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"vivi/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"vivi/house/mischief.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"vivi/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"vivi/house/pout.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.POUTING",
			},
			"vivi/house/sad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"vivi/house/surprised.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"vivi/house/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.VIVI.LONG",
			short_identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.RED",
		},
		options: {
			"vivi/color/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"vivi/color/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"vivi/color/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"vivi/color/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"vivi/color/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"vivi/color/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"vivi/color/mischief.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"vivi/color/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"vivi/color/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Marigold Margulis
	{
		label: {
			identifier: "CONTENT.CHARACTERS.MARIGOLD.LONG",
			short_identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"marigold/house/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"marigold/house/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"marigold/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"marigold/house/eager.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EAGER",
			},
			"marigold/house/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"marigold/house/glad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"marigold/house/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"marigold/house/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"marigold/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"marigold/house/mischief.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"marigold/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"marigold/house/nost.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"marigold/house/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"marigold/house/surp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.MARIGOLD.LONG",
			short_identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.ROYAL_BLUE",
		},
		options: {
			"marigold/color/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"marigold/color/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"marigold/color/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"marigold/color/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"marigold/color/surp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
		},
	},
	// #endregion

	// #region Nina Coli
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NINA.LONG",
			short_identifier: "CONTENT.CHARACTERS.NINA.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"nina/house/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nina/house/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nina/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"nina/house/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"nina/house/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"nina/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"nina/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nina/house/nost.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"nina/house/nosttalk.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC_SPEAKING",
			},
			"nina/house/sad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"nina/house/surp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"nina/house/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"nina/house/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"nina/house/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NINA.LONG",
			short_identifier: "CONTENT.CHARACTERS.NINA.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.VIOLET",
		},
		options: {
			"nina/color/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
		},
	},
	// #endregion

	// #region Nadia Margulis
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NADIA.LONG",
			short_identifier: "CONTENT.CHARACTERS.NINA.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"nadia/house/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nadia/house/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nadia/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"nadia/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"nadia/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nadia/house/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"nadia/house/question.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"nadia/house/shadow.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"nadia/house/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"nadia/house/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
			"nadia/house/bigworry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NADIA.LONG",
			short_identifier: "CONTENT.CHARACTERS.NINA.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PINK",
		},
		options: {
			"nadia/color/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nadia/color/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nadia/color/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"nadia/color/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nadia/color/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"nadia/color/question.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"nadia/color/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
		},
	},
	// #endregion

	// #region Simon Margulis
	{
		label: {
			identifier: "CONTENT.CHARACTERS.SIMON.LONG",
			short_identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"simon/house/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"simon/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"simon/house/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"simon/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"simon/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"simon/house/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"simon/house/sad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"simon/house/sadside.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SIDE",
			},
			"simon/house/smile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"simon/house/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"simon/house/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"simon/house/worry.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.SIMON.LONG",
			short_identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GREEN",
		},
		options: {
			"simon/color/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"simon/color/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"simon/color/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"simon/color/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
		},
	},
	// #endregion

	// #region Owen
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OWEN.LONG",
			short_identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"owen/house/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"owen/house/annoy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"owen/house/cringe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRINGE",
			},
			"owen/house/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"owen/house/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"owen/house/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"owen/house/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"owen/house/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"owen/house/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"owen/house/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"owen/house/red.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"owen/house/sad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"owen/house/smile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"owen/house/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"owen/house/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"owen/house/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OWEN.LONG",
			short_identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.CORNFLOWER_BLUE",
		},
		options: {
			"owen/color/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"owen/color/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"owen/color/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Eugene Coli
	{
		label: {
			identifier: "CONTENT.CHARACTERS.EUGENE.LONG",
			short_identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
		},
		options: {
			"eugene/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"eugene/bigangy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY_STRONG",
			},
			"eugene/aw.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.AW",
			},
			"eugene/down.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"eugene/excited.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"eugene/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"eugene/hehe.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"eugene/side.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"eugene/side2.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"eugene/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"eugene/nost.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"eugene/bad.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILHOUETTE",
			},
			"eugene/smile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"eugene/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"eugene/midsurp.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"eugene/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Police
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_CHIEF.LONG",
			short_identifier: "CONTENT.CHARACTERS.POLICE_CHIEF.SHORT",
		},
		options: {
			"police/chief/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"police/chief/speak.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"police/chief/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_1.LONG",
			short_identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_1.SHORT",
		},
		options: {
			"police/officer1/angy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"police/officer1/happy.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_2.LONG",
			short_identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_2.SHORT",
		},
		options: {
			"police/officer2/neutro.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"police/officer2/odd.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_3.LONG",
			short_identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_3.SHORT",
		},
		options: {
			"police/officer3/smile.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"police/officer3/think.png": {
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Miscellaneous
	{
		label: {
			identifier: "CONTENT.PORTRAITS.GROUP_VARIANTS.OTHER",
		},
		options: {
			"misc/bartender_neutro.png": {
				identifier: "CONTENT.CHARACTERS.BARTENDER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"misc/someone_shadow.png": {
				identifier: "CONTENT.CHARACTERS.SOMEONE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILHOUETTE",
				variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
			},
			"misc/worker_shadow.png": {
				identifier: "CONTENT.CHARACTERS.WORKER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILHOUETTE",
				variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.CITY_GRAY",
			},
			"misc/tutorial_blank.png": {
				identifier: "CONTENT.CHARACTERS.TUTORIAL.SHORT",
				variant: "CONTENT.PORTRAITS.VARIANTS.BLANK_SQUARE",
			},
		},
	},
	// #endregion
];

deepFreeze(ALL_PORTRAITS);

export default ALL_PORTRAITS;