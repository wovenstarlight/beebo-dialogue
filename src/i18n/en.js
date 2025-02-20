import "../constants/documentation";
import deepFreeze from "../utils/deepFreeze";

const MESSAGES = {
	// #region Application information
	SITE_HEADER: {
		/** <h1>, the page title */
		TITLE: "Detective Beebo dialogue builder",
		/** Upper subtitle; links to {@link https://bwobbers.itch.io/detective-beebo-night-at-the-mansion the game on itch.io} */
		SUBTITLE: "Based on the game <hyperlink>Detective Beebo: Night at the Mansion</hyperlink> by Bwobbers",
		/** Lower subtitle; links to {@link https://kongkrog.github.io/isat-profile-customizer/beebo/beebo.html kongkrog's GH page} */
		GIF_MAKER: "A static image version of <hyperlink>kongkrog's dialogue GIF maker</hyperlink>",
	},

	BODY: {
		/** Displays when no content blocks (dialogues, choices etc.) have been generated, e.g. on initial page load */
		STARTUP: "Use the form below to get started!",
	},

	FOOTER: {
		/** Creator credits; links to {@link https://github.com/wovenstarlight creator} and {@link https://github.com/wovenstarlight/beebo-dialogue repository} respectively */
		CREATION: "<hyperlinkCreator>Made by wovenstarlight</hyperlinkCreator> | <hyperllinkRepo>Source code on Github</hyperllinkRepo>",
		/** Font credits; links to {@link https://www.dafont.com/nokia-cellphone.font DaFont}. No link available for SqueezedPixels. */
		FONTS: "Font credits: <hyperlinkNokia>Nokia Cellphone FC</hyperlinkNokia> and SqueezedPixels by Bwobbers",
	},
	// #endregion

	// #region Interactive content
	FORMS: {
		/** Add content blocks to the list */
		ADDER: {
			/** Overall form title; don't reference block types */
			TITLE: "Add new element",
			/** Title for block type tab switcher */
			TABBER_TITLE: "Choose what you'd like to add:",
			/** Button text for Dialogue tab */
			DIALOGUE: "Dialogue",
			/** Button text for Choices tab */
			CHOICES: "Choices",
			/** Empty option label in portrait dropdown */
			UNSET_PORTRAIT: "-- No portrait chosen --",
			/** Sample block text retrieved by the autofill buttons */
			SAMPLES: {
				/** The speech for each sample dialogue.
				 * 
				 * Palette/portraits are declared as constants, and speakers are retrieved from the latter part of this file. */
				DIALOGUE: {
					OLIVER_CAT: "The public deserves to see my cat!",
					OLIVER_WRONG: "...Something feels... wrong.",
					OLIVER_RIGHT: "...Something feels...Right.",
					ANGEL_INTRO: "Ángel, for any of your needs.",
					DOMINION_SILENT: "...",
					VIVI_INVINCIBLE: "Nothing can hurt me even if it tries, I have a natural aura that repels evil.",
					MARIGOLD_SUSPICION: "I don't think any of you were brought here for good reasons.",
					NINA_IDYLLIC: "You deserve to live an idyllic life!",
					NADIA_UPSET: "This is worse than being stabbed.",
					SIMON_FATHERLESS: "...Fatherless behaviour.",
					OWEN_FREED: "You hath freed me from my endless imprisonment, I shall reward you with the highest honor.",
					EUGENE_CAUTIOUS: "It's always good to be cautious, you know.",
					ANGEL_BEEBIN_TIME: "The best part of the time loop was when Beebo said \"IT'S BEEBIN' TIME\" and beebed all over that guy",
				},
				/** The options for each sample choice.
				 * 
				 * Palettes are declared as constants.
				 */
				CHOICE: {
					/** Loop 1 conversation with Ángel */
					BAR: {
						VIVI: "What's your connection with Vivi?",
						COOWNER: "Who is the Co-owner?",
						OTHERS: "Do you know anyone else here?",
						MEN: "Are you into men",
					},
					/** Loop 2 conversation with Marigold */
					SELF: {
						FEARS: "About my fears",
						CASES: "About my cases",
						CAREER: "About my career",
					},
					/** Endgame */
					FIGHT: {
						FIGHT: "Fight",
					},
				}
			}
		},
		/** JSON editor */
		JSON: {
			/** Form title */
			TITLE: "Mass-edit via JSON",
			/** Form explainer */
			SUBTITLE: "Save/create multiple dialogue boxes at once!",
			/** Explanation for the Copy button; appears when hovering over the button */
			EXPLAIN_COPY: "Copy the above JSON to your clipboard",
			/** Explanation for the Download button; appears when hovering over the button */
			EXPLAIN_DOWNLOAD: "Download as a JSON file to your device",
			/** Explanation for the Upload button; appears when hovering over the button */
			EXPLAIN_UPLOAD: "Upload a JSON file (this overwrites existing dialogue!)",
			/** Name of sample JSOn file that users should see upon downloading */
			SAMPLE: "sample-dialogue",
		},
		/** Edit menu */
		EDITOR: {
			/** Title when editing a Dialogue block */
			TITLE_DIALOGUE: "Edit dialogue",
			/** Title when editing a Choice block */
			TITLE_CHOICE: "Edit choices",
		},
		/** Labels for form fields */
		FIELDS: {
			/** Label for color palette */
			PALETTE: "Palette",
			/** Label for character sprite in Dialogue blocks */
			PORTRAIT: "Portrait",
			/** Label for speaker in Dialogue blocks */
			SPEAKER: "Speaker",
			/** Label for spoken text in Dialogue blocks */
			DIALOGUE: "Dialogue",
			/** Label for individual option fields in Choice blocks
			 * @param {int} index The 1-based index of this option in the list
			 */
			OPTION_NUMBER: "Option {{index}}",
			/** Explanatory message for the palette persistence toggle in AddForm */
			EXPLAIN_REUSE_PALETTE: "When off, palette will reset to purple after every submission",
			/** Portraits popup: Title */
			ALL_PORTRAITS: "All portraits",
		},
	},
	
	/** Action items (generally on buttons) */
	ACTIONS: {
		/** AddForm: Submit */
		ADD: "Add",
		/** Block edit form: Submit */
		UPDATE: "Update",
		/** AddForm: Clear fields */
		RESET: "Reset form",
		/** Block edit form: Close form and revert changes */
		CANCEL: "Cancel",
		/** Portraits popup: Open dialog */
		OPEN_PORTRAITS: "See all portraits",
		/** Portraits popup: Close dialog */
		CLOSE: "Close",
		/** Open edit menu for an existing block */
		EDIT: "Edit",
		/** Move up in the list of blocks or options */
		MOVE_UP: "Move up",
		/** Move down in the list of blocks or options */
		MOVE_DOWN: "Move down",
		/** Delete this block or option */
		DELETE: "Delete",
		/** Overall block menu: Delete all currently-generated blocks */
		DELETE_ALL: "Delete all",
		/** Overall block menu: Save all currently-generated blocks as an image */
		SAVE_IMAGE: "Save as PNG",
		/** JSONForm: Copy JSON to clipboard */
		COPY: "Copy",
		/** JSONForm: Download JSON as file */
		DOWNLOAD: "Download",
		/** JSONForm: Upload JSON file */
		UPLOAD: "Upload",
		/** Autofill a dialogue/choice sample, or download a sample JSON file */
		AUTOFILL: "Need a reference?",
		/** AddForm/Choice block edit form: Add option to a choice block */
		ADD_OPTION: "Add an option",
		/** AddForm/Choice block edit form: highlight option
		 * @param {int} index The 1-based index of this option in the list
		 */
		MARK_SELECTED: "<hidden>Mark option {{index}} as</hidden> Selected",
		/** AddForm: keep selected palette even after form submission */
		REUSE_PALETTE: "Reuse same palette for future elements",
	},

	/** Messages appearing in alerts/confirmation dialogs */
	ALERTS: {
		/** Confirm deletion of all content blocks */
		CONFIRM_DELETE_ALL: "Really delete all currently-generated dialogue and choices?\n\nThis is irreversible!",
		/** Confirm copying of JSON */
		CONFIRM_COPIED: "Copied!",
		/** Confirm downloading of JSON file */
		CONFIRM_DOWNLOADED: "Downloaded!",
		/** Confirm uploading of JSON file */
		CONFIRM_UPLOADED: "Uploaded!",
		/** Notify user of error while generating screenshot */
		ERROR_IMAGE_CONVERSION: "There was an error while trying to convert the image. Please let me know about the issue on Github!",
		/** JSONForm: Notify user of error when uploading a file of the wrong type */
		ERROR_JSON_FILETYPE: "Wrong file type!\n\nYou must upload a .json file.",
		/** JSONForm: Notify user of error in block formatting */
		ERROR_JSON_FORMAT: "Wrong format!\n\nThe dialogue file should contain an array of objects, each of which only has a subset of the keys \"color\", \"portrait\", \"speaker\", \"dialogue\", and \"options\".\n\nMake sure you didn't leave any blank objects in the list!",
	},
	// #endregion

	/** Fallbacks for empty block parameters */
	DEFAULTS: {
		/** Dialogue block fallbacks */
		DIALOGUE: {
			SPEAKER: "Someone",
			DIALOGUE: "Lorem ipsum dolor sit amet.",
		},
		/** Choice block fallbacks */
		CHOICE: {
			/** Fallback label for empty options */
			TEXT: "Lorem ipsum dolor sit amet",
		},
	},

	CONTENT: {
		/** Color palette names; displayed in palette dropdown */
		COLORS: {
			PURPLE: "Purple (House of Vera/Eugene Coli)",
			ORANGE: "Orange (Oliver Beebo)",
			GRAY: "Gray (Ángel Valdivia)",
			RED: "Red (Vivi Villalobos)",
			ROYAL_BLUE: "Royal blue (Marigold Margulis)",
			VIOLET: "Violet (Nina Coli)",
			PINK: "Pink (Nadia Margulis)",
			GREEN: "Green (Simon Margulis)",
			CORNFLOWER_BLUE: "Cornflower blue (Owen)",
			YELLOW: "Yellow (Art gallery)",
			DARK_GRAY: "Dark gray (City/Police)",
			SKY_BLUE: "Sky blue (True ending)",
		},
		/** Character names; appear in the portrait dropdown and as suggestions for the speaker field.
		 * See {@link CharaData} for more information on the various keys.
		 * @type {object.<string, CharaData>}
		 */
		CHARACTERS: {
			OLIVER: {
				LONG: "Oliver Beebo",
				SHORT: "Oliver",
			},
			ANGEL: {
				SPEAKER_LABEL: "Ángel",
				UNKNOWN_LABEL: "Scarf man",
				LONG: "Ángel Valdivia",
				SHORT: "Ángel",
			},
			VIVI: {
				SPEAKER_LABEL: "Vivi",
				UNKNOWN_LABEL: "Lady in red",
				LONG: "Vivi Villalobos",
				SHORT: "Vivi",
			},
			MARIGOLD: {
				UNKNOWN_LABEL: "Blue Hair Lady",
				LONG: "Marigold Margulis",
				SHORT: "Marigold",
			},
			NINA: {
				SPEAKER_LABEL: "Nina",
				UNKNOWN_LABEL: "Purple Hair Lady",
				LONG: "Nina Coli",
				SHORT: "Nina",
			},
			NADIA: {
				SPEAKER_LABEL: "Nadia",
				UNKNOWN_LABEL: "Poncho Teen",
				LONG: "Nadia Margulis",
				SHORT: "Nadia",
			},
			SIMON: {
				SPEAKER_LABEL: "Simon",
				UNKNOWN_LABEL: "Hoodie Teen",
				LONG: "Simon Margulis",
				SHORT: "Simon",
			},
			OWEN: {
				LONG: "Owen",
				SHORT: "Owen",
			},
			EUGENE: {
				LONG: "Eugene Coli",
				SHORT: "Eugene",
			},
			DOMINION: {
				LONG: "Dominion",
				SHORT: "Dominion",
			},
			POLICE_CHIEF: {
				LONG: "Police Chief",
				SHORT: "Chief",
			},
			POLICE_OFFICER_1: {
				SPEAKER_LABEL: "Police Officer",
				LONG: "Police Officer 1",
				SHORT: "Officer",
			},
			POLICE_OFFICER_2: {
				SPEAKER_LABEL: "Police Officer",
				LONG: "Police Officer 2",
				SHORT: "Officer",
			},
			POLICE_OFFICER_3: {
				SPEAKER_LABEL: "Police Officer",
				LONG: "Police Officer 3",
				SHORT: "Officer",
			},
			BARTENDER: {
				LONG: "Bartender",
				SHORT: "Bartender",
			},
			SOMEONE: {
				LONG: "Someone",
				SHORT: "Someone",
			},
			WORKER: {
				LONG: "Worker",
				SHORT: "Worker",
			},
			TUTORIAL: {
				LONG: "Tutorial",
				SHORT: "Tutorial",
			},
		},
		/** Portrait descriptions; displayed in portrait dropdown */
		PORTRAITS:{
			/** Format strings for an <optgroup> label */
			GROUP_LABEL: {
				/** For a character or group that has no variant palettes/other features.
				 * @example "Oliver Beebo"
				 */
				IDENTIFIER: "{{identifier}}",
				/** For subgroups.
				 * @example "Oliver Beebo (House/Purple)"
				 * @example "Oliver Beebo (Orange)"
				 */
				IDENTIFIER_VARIANT: "{{identifier}} ({{variant}})",
			},
			/** Format strings for an <option> label */
			OPTION_LABEL: {
				/** Identifier with no alternative emotions or notable characteristics
				 * @example "Default silhouette"
				 */
				IDENTIFIER: "{{identifier}}",
				/** Identifier with a specific emotion
				 * @example
				 * // { identifier: "Oliver Beebo", emotion: "Happy" }
				 * "Oliver Beebo > Happy"
				 */
				IDENTIFIER_EMOTION: "{{identifier}} > {{emotion}}",
				/** Identifier with a notable characteristic
				 * @example
				 * // { identifier: "Oliver Beebo", variant: "no hat" }
				 * "Oliver Beebo (no hat)"
				 */
				IDENTIFIER_VARIANT: "{{identifier}} ({{variant}})",
				/** Identifier with a specific emotion and notable characteristic
				 * @example
				 * // { identifier: "Oliver Beebo", emotion: "Happy", variant: "no hat" }
				 * "Oliver Beebo > Happy (no hat)"
				 */
				IDENTIFIER_EMOTION_VARIANT: "{{identifier}} > {{emotion}} ({{variant}})",
				/** A specific emotion with no identifier
				 * @example
				 * // { emotion: "Happy" }
				 * "Happy"
				 */
				EMOTION: "{{emotion}}",
				/** A notable characteristic with no identifier
				 * @example
				 * // { variant: "no hat" }
				 * "no hat"
				 */
				VARIANT: "{{variant}}",
				/** A specific emotion and notable characteristic with no identifier
				 * @example
				 * // { emotion: "Happy", variant: "no hat" }
				 * "Happy (no hat)"
				 */
				EMOTION_VARIANT: "{{emotion}} ({{variant}})",
			},
			/** Variant names for portrait groups. Some correspond to {@link MESSAGES.CONTENT.COLORS}. */
			GROUP_VARIANTS: {
				PURPLE: "House of Vera/Purple",
				ORANGE: "Present/Orange",
				GALLERY_YELLOW: "Gallery era/Yellow",
				GALLERY_ORANGE: "Gallery era/Orange",
				YOUNG: "Young",
				GRAY: "Gray",
				RED: "Red",
				ROYAL_BLUE: "Royal blue",
				VIOLET: "Violet",
				PINK: "Pink",
				GREEN: "Green",
				CORNFLOWER_BLUE: "Cornflower blue",
				CITY_GRAY: "City/Police",
				OTHER: "Other",
			},
			/** Emotional descriptors used by all portraits.
			 * 
			 * Generally drawn from the original filenames and expounded upon slightly; some similar names have been merged.
			 */
			EMOTIONS: {
				ANGRY: "Angry",
				ANNOYED: "Annoyed",
				AW: "Aw",
				BLEEDING: "Bleeding",
				BROW_RAISED: "Brow raised",
				CONFUSED: "Confused",
				CRINGE: "Cringe",
				CRYING: "Crying",
				DOWN: "Down",
				EAGER: "Eager",
				EMBARRASSED: "Embarrassed",
				EXCITED: "Excited",
				GLAD: "Glad",
				HAHA: "Haha",
				HAPPY: "Happy",
				HAPPY_BLEEDING: "Happy & bleeding",
				HEHE: "Hehe",
				HMPH: "Hmph",
				JUDGY: "Judgy",
				MILD_SURPRISE: "Mildly surprised",
				MISCHIEVOUS: "Mischievous",
				NEUTRAL: "Neutral",
				NOSTALGIC: "Nostalgic",
				NOSTALGIC_SPEAKING: "Nostalgically speaking",
				ODD: "Odd",
				POUTING: "Pouting",
				QUESTIONING: "Questioning",
				RED: "Red",
				SAD: "Sad",
				SAD_SMILE: "Sadly smiling",
				SAD_SPEAKING: "Sadly speaking",
				SAD_SIDE: "Sadly looking to side",
				SCARED: "Scared",
				SCARF: "Scarf",
				SIDE: "Looking to side",
				SIDE_ODD: "Looking to side, odd",
				SIDE_2: "Looking to side 2",
				SHADOW: "Shadow",
				SILHOUETTE: "Silhouette",
				SILLY_ANGRY: "Silly-angry",
				SMILING: "Smiling",
				SMILING_SPEAKING: "Smiling, talking",
				SMUG: "Smug",
				SPEAKING: "Speaking",
				SURPRISED: "Surprised",
				SWEET: "Sweet",
				THINKING: "Thinking",
				THINKING_STRONG: "Thinking deeply",
				TIRED: "Tired",
				UNEASY: "Uneasy",
				ANGRY_STRONG: "Very angry",
				WORRIED_STRONG: "Very worried",
				WORRIED: "Worried",
			},
			/** Unique characteristics of individual sprites. */
			VARIANTS: {
				/** For Oliver Beebo */
				HATLESS: "no hat",
				/** For Ángel */
				HAT: "with hat",
				/** For Tutorial */
				BLANK_SQUARE: "blank square",
			},
		},
	},
};

deepFreeze(MESSAGES);

export default MESSAGES;