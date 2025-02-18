import deepFreeze from "../utils/deepFreeze";

// Portraits retrieved from "Dialogue res/Cuadros"

const ALL_PORTRAITS = [
	// #region Oliver Beebo
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.OLIVER.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"oliver/house/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/house/hatangy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/house/hatannoy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/hataw.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.AW",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/bleed.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.BLEEDING",
			},
			"oliver/house/hatbleed.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.BLEEDING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/confused.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"oliver/house/hatconfused.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CONFUSED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/cry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/house/hatcry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CRYING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/house/hatdown.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/verg.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EMBARRASSED",
			},
			"oliver/house/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"oliver/house/hatexcited.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/glad.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.GLAD",
			},
			"oliver/house/hatglad.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.GLAD",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/house/hathappy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/happybleed.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY_BLEEDING",
			},
			"oliver/house/hathappybleed.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY_BLEEDING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/house/hathehe.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/judgy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/house/hatjudgy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.JUDGY",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/house/hatside.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sideodd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/house/hatsideodd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_ODD",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/house/hatneutro.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/house/hatodd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/question.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/house/hatquestion.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.QUESTIONING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/red.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.RED",
			},
			"oliver/house/hatred.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.RED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/scared.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/house/hatscared.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SCARED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/shadow.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/house/hatshadow.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SHADOW",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sillyangy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SILLY_ANGRY",
			},
			"oliver/house/smug.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMUG",
			},
			"oliver/house/hatsmug.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMUG",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/house/hatspeak.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sorpr.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/house/hatsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/house/hatmidsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/sweet.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SWEET",
			},
			"oliver/house/hatsweet.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SWEET",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/uneasy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.UNEASY",
			},
			"oliver/house/hatuneasy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.UNEASY",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
			"oliver/house/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
			"oliver/house/hatworry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HATLESS",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.OLIVER.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.ORANGE",
		},
		options: {
			"oliver/color/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/color/confused.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"oliver/color/down.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/color/verg.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EMBARRASSED",
			},
			"oliver/color/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"oliver/color/glad.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.GLAD",
			},
			"oliver/color/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/color/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/color/judgy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/color/side.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/color/sideodd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/color/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/color/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/color/question.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/color/red.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.RED",
			},
			"oliver/color/shadow.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/color/sorpr.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/color/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/color/sweet.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SWEET",
			},
			"oliver/color/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.OLIVER.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.GALLERY_YELLOW",
		},
		options: {
			"oliver/galleryin/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/galleryin/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/galleryin/verg.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/galleryin/down.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/galleryin/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/galleryin/judgy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/galleryin/side.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/galleryin/sideodd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_ODD",
			},
			"oliver/galleryin/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/galleryin/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/galleryin/question.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/galleryin/scared.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/galleryin/shadow.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/galleryin/sorpr.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/galleryin/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/galleryin/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/galleryin/uneasy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.UNEASY",
			},
			"oliver/galleryin/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.OLIVER.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.GALLERY_ORANGE",
		},
		options: {
			"oliver/galleryout/verg.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CRYING",
			},
			"oliver/galleryout/down.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"oliver/galleryout/scared.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SCARED",
			},
			"oliver/galleryout/shadow.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SHADOW",
			},
			"oliver/galleryout/sorpr.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/galleryout/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"oliver/galleryout/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.OLIVER.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.YOUNG",
		},
		options: {
			"oliver/young/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"oliver/young/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"oliver/young/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"oliver/young/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"oliver/young/judge.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.JUDGY",
			},
			"oliver/young/side.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"oliver/young/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"oliver/young/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"oliver/young/question.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"oliver/young/surp.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"oliver/young/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"oliver/young/think.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
			"oliver/young/tired.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.TIRED",
			},
			"oliver/young/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.OLIVER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	// #endregion

	// #region Ángel Valdivia
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.ANGEL.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"angel/house/bigangy.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY_STRONG",
			},
			"angel/house/hatbigangy.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY_STRONG",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/browraise.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.BROW_RAISED",
			},
			"angel/house/hatbrowraise.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.BROW_RAISED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/confused.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"angel/house/hatconfused.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CONFUSED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"angel/house/hatdown.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/glad.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.GLAD",
			},
			"angel/house/hatglad.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.GLAD",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/haha.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAHA",
			},
			"angel/house/hathaha.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAHA",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"angel/house/hathappy.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"angel/house/hathehe.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/hmph.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HMPH",
			},
			"angel/house/hathmph.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HMPH",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"angel/house/hatside.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/side2.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"angel/house/hatside2.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_2",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"angel/house/hatneutro.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"angel/house/hatodd.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/red.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.RED",
			},
			"angel/house/hatred.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.RED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sad.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD",
			},
			"angel/house/hatsad.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sadsmile.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD_SMILE",
			},
			"angel/house/hatsadsmile.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD_SMILE",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/sadspeak.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD_SPEAKING",
			},
			"angel/house/hatsadspeak.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD_SPEAKING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/scarf.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SCARF",
			},
			"angel/house/kill.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SILHOUETTE",
			},
			"angel/house/smile.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING",
			},
			"angel/house/hatsmile.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/smiling.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
			},
			"angel/house/hatsmiling.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"angel/house/hatspeak.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/surprised.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"angel/house/hatsurprised.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/think.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
			"angel/house/hatthink.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/deepthink.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING_STRONG",
			},
			"angel/house/hatdeepthink.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING_STRONG",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
			"angel/house/bigworry.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
			"angel/house/hatbigworry.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED_STRONG",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.HAT",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.ANGEL.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.GRAY",
		},
		options: {
			"angel/color/browraise.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.BROW_RAISED",
			},
			"angel/color/confused.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CONFUSED",
			},
			"angel/color/down.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"angel/color/glad.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.GLAD",
			},
			"angel/color/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"angel/color/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"angel/color/hmph.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HMPH",
			},
			"angel/color/side.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"angel/color/side2.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"angel/color/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"angel/color/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"angel/color/sad.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD",
			},
			"angel/color/sadsmile.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD_SMILE",
			},
			"angel/color/smile.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING",
			},
			"angel/color/smiling.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING_SPEAKING",
			},
			"angel/color/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"angel/color/think.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
			"angel/color/bigworry.png": {
				identifier: "DEFAULTS.CHARACTERS.ANGEL.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
			"angel/color/dominion_neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.DOMINION.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
		},
	},
	// #endregion

	// #region Vivi Villalobos
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.VIVI.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"vivi/house/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"vivi/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"vivi/house/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"vivi/house/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"vivi/house/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"vivi/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"vivi/house/mischief.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"vivi/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"vivi/house/pout.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.POUTING",
			},
			"vivi/house/sad.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD",
			},
			"vivi/house/surprised.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"vivi/house/think.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.VIVI.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.RED",
		},
		options: {
			"vivi/color/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"vivi/color/down.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"vivi/color/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"vivi/color/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"vivi/color/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"vivi/color/side.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"vivi/color/mischief.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"vivi/color/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"vivi/color/think.png": {
				identifier: "DEFAULTS.CHARACTERS.VIVI.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Marigold Margulis
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.MARIGOLD.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"marigold/house/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"marigold/house/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"marigold/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"marigold/house/eager.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EAGER",
			},
			"marigold/house/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"marigold/house/glad.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.GLAD",
			},
			"marigold/house/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"marigold/house/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"marigold/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"marigold/house/mischief.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MISCHIEVOUS",
			},
			"marigold/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"marigold/house/nost.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"marigold/house/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"marigold/house/surp.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.MARIGOLD.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.ROYAL_BLUE",
		},
		options: {
			"marigold/color/down.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"marigold/color/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"marigold/color/side.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"marigold/color/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"marigold/color/surp.png": {
				identifier: "DEFAULTS.CHARACTERS.MARIGOLD.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
		},
	},
	// #endregion

	// #region Nina Coli
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.NINA.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"nina/house/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nina/house/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nina/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"nina/house/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"nina/house/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"nina/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"nina/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nina/house/nost.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"nina/house/nosttalk.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NOSTALGIC_SPEAKING",
			},
			"nina/house/sad.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD",
			},
			"nina/house/surp.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SURPRISED",
			},
			"nina/house/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"nina/house/think.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
			"nina/house/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.NINA.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.VIOLET",
		},
		options: {
			"nina/color/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.NINA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
		},
	},
	// #endregion

	// #region Nadia Margulis
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.NADIA.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"nadia/house/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nadia/house/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nadia/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"nadia/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"nadia/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nadia/house/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"nadia/house/question.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"nadia/house/shadow.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SHADOW",
			},
			"nadia/house/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"nadia/house/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
			"nadia/house/bigworry.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED_STRONG",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.NADIA.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PINK",
		},
		options: {
			"nadia/color/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"nadia/color/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"nadia/color/side.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"nadia/color/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"nadia/color/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"nadia/color/question.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.QUESTIONING",
			},
			"nadia/color/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.NADIA.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
		},
	},
	// #endregion

	// #region Simon Margulis
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.SIMON.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"simon/house/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"simon/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"simon/house/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"simon/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"simon/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"simon/house/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"simon/house/sad.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD",
			},
			"simon/house/sadside.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD_SIDE",
			},
			"simon/house/smile.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING",
			},
			"simon/house/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"simon/house/think.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
			"simon/house/worry.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.WORRIED",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.SIMON.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.GREEN",
		},
		options: {
			"simon/color/down.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"simon/color/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"simon/color/side.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"simon/color/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.SIMON.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
		},
	},
	// #endregion

	// #region Owen
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.OWEN.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
		},
		options: {
			"owen/house/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"owen/house/annoy.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANNOYED",
			},
			"owen/house/cringe.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.CRINGE",
			},
			"owen/house/down.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"owen/house/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"owen/house/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"owen/house/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"owen/house/side.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"owen/house/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"owen/house/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
			"owen/house/red.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.RED",
			},
			"owen/house/sad.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SAD",
			},
			"owen/house/smile.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING",
			},
			"owen/house/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"owen/house/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"owen/house/think.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.OWEN.LONG",
			variant: "DEFAULTS.PORTRAITS.COLORS.CORNFLOWER_BLUE",
		},
		options: {
			"owen/color/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"owen/color/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"owen/color/think.png": {
				identifier: "DEFAULTS.CHARACTERS.OWEN.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Eugene Coli
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.EUGENE.LONG",
		},
		options: {
			"eugene/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"eugene/bigangy.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY_STRONG",
			},
			"eugene/aw.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.AW",
			},
			"eugene/down.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.DOWN",
			},
			"eugene/excited.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.EXCITED",
			},
			"eugene/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
			"eugene/hehe.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HEHE",
			},
			"eugene/side.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE",
			},
			"eugene/side2.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SIDE_2",
			},
			"eugene/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"eugene/nost.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NOSTALGIC",
			},
			"eugene/bad.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SILHOUETTE",
			},
			"eugene/smile.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING",
			},
			"eugene/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"eugene/midsurp.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.MILD_SURPRISE",
			},
			"eugene/think.png": {
				identifier: "DEFAULTS.CHARACTERS.EUGENE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Police
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.POLICE_CHIEF.LONG",
		},
		options: {
			"police/chief/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_CHIEF.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"police/chief/speak.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_CHIEF.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SPEAKING",
			},
			"police/chief/think.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_CHIEF.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_1.LONG",
		},
		options: {
			"police/officer1/angy.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_1.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ANGRY",
			},
			"police/officer1/happy.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_1.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.HAPPY",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_2.LONG",
		},
		options: {
			"police/officer2/neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_2.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"police/officer2/odd.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_2.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.ODD",
			},
		},
	},
	{
		label: {
			identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_3.LONG",
		},
		options: {
			"police/officer3/smile.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_3.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SMILING",
			},
			"police/officer3/think.png": {
				identifier: "DEFAULTS.CHARACTERS.POLICE_OFFICER_3.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.THINKING",
			},
		},
	},
	// #endregion

	// #region Miscellaneous
	{
		label: {
			identifier: "DEFAULTS.PORTRAITS.OTHER",
		},
		options: {
			"misc/bartender_neutro.png": {
				identifier: "DEFAULTS.CHARACTERS.BARTENDER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.NEUTRAL",
			},
			"misc/someone_shadow.png": {
				identifier: "DEFAULTS.CHARACTERS.SOMEONE.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SILHOUETTE",
				variant: "DEFAULTS.PORTRAITS.COLORS.PURPLE",
			},
			"misc/worker_shadow.png": {
				identifier: "DEFAULTS.CHARACTERS.WORKER.SHORT",
				emotion: "DEFAULTS.PORTRAITS.EMOTIONS.SILHOUETTE",
				variant: "DEFAULTS.PORTRAITS.COLORS.CITY_GRAY",
			},
			"misc/tutorial_blank.png": {
				identifier: "DEFAULTS.CHARACTERS.TUTORIAL.SHORT",
				variant: "DEFAULTS.PORTRAITS.VARIANTS.BLANK_SQUARE",
			},
		},
	},
	// #endregion
];

deepFreeze(ALL_PORTRAITS);

export default ALL_PORTRAITS;