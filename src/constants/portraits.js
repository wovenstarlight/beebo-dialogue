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
			identifier: "content.characters.oliver.long",
			short_identifier: "content.characters.oliver.short",
			variant: "content.portraits.group_variants.purple",
			gender: "male",
		},
		options: {
			"oliver/house/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"oliver/house/hatangy.png": {
				emotion: "content.portraits.emotions.angry",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"oliver/house/hatannoy.png": {
				emotion: "content.portraits.emotions.annoyed",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/hataw.png": {
				emotion: "content.portraits.emotions.aw",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/bleed.png": {
				emotion: "content.portraits.emotions.bleeding",
			},
			"oliver/house/hatbleed.png": {
				emotion: "content.portraits.emotions.bleeding",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/confused.png": {
				emotion: "content.portraits.emotions.confused",
			},
			"oliver/house/hatconfused.png": {
				emotion: "content.portraits.emotions.confused",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/cry.png": {
				emotion: "content.portraits.emotions.crying",
			},
			"oliver/house/hatcry.png": {
				emotion: "content.portraits.emotions.crying",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"oliver/house/hatdown.png": {
				emotion: "content.portraits.emotions.down",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/verg.png": {
				emotion: "content.portraits.emotions.embarrassed",
			},
			"oliver/house/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"oliver/house/hatexcited.png": {
				emotion: "content.portraits.emotions.excited",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/glad.png": {
				emotion: "content.portraits.emotions.glad",
			},
			"oliver/house/hatglad.png": {
				emotion: "content.portraits.emotions.glad",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"oliver/house/hathappy.png": {
				emotion: "content.portraits.emotions.happy",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/happybleed.png": {
				emotion: "content.portraits.emotions.happy_bleeding",
			},
			"oliver/house/hathappybleed.png": {
				emotion: "content.portraits.emotions.happy_bleeding",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"oliver/house/hathehe.png": {
				emotion: "content.portraits.emotions.hehe",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/judgy.png": {
				emotion: "content.portraits.emotions.judgy",
			},
			"oliver/house/hatjudgy.png": {
				emotion: "content.portraits.emotions.judgy",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"oliver/house/hatside.png": {
				emotion: "content.portraits.emotions.side",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/sideodd.png": {
				emotion: "content.portraits.emotions.side_odd",
			},
			"oliver/house/hatsideodd.png": {
				emotion: "content.portraits.emotions.side_odd",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"oliver/house/hatneutro.png": {
				emotion: "content.portraits.emotions.neutral",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"oliver/house/hatodd.png": {
				emotion: "content.portraits.emotions.odd",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/question.png": {
				emotion: "content.portraits.emotions.questioning",
			},
			"oliver/house/hatquestion.png": {
				emotion: "content.portraits.emotions.questioning",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/red.png": {
				emotion: "content.portraits.emotions.red",
			},
			"oliver/house/hatred.png": {
				emotion: "content.portraits.emotions.red",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/scared.png": {
				emotion: "content.portraits.emotions.scared",
			},
			"oliver/house/hatscared.png": {
				emotion: "content.portraits.emotions.scared",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/shadow.png": {
				emotion: "content.portraits.emotions.shadow",
			},
			"oliver/house/hatshadow.png": {
				emotion: "content.portraits.emotions.shadow",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/sillyangy.png": {
				emotion: "content.portraits.emotions.silly_angry",
			},
			"oliver/house/smug.png": {
				emotion: "content.portraits.emotions.smug",
			},
			"oliver/house/hatsmug.png": {
				emotion: "content.portraits.emotions.smug",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"oliver/house/hatspeak.png": {
				emotion: "content.portraits.emotions.speaking",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/sorpr.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"oliver/house/hatsurp.png": {
				emotion: "content.portraits.emotions.surprised",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"oliver/house/hatmidsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/sweet.png": {
				emotion: "content.portraits.emotions.sweet",
			},
			"oliver/house/hatsweet.png": {
				emotion: "content.portraits.emotions.sweet",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/uneasy.png": {
				emotion: "content.portraits.emotions.uneasy",
			},
			"oliver/house/hatuneasy.png": {
				emotion: "content.portraits.emotions.uneasy",
				variant: "content.portraits.variants.hatless",
			},
			"oliver/house/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
			"oliver/house/hatworry.png": {
				emotion: "content.portraits.emotions.worried",
				variant: "content.portraits.variants.hatless",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.oliver.long",
			short_identifier: "content.characters.oliver.short",
			variant: "content.portraits.group_variants.orange",
			gender: "male",
		},
		options: {
			"oliver/color/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"oliver/color/confused.png": {
				emotion: "content.portraits.emotions.confused",
			},
			"oliver/color/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"oliver/color/verg.png": {
				emotion: "content.portraits.emotions.embarrassed",
			},
			"oliver/color/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"oliver/color/glad.png": {
				emotion: "content.portraits.emotions.glad",
			},
			"oliver/color/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"oliver/color/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"oliver/color/judgy.png": {
				emotion: "content.portraits.emotions.judgy",
			},
			"oliver/color/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"oliver/color/sideodd.png": {
				emotion: "content.portraits.emotions.side_odd",
			},
			"oliver/color/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"oliver/color/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"oliver/color/question.png": {
				emotion: "content.portraits.emotions.questioning",
			},
			"oliver/color/red.png": {
				emotion: "content.portraits.emotions.red",
			},
			"oliver/color/shadow.png": {
				emotion: "content.portraits.emotions.shadow",
			},
			"oliver/color/sorpr.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"oliver/color/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"oliver/color/sweet.png": {
				emotion: "content.portraits.emotions.sweet",
			},
			"oliver/color/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.oliver.long",
			short_identifier: "content.characters.oliver.short",
			variant: "content.portraits.group_variants.gallery_yellow",
			gender: "male",
		},
		options: {
			"oliver/galleryin/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"oliver/galleryin/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"oliver/galleryin/verg.png": {
				emotion: "content.portraits.emotions.crying",
			},
			"oliver/galleryin/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"oliver/galleryin/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"oliver/galleryin/judgy.png": {
				emotion: "content.portraits.emotions.judgy",
			},
			"oliver/galleryin/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"oliver/galleryin/sideodd.png": {
				emotion: "content.portraits.emotions.side_odd",
			},
			"oliver/galleryin/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"oliver/galleryin/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"oliver/galleryin/question.png": {
				emotion: "content.portraits.emotions.questioning",
			},
			"oliver/galleryin/scared.png": {
				emotion: "content.portraits.emotions.scared",
			},
			"oliver/galleryin/shadow.png": {
				emotion: "content.portraits.emotions.shadow",
			},
			"oliver/galleryin/sorpr.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"oliver/galleryin/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"oliver/galleryin/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"oliver/galleryin/uneasy.png": {
				emotion: "content.portraits.emotions.uneasy",
			},
			"oliver/galleryin/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.oliver.long",
			short_identifier: "content.characters.oliver.short",
			variant: "content.portraits.group_variants.gallery_orange",
			gender: "male",
		},
		options: {
			"oliver/galleryout/verg.png": {
				emotion: "content.portraits.emotions.crying",
			},
			"oliver/galleryout/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"oliver/galleryout/scared.png": {
				emotion: "content.portraits.emotions.scared",
			},
			"oliver/galleryout/shadow.png": {
				emotion: "content.portraits.emotions.shadow",
			},
			"oliver/galleryout/sorpr.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"oliver/galleryout/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"oliver/galleryout/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.oliver.long",
			short_identifier: "content.characters.oliver.short",
			variant: "content.portraits.group_variants.young",
			gender: "male",
		},
		options: {
			"oliver/young/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"oliver/young/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"oliver/young/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"oliver/young/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"oliver/young/judge.png": {
				emotion: "content.portraits.emotions.judgy",
			},
			"oliver/young/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"oliver/young/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"oliver/young/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"oliver/young/question.png": {
				emotion: "content.portraits.emotions.questioning",
			},
			"oliver/young/surp.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"oliver/young/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"oliver/young/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
			"oliver/young/tired.png": {
				emotion: "content.portraits.emotions.tired",
			},
			"oliver/young/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
		},
	},
	// #endregion

	// #region Ángel Valdivia
	{
		label: {
			identifier: "content.characters.angel.long",
			short_identifier: "content.characters.angel.short",
			variant: "content.portraits.group_variants.purple",
			gender: "male",
		},
		options: {
			"angel/house/bigangy.png": {
				emotion: "content.portraits.emotions.angry_strong",
			},
			"angel/house/hatbigangy.png": {
				emotion: "content.portraits.emotions.angry_strong",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/browraise.png": {
				emotion: "content.portraits.emotions.brow_raised",
			},
			"angel/house/hatbrowraise.png": {
				emotion: "content.portraits.emotions.brow_raised",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/confused.png": {
				emotion: "content.portraits.emotions.confused",
			},
			"angel/house/hatconfused.png": {
				emotion: "content.portraits.emotions.confused",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"angel/house/hatdown.png": {
				emotion: "content.portraits.emotions.down",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/glad.png": {
				emotion: "content.portraits.emotions.glad",
			},
			"angel/house/hatglad.png": {
				emotion: "content.portraits.emotions.glad",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/haha.png": {
				emotion: "content.portraits.emotions.haha",
			},
			"angel/house/hathaha.png": {
				emotion: "content.portraits.emotions.haha",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"angel/house/hathappy.png": {
				emotion: "content.portraits.emotions.happy",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"angel/house/hathehe.png": {
				emotion: "content.portraits.emotions.hehe",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/hmph.png": {
				emotion: "content.portraits.emotions.hmph",
			},
			"angel/house/hathmph.png": {
				emotion: "content.portraits.emotions.hmph",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/side2.png": {
				emotion: "content.portraits.emotions.side",
			},
			"angel/house/hatside2.png": {
				emotion: "content.portraits.emotions.side",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/side.png": {
				emotion: "content.portraits.emotions.side_2",
			},
			"angel/house/hatside.png": {
				emotion: "content.portraits.emotions.side_2",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"angel/house/hatneutro.png": {
				emotion: "content.portraits.emotions.neutral",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"angel/house/hatodd.png": {
				emotion: "content.portraits.emotions.odd",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/red.png": {
				emotion: "content.portraits.emotions.red",
			},
			"angel/house/hatred.png": {
				emotion: "content.portraits.emotions.red",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/sad.png": {
				emotion: "content.portraits.emotions.sad",
			},
			"angel/house/hatsad.png": {
				emotion: "content.portraits.emotions.sad",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/sadsmile.png": {
				emotion: "content.portraits.emotions.sad_smile",
			},
			"angel/house/hatsadsmile.png": {
				emotion: "content.portraits.emotions.sad_smile",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/sadspeak.png": {
				emotion: "content.portraits.emotions.sad_speaking",
			},
			"angel/house/hatsadspeak.png": {
				emotion: "content.portraits.emotions.sad_speaking",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/scarf.png": {
				emotion: "content.portraits.emotions.scarf",
			},
			"angel/house/kill.png": {
				emotion: "content.portraits.emotions.silhouette",
			},
			"angel/house/smile.png": {
				emotion: "content.portraits.emotions.smiling",
			},
			"angel/house/hatsmile.png": {
				emotion: "content.portraits.emotions.smiling",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/smiling.png": {
				emotion: "content.portraits.emotions.smiling_speaking",
			},
			"angel/house/hatsmiling.png": {
				emotion: "content.portraits.emotions.smiling_speaking",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"angel/house/hatspeak.png": {
				emotion: "content.portraits.emotions.speaking",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/surprised.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"angel/house/hatsurprised.png": {
				emotion: "content.portraits.emotions.surprised",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
			"angel/house/hatthink.png": {
				emotion: "content.portraits.emotions.thinking",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/deepthink.png": {
				emotion: "content.portraits.emotions.thinking_strong",
			},
			"angel/house/hatdeepthink.png": {
				emotion: "content.portraits.emotions.thinking_strong",
				variant: "content.portraits.variants.hat",
			},
			"angel/house/bigworry.png": {
				emotion: "content.portraits.emotions.worried_strong",
			},
			"angel/house/hatbigworry.png": {
				emotion: "content.portraits.emotions.worried_strong",
				variant: "content.portraits.variants.hat",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.angel.long",
			short_identifier: "content.characters.angel.short",
			variant: "content.portraits.group_variants.gray",
			gender: "male",
		},
		options: {
			"angel/color/browraise.png": {
				emotion: "content.portraits.emotions.brow_raised",
			},
			"angel/color/confused.png": {
				emotion: "content.portraits.emotions.confused",
			},
			"angel/color/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"angel/color/glad.png": {
				emotion: "content.portraits.emotions.glad",
			},
			"angel/color/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"angel/color/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"angel/color/hmph.png": {
				emotion: "content.portraits.emotions.hmph",
			},
			"angel/color/side2.png": {
				emotion: "content.portraits.emotions.side",
			},
			"angel/color/side.png": {
				emotion: "content.portraits.emotions.side_2",
			},
			"angel/color/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"angel/color/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"angel/color/sad.png": {
				emotion: "content.portraits.emotions.sad",
			},
			"angel/color/sadsmile.png": {
				emotion: "content.portraits.emotions.sad_smile",
			},
			"angel/color/smile.png": {
				emotion: "content.portraits.emotions.smiling",
			},
			"angel/color/smiling.png": {
				emotion: "content.portraits.emotions.smiling_speaking",
			},
			"angel/color/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"angel/color/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
			"angel/color/bigworry.png": {
				emotion: "content.portraits.emotions.worried_strong",
			},
			"angel/color/dominion_neutro.png": {
				identifier: "content.characters.dominion.short",
				emotion: "content.portraits.emotions.neutral",
			},
		},
	},
	// #endregion

	// #region Vivi Villalobos
	{
		label: {
			identifier: "content.characters.vivi.long",
			short_identifier: "content.characters.vivi.short",
			variant: "content.portraits.group_variants.purple",
			gender: "female",
		},
		options: {
			"vivi/house/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"vivi/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"vivi/house/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"vivi/house/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"vivi/house/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"vivi/house/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"vivi/house/mischief.png": {
				emotion: "content.portraits.emotions.mischievous",
			},
			"vivi/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"vivi/house/pout.png": {
				emotion: "content.portraits.emotions.pouting",
			},
			"vivi/house/sad.png": {
				emotion: "content.portraits.emotions.sad",
			},
			"vivi/house/surprised.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"vivi/house/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.vivi.long",
			short_identifier: "content.characters.vivi.short",
			variant: "content.portraits.group_variants.red",
			gender: "female",
		},
		options: {
			"vivi/color/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"vivi/color/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"vivi/color/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"vivi/color/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"vivi/color/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"vivi/color/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"vivi/color/mischief.png": {
				emotion: "content.portraits.emotions.mischievous",
			},
			"vivi/color/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"vivi/color/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
		},
	},
	// #endregion

	// #region Marigold Margulis
	{
		label: {
			identifier: "content.characters.marigold.long",
			short_identifier: "content.characters.marigold.short",
			variant: "content.portraits.group_variants.purple",
			gender: "female",
		},
		options: {
			"marigold/house/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"marigold/house/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"marigold/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"marigold/house/eager.png": {
				emotion: "content.portraits.emotions.eager",
			},
			"marigold/house/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"marigold/house/glad.png": {
				emotion: "content.portraits.emotions.glad",
			},
			"marigold/house/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"marigold/house/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"marigold/house/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"marigold/house/mischief.png": {
				emotion: "content.portraits.emotions.mischievous",
			},
			"marigold/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"marigold/house/nost.png": {
				emotion: "content.portraits.emotions.nostalgic",
			},
			"marigold/house/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"marigold/house/surp.png": {
				emotion: "content.portraits.emotions.surprised",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.marigold.long",
			short_identifier: "content.characters.marigold.short",
			variant: "content.portraits.group_variants.royal_blue",
			gender: "female",
		},
		options: {
			"marigold/color/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"marigold/color/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"marigold/color/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"marigold/color/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"marigold/color/surp.png": {
				emotion: "content.portraits.emotions.surprised",
			},
		},
	},
	// #endregion

	// #region Nina Coli
	{
		label: {
			identifier: "content.characters.nina.long",
			short_identifier: "content.characters.nina.short",
			variant: "content.portraits.group_variants.purple",
			gender: "female",
		},
		options: {
			"nina/house/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"nina/house/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"nina/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"nina/house/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"nina/house/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"nina/house/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"nina/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"nina/house/nost.png": {
				emotion: "content.portraits.emotions.nostalgic",
			},
			"nina/house/nosttalk.png": {
				emotion: "content.portraits.emotions.nostalgic_speaking",
			},
			"nina/house/sad.png": {
				emotion: "content.portraits.emotions.sad",
			},
			"nina/house/surp.png": {
				emotion: "content.portraits.emotions.surprised",
			},
			"nina/house/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"nina/house/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
			"nina/house/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.nina.long",
			short_identifier: "content.characters.nina.short",
			variant: "content.portraits.group_variants.violet",
			gender: "female",
		},
		options: {
			"nina/color/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
		},
	},
	// #endregion

	// #region Nadia Margulis
	{
		label: {
			identifier: "content.characters.nadia.long",
			short_identifier: "content.characters.nadia.short",
			variant: "content.portraits.group_variants.purple",
			gender: "female",
		},
		options: {
			"nadia/house/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"nadia/house/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"nadia/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"nadia/house/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"nadia/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"nadia/house/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"nadia/house/question.png": {
				emotion: "content.portraits.emotions.questioning",
			},
			"nadia/house/shadow.png": {
				emotion: "content.portraits.emotions.shadow",
			},
			"nadia/house/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"nadia/house/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
			"nadia/house/bigworry.png": {
				emotion: "content.portraits.emotions.worried_strong",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.nadia.long",
			short_identifier: "content.characters.nadia.short",
			variant: "content.portraits.group_variants.pink",
			gender: "female",
		},
		options: {
			"nadia/color/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"nadia/color/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"nadia/color/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"nadia/color/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"nadia/color/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"nadia/color/question.png": {
				emotion: "content.portraits.emotions.questioning",
			},
			"nadia/color/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
		},
	},
	// #endregion

	// #region Simon Margulis
	{
		label: {
			identifier: "content.characters.simon.long",
			short_identifier: "content.characters.simon.short",
			variant: "content.portraits.group_variants.purple",
			gender: "male",
		},
		options: {
			"simon/house/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"simon/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"simon/house/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"simon/house/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"simon/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"simon/house/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"simon/house/sad.png": {
				emotion: "content.portraits.emotions.sad",
			},
			"simon/house/sadside.png": {
				emotion: "content.portraits.emotions.sad_side",
			},
			"simon/house/smile.png": {
				emotion: "content.portraits.emotions.smiling",
			},
			"simon/house/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"simon/house/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
			"simon/house/worry.png": {
				emotion: "content.portraits.emotions.worried",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.simon.long",
			short_identifier: "content.characters.simon.short",
			variant: "content.portraits.group_variants.green",
			gender: "male",
		},
		options: {
			"simon/color/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"simon/color/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"simon/color/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"simon/color/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
		},
	},
	// #endregion

	// #region Owen
	{
		label: {
			identifier: "content.characters.owen.long",
			short_identifier: "content.characters.owen.short",
			variant: "content.portraits.group_variants.purple",
			gender: "male",
		},
		options: {
			"owen/house/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"owen/house/annoy.png": {
				emotion: "content.portraits.emotions.annoyed",
			},
			"owen/house/cringe.png": {
				emotion: "content.portraits.emotions.cringe",
			},
			"owen/house/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"owen/house/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"owen/house/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"owen/house/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"owen/house/side.png": {
				emotion: "content.portraits.emotions.side",
			},
			"owen/house/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"owen/house/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
			"owen/house/red.png": {
				emotion: "content.portraits.emotions.red",
			},
			"owen/house/sad.png": {
				emotion: "content.portraits.emotions.sad",
			},
			"owen/house/smile.png": {
				emotion: "content.portraits.emotions.smiling",
			},
			"owen/house/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"owen/house/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"owen/house/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.owen.long",
			short_identifier: "content.characters.owen.short",
			variant: "content.portraits.group_variants.cornflower_blue",
			gender: "male",
		},
		options: {
			"owen/color/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"owen/color/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"owen/color/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
		},
	},
	// #endregion

	// #region Eugene Coli
	{
		label: {
			identifier: "content.characters.eugene.long",
			short_identifier: "content.characters.eugene.short",
			gender: "male",
		},
		options: {
			"eugene/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"eugene/bigangy.png": {
				emotion: "content.portraits.emotions.angry_strong",
			},
			"eugene/aw.png": {
				emotion: "content.portraits.emotions.aw",
			},
			"eugene/down.png": {
				emotion: "content.portraits.emotions.down",
			},
			"eugene/excited.png": {
				emotion: "content.portraits.emotions.excited",
			},
			"eugene/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
			"eugene/hehe.png": {
				emotion: "content.portraits.emotions.hehe",
			},
			"eugene/side2.png": {
				emotion: "content.portraits.emotions.side",
			},
			"eugene/side.png": {
				emotion: "content.portraits.emotions.side_2",
			},
			"eugene/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"eugene/nost.png": {
				emotion: "content.portraits.emotions.nostalgic",
			},
			"eugene/bad.png": {
				emotion: "content.portraits.emotions.silhouette",
			},
			"eugene/smile.png": {
				emotion: "content.portraits.emotions.smiling",
			},
			"eugene/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"eugene/midsurp.png": {
				emotion: "content.portraits.emotions.mild_surprise",
			},
			"eugene/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
		},
	},
	// #endregion

	// #region Police
	{
		label: {
			identifier: "content.characters.police_chief.long",
			short_identifier: "content.characters.police_chief.short",
			// gender unknown (male?)
		},
		options: {
			"police/chief/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"police/chief/speak.png": {
				emotion: "content.portraits.emotions.speaking",
			},
			"police/chief/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.police_officer_1.long",
			short_identifier: "content.characters.police_officer_1.short",
			// gender unknown
		},
		options: {
			"police/officer1/angy.png": {
				emotion: "content.portraits.emotions.angry",
			},
			"police/officer1/happy.png": {
				emotion: "content.portraits.emotions.happy",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.police_officer_2.long",
			short_identifier: "content.characters.police_officer_2.short",
			// gender unknown (female?)
		},
		options: {
			"police/officer2/neutro.png": {
				emotion: "content.portraits.emotions.neutral",
			},
			"police/officer2/odd.png": {
				emotion: "content.portraits.emotions.odd",
			},
		},
	},
	{
		label: {
			identifier: "content.characters.police_officer_3.long",
			short_identifier: "content.characters.police_officer_3.short",
			// gender unknown
		},
		options: {
			"police/officer3/smile.png": {
				emotion: "content.portraits.emotions.smiling",
			},
			"police/officer3/think.png": {
				emotion: "content.portraits.emotions.thinking",
			},
		},
	},
	// #endregion

	// #region Miscellaneous
	{
		label: {
			identifier: "content.portraits.group_variants.other",
		},
		options: {
			"misc/bartender_neutro.png": {
				identifier: "content.characters.bartender.short",
				emotion: "content.portraits.emotions.neutral",
				// gender unknown (female?)
			},
			"misc/someone_shadow.png": {
				identifier: "content.characters.someone.short",
				emotion: "content.portraits.emotions.shadow",
				variant: "content.portraits.group_variants.purple",
			},
			"misc/worker_shadow.png": {
				identifier: "content.characters.worker.short",
				emotion: "content.portraits.emotions.shadow",
				variant: "content.portraits.group_variants.city_gray",
			},
			"misc/tutorial_blank.png": {
				identifier: "content.characters.tutorial.short",
				variant: "content.portraits.variants.blank_square",
			},
		},
	},
	// #endregion
];

deepFreeze(ALL_PORTRAITS);

export default ALL_PORTRAITS;