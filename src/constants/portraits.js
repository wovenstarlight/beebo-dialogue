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
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"oliver/house/angy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/house/hatangy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/annoy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/house/hatannoy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/hataw.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.AW",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/bleed.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BLEEDING",
			},
			"oliver/house/hatbleed.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BLEEDING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/confused.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"oliver/house/hatconfused.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/cry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/house/hatcry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/down.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/house/hatdown.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/verg.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EMBARRASSED",
			},
			"oliver/house/excited.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"oliver/house/hatexcited.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/glad.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"oliver/house/hatglad.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/happy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/house/hathappy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/happybleed.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY_BLEEDING",
			},
			"oliver/house/hathappybleed.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY_BLEEDING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/hehe.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/house/hathehe.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/judgy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/house/hatjudgy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/side.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/house/hatside.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sideodd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/house/hatsideodd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/house/hatneutro.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/odd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/house/hatodd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/question.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/house/hatquestion.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/red.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"oliver/house/hatred.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/scared.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/house/hatscared.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/shadow.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/house/hatshadow.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sillyangy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILLY_ANGRY",
			},
			"oliver/house/smug.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMUG",
			},
			"oliver/house/hatsmug.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMUG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/speak.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/house/hatspeak.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sorpr.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/house/hatsurp.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/house/hatmidsurp.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sweet.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SWEET",
			},
			"oliver/house/hatsweet.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SWEET",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/uneasy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.UNEASY",
			},
			"oliver/house/hatuneasy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.UNEASY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/worry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
			"oliver/house/hatworry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HATLESS",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.ORANGE",
		},
		options: {
			"oliver/color/annoy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/color/confused.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"oliver/color/down.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/color/verg.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EMBARRASSED",
			},
			"oliver/color/excited.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"oliver/color/glad.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"oliver/color/happy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/color/hehe.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/color/judgy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/color/side.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/color/sideodd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/color/neutro.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/color/odd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/color/question.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/color/red.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"oliver/color/shadow.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/color/sorpr.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/color/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/color/sweet.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SWEET",
			},
			"oliver/color/worry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GALLERY_YELLOW",
		},
		options: {
			"oliver/galleryin/angy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/galleryin/annoy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/galleryin/verg.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/galleryin/down.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/galleryin/happy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/galleryin/judgy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/galleryin/side.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/galleryin/sideodd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/galleryin/neutro.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/galleryin/odd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/galleryin/question.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/galleryin/scared.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/galleryin/shadow.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/galleryin/sorpr.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/galleryin/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/galleryin/speak.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/galleryin/uneasy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.UNEASY",
			},
			"oliver/galleryin/worry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GALLERY_ORANGE",
		},
		options: {
			"oliver/galleryout/verg.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/galleryout/down.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/galleryout/scared.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/galleryout/shadow.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/galleryout/sorpr.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/galleryout/speak.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/galleryout/worry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OLIVER.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.YOUNG",
		},
		options: {
			"oliver/young/angy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/young/annoy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/young/happy.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/young/hehe.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/young/judge.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/young/side.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/young/neutro.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/young/odd.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/young/question.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/young/surp.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/young/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/young/think.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"oliver/young/tired.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.TIRED",
			},
			"oliver/young/worry.png": {
				identifier: "CONTENT.CHARACTERS.OLIVER.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	// #endregion

	// #region Ángel Valdivia
	{
		label: {
			identifier: "CONTENT.CHARACTERS.ANGEL.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"angel/house/bigangy.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY_STRONG",
			},
			"angel/house/hatbigangy.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY_STRONG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/browraise.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BROW_RAISED",
			},
			"angel/house/hatbrowraise.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BROW_RAISED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/confused.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"angel/house/hatconfused.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/down.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"angel/house/hatdown.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/glad.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"angel/house/hatglad.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/haha.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAHA",
			},
			"angel/house/hathaha.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAHA",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/happy.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"angel/house/hathappy.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/hehe.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"angel/house/hathehe.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/hmph.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HMPH",
			},
			"angel/house/hathmph.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HMPH",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/side.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"angel/house/hatside.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/side2.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"angel/house/hatside2.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"angel/house/hatneutro.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/odd.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"angel/house/hatodd.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/red.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"angel/house/hatred.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sad.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"angel/house/hatsad.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sadsmile.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SMILE",
			},
			"angel/house/hatsadsmile.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SMILE",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sadspeak.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SPEAKING",
			},
			"angel/house/hatsadspeak.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/scarf.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SCARF",
			},
			"angel/house/kill.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILHOUETTE",
			},
			"angel/house/smile.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"angel/house/hatsmile.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/smiling.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
			},
			"angel/house/hatsmiling.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/speak.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"angel/house/hatspeak.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/surprised.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"angel/house/hatsurprised.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/think.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"angel/house/hatthink.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/deepthink.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING_STRONG",
			},
			"angel/house/hatdeepthink.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING_STRONG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/bigworry.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
			"angel/house/hatbigworry.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED_STRONG",
				variant: "CONTENT.PORTRAITS.VARIANTS.HAT",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.ANGEL.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GRAY",
		},
		options: {
			"angel/color/browraise.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.BROW_RAISED",
			},
			"angel/color/confused.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"angel/color/down.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"angel/color/glad.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"angel/color/happy.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"angel/color/hehe.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"angel/color/hmph.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HMPH",
			},
			"angel/color/side.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"angel/color/side2.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"angel/color/neutro.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"angel/color/odd.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"angel/color/sad.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"angel/color/sadsmile.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SMILE",
			},
			"angel/color/smile.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"angel/color/smiling.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
			},
			"angel/color/speak.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"angel/color/think.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"angel/color/bigworry.png": {
				identifier: "CONTENT.CHARACTERS.ANGEL.SHORT",
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
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"vivi/house/angy.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"vivi/house/down.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"vivi/house/excited.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"vivi/house/happy.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"vivi/house/hehe.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"vivi/house/side.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"vivi/house/mischief.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"vivi/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"vivi/house/pout.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.POUTING",
			},
			"vivi/house/sad.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"vivi/house/surprised.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"vivi/house/think.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.VIVI.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.RED",
		},
		options: {
			"vivi/color/angy.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"vivi/color/down.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"vivi/color/excited.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"vivi/color/happy.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"vivi/color/hehe.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"vivi/color/side.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"vivi/color/mischief.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"vivi/color/neutro.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"vivi/color/think.png": {
				identifier: "CONTENT.CHARACTERS.VIVI.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Marigold Margulis
	{
		label: {
			identifier: "CONTENT.CHARACTERS.MARIGOLD.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"marigold/house/angy.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"marigold/house/annoy.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"marigold/house/down.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"marigold/house/eager.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EAGER",
			},
			"marigold/house/excited.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"marigold/house/glad.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.GLAD",
			},
			"marigold/house/happy.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"marigold/house/hehe.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"marigold/house/side.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"marigold/house/mischief.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"marigold/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"marigold/house/nost.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"marigold/house/speak.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"marigold/house/surp.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.MARIGOLD.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.ROYAL_BLUE",
		},
		options: {
			"marigold/color/down.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"marigold/color/happy.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"marigold/color/side.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"marigold/color/neutro.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"marigold/color/surp.png": {
				identifier: "CONTENT.CHARACTERS.MARIGOLD.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
		},
	},
	// #endregion

	// #region Nina Coli
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NINA.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"nina/house/angy.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nina/house/annoy.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nina/house/down.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"nina/house/excited.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"nina/house/happy.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"nina/house/side.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"nina/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nina/house/nost.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"nina/house/nosttalk.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC_SPEAKING",
			},
			"nina/house/sad.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"nina/house/surp.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"nina/house/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"nina/house/think.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"nina/house/worry.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NINA.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.VIOLET",
		},
		options: {
			"nina/color/excited.png": {
				identifier: "CONTENT.CHARACTERS.NINA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
		},
	},
	// #endregion

	// #region Nadia Margulis
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NADIA.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"nadia/house/angy.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nadia/house/annoy.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nadia/house/down.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"nadia/house/side.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"nadia/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nadia/house/odd.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"nadia/house/question.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"nadia/house/shadow.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SHADOW",
			},
			"nadia/house/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"nadia/house/worry.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
			"nadia/house/bigworry.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.NADIA.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PINK",
		},
		options: {
			"nadia/color/angy.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nadia/color/annoy.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nadia/color/side.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"nadia/color/neutro.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nadia/color/odd.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"nadia/color/question.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"nadia/color/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.NADIA.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
		},
	},
	// #endregion

	// #region Simon Margulis
	{
		label: {
			identifier: "CONTENT.CHARACTERS.SIMON.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"simon/house/annoy.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"simon/house/down.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"simon/house/happy.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"simon/house/side.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"simon/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"simon/house/odd.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"simon/house/sad.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"simon/house/sadside.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD_SIDE",
			},
			"simon/house/smile.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"simon/house/speak.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"simon/house/think.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
			"simon/house/worry.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.SIMON.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.GREEN",
		},
		options: {
			"simon/color/down.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"simon/color/happy.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"simon/color/side.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"simon/color/neutro.png": {
				identifier: "CONTENT.CHARACTERS.SIMON.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
		},
	},
	// #endregion

	// #region Owen
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OWEN.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.PURPLE",
		},
		options: {
			"owen/house/angy.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"owen/house/annoy.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"owen/house/cringe.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.CRINGE",
			},
			"owen/house/down.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"owen/house/excited.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"owen/house/happy.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"owen/house/hehe.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"owen/house/side.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"owen/house/neutro.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"owen/house/odd.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
			"owen/house/red.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.RED",
			},
			"owen/house/sad.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SAD",
			},
			"owen/house/smile.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"owen/house/speak.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"owen/house/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"owen/house/think.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.OWEN.LONG",
			variant: "CONTENT.PORTRAITS.GROUP_VARIANTS.CORNFLOWER_BLUE",
		},
		options: {
			"owen/color/happy.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"owen/color/speak.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"owen/color/think.png": {
				identifier: "CONTENT.CHARACTERS.OWEN.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Eugene Coli
	{
		label: {
			identifier: "CONTENT.CHARACTERS.EUGENE.LONG",
		},
		options: {
			"eugene/angy.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"eugene/bigangy.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY_STRONG",
			},
			"eugene/aw.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.AW",
			},
			"eugene/down.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.DOWN",
			},
			"eugene/excited.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.EXCITED",
			},
			"eugene/happy.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
			"eugene/hehe.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HEHE",
			},
			"eugene/side.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE",
			},
			"eugene/side2.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"eugene/neutro.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"eugene/nost.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"eugene/bad.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SILHOUETTE",
			},
			"eugene/smile.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"eugene/speak.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"eugene/midsurp.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"eugene/think.png": {
				identifier: "CONTENT.CHARACTERS.EUGENE.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Police
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_CHIEF.LONG",
		},
		options: {
			"police/chief/neutro.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_CHIEF.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"police/chief/speak.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_CHIEF.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"police/chief/think.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_CHIEF.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_1.LONG",
		},
		options: {
			"police/officer1/angy.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_1.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ANGRY",
			},
			"police/officer1/happy.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_1.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.HAPPY",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_2.LONG",
		},
		options: {
			"police/officer2/neutro.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_2.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"police/officer2/odd.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_2.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.ODD",
			},
		},
	},
	{
		label: {
			identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_3.LONG",
		},
		options: {
			"police/officer3/smile.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_3.SHORT",
				emotion: "CONTENT.PORTRAITS.EMOTIONS.SMILING",
			},
			"police/officer3/think.png": {
				identifier: "CONTENT.CHARACTERS.POLICE_OFFICER_3.SHORT",
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