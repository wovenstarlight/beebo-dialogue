// #region Blocks
	// Block types
	/**
	 * @typedef BlockType
	 * A string representing a given content block's type.
	 * @type {"dialogue"|"choice"}
	 */

	// #region Block data
		/**
		 * @typedef DataDialogue
		 * Data representing a box of dialogue.
		 * @type {object}
		 * @property {string} color The color palette for this block.
		 * @property {string} portrait A partial URL to the speaker's character sprite.
		 * @property {string|LanguageKey} speaker The speaker of the dialogue.
		 * @property {string|LanguageKey} dialogue The text being spoken.
		 */
		/**
		 * @typedef DataChoice
		 * Data representing a multiple choice menu.
		 * @type {object}
		 * @property {string} color The color palette for this block.
		 * @property {DataChoiceOption[]} options The individual options making up the menu.
		 */
		/**
		 * @typedef DataChoiceOption
		 * Data representing a single option from a multiple choice menu.
		 * @type {object}
		 * @property {?string} color The color palette for this option. Inherited from the parent menu if not provided.
		 * @property {string|LanguageKey} text The text label displayed for this option.
		 * @property {?boolean} selected `true` if this option should be highlighted as though being clicked; `false`/`null` otherwise.
		 */
	// #endregion
// #endregion

// #region Internationalization
	/**
	 * @typedef LanguageKey
	 * A key mapping to a translated string from the /i18n files.
	 * @type {string}
	 */
// #endregion