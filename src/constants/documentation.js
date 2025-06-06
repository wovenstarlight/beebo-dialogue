// #region Blocks
	// Block types
	/**
	 * @typedef BlockType
	 * A string representing a given content block's type.
	 * @type {"dialogue"|"choice"|"image"}
	 */

	// Palettes
	/**
	 * @typedef Palette
	 * A key mapping to one of the palettes from colors.js.
	 * @type {"purple"|"orange"|"gray"|"red"|"royalblue"|"violet"|"pink"|"green"|"cornflower"|"yellow"|"darkgray"|"skyblue"}
	 */

	// Portraits
	/**
	 * @typedef PortraitURL
	 * A partial link to a character sprite stored on the server. The complete URL can be retrieved by prefixing with `/beebo-dialogue/assets/portraits/`.
	 * @type {string}
	 */
	/**
	 * @typedef PortraitGroup
	 * A group of related character sprites.
	 * @type {object}
	 * @property {object} label A label for this group.
	 * @property {LanguageKey} label.identifier An identifier referencing the shared characteristic of this group, such as the name of a character depicted in all included sprites.
	 * @property {?LanguageKey} label.short_identifier A shorter version of the identifier to label `<option>` elements. Should fall back to `identifier` if not provided.
	 * @property {?LanguageKey} label.variant A unique characteristic differentiating this group from others with the same `identifier`, such as a color palette.
	 * @property {object.<PortraitURL, PortraitData>} options A mapping of sprite URLs to their descriptions.
	 */
	/**
	 * @typedef PortraitData
	 * Descriptive data for a single sprite. 
	 * @type {object}
	 * @property {?LanguageKey} identifier An identifier for this sprite; typically the character depicted therein. Must be provided if the parent `PortraitGroup` has no `short_identifier`.
	 * @property {?LanguageKey} emotion A description of the emotion the character in the sprite (if any) is feeling.
	 * @property {?LanguageKey} variant A unique characteristic differentiating this sprite from others with the same `identifier` (and, if present, `emotion`).
	 */

	// #region Block data
		/**
		 * @typedef DataDialogue
		 * Data representing a box of dialogue.
		 * @type {object}
		 * @property {Palette} color The color palette for this block.
		 * @property {PortraitURL} portrait A partial URL to the speaker's character sprite.
		 * @property {string|LanguageKey} speaker The speaker of the dialogue.
		 * @property {string|LanguageKey} dialogue The text being spoken.
		 */
		/**
		 * @typedef DataChoice
		 * Data representing a multiple choice menu.
		 * @type {object}
		 * @property {Palette} color The color palette for this block.
		 * @property {DataChoiceOption[]} options The individual options making up the menu.
		 */
		/**
		 * @typedef DataChoiceOption
		 * Data representing a single option from a multiple choice menu.
		 * @type {object}
		 * @property {string|LanguageKey} text The text label displayed for this option.
		 * @property {?boolean} selected `true` if this option should be highlighted as though being clicked; `false`/`null` otherwise.
		 */
		/**
		 * @typedef DataImage
		 * Data representing an image.
		 * @type {object}
		 * @property {Palette} color The color palette for this block. Determines the border color for the image.
		 * @property {string} image A data URL representing this image.
		 * @property {boolean} stretch `true` if this image should be stretched to fill available space; `false` if it should be displayed at its original size.
		 * @property {string} altText Alternative text for this image. The original filename, where available, or defaults to "Image".
		 */
		/**
		 * @typedef DataImageMultiple
		 * Data representing a group of images.
		 * @type {object}
		 * @property {Palette} color The color palette for all contained images. Determines the border color for the images.
		 * @property {DataImage[]} images A group of data image objects.
		 */
	// #endregion
// #endregion

// #region Internationalization
	/**
	 * @typedef LanguageKey
	 * A complete or partial key mapping to a translated string from the /i18n files.
	 * @type {string}
	 */

	/**
	 * @typedef CharaData
	 * A mapping of a given character's names.
	 * @property {string} long Full character name.
	 * @property {string} short Given name only or shortened title. If the character's name is already short, this is equivalent to `LONG`.
	 * @property {?string} speaker_label How the character's name typically appears in dialogue within the game, if different from `LONG`. Often equivalent to `SHORT`.
	 * @property {?string} unknown_label The speaker label used for the character before their actual name was known, if any.
	 */
// #endregion