import "../constants/documentation";
import deepFreeze from "../utils/deepFreeze";

const TRANSLATIONS = {
	// #region Application information
	site_header: {
		/** <h1>, the page title */
		title: "Detective Beebo dialogue builder",
		/** Upper subtitle; links to {@link https://bwobbers.itch.io/detective-beebo-night-at-the-mansion the game on itch.io} */
		subtitle: "Based on the game <hyperlink>Detective Beebo: Night at the Mansion</hyperlink> by Bwobbers",
		/** Lower subtitle; links to {@link https://kongkrog.github.io/isat-profile-customizer/beebo/beebo.html kongkrog's GH page} */
		gif_maker: "A static image version of <hyperlink>kongkrog's dialogue GIF maker</hyperlink>",
	},

	body: {
		/** Displays when no content blocks (dialogues, choices etc.) have been generated, e.g. on initial page load */
		startup: "Use the form below to get started!",
		/** Imager saver warning. Displays above the "Save as PNG" button */
		image_sizing: "Layout has been altered to fit your screen while you edit.<break />To preview the final image, view at full width!",
	},

	footer: {
		/** Creator credits; links to {@link https://github.com/wovenstarlight creator} and {@link https://github.com/wovenstarlight/beebo-dialogue repository} respectively */
		creation: "<hyperlinkCreator>Made by wovenstarlight</hyperlinkCreator> | <hyperllinkRepo>Source code on Github</hyperllinkRepo>",
		/** Font credits; links to {@link https://www.dafont.com/nokia-cellphone.font DaFont}. No link available for SqueezedPixels. */
		fonts: "Font credits: <hyperlinkNokia>Nokia Cellphone FC</hyperlinkNokia> and SqueezedPixels by Bwobbers",
	},
	// #endregion

	// #region Interactive content
	forms: {
		/** Add content blocks to the list */
		adder: {
			/** Overall form title; don't reference block types */
			title: "Add new element",
			/** Title for block type tab switcher */
			tabber_title: "Choose what you'd like to add:",
			/** Button text for Dialogue tab */
			dialogue: "Dialogue",
			/** Button text for Choices tab */
			choices: "Choices",
			/** Button text for Images tab */
			image: "Images",
			/** Empty option label in portrait dropdown */
			unset_portrait: "-- No portrait chosen --",
			/** Sample block text retrieved by the autofill buttons */
			samples: {
				/** The speech for each sample dialogue.
				 * 
				 * Palette/portraits are declared as constants, and speakers are retrieved from the latter part of this file. */
				dialogue: {
					oliver_cat: "The public deserves to see my cat!",
					oliver_wrong: "...Something feels... wrong.",
					oliver_right: "...Something feels...Right.",
					angel_intro: "Ángel, for any of your needs.",
					dominion_silent: "...",
					vivi_invincible: "Nothing can hurt me even if it tries, I have a natural aura that repels evil.",
					marigold_suspicion: "I don't think any of you were brought here for good reasons.",
					nina_idyllic: "You deserve to live an idyllic life!",
					nadia_upset: "This is worse than being stabbed.",
					simon_fatherless: "...Fatherless behaviour.",
					owen_freed: "You hath freed me from my endless imprisonment, I shall reward you with the highest honor.",
					eugene_cautious: "It's always good to be cautious, you know.",
					angel_beebin_time: "The best part of the time loop was when Beebo said \"IT'S BEEBIN' TIME\" and beebed all over that guy",
				},
				/** The options for each sample choice.
				 * 
				 * Palettes are declared as constants.
				 */
				choice: {
					/** Loop 1 conversation with Ángel */
					bar: {
						vivi: "What's your connection with Vivi?",
						coowner: "Who is the Co-owner?",
						others: "Do you know anyone else here?",
						men: "Are you into men",
					},
					/** Loop 2 conversation with Marigold */
					self: {
						fears: "About my fears",
						cases: "About my cases",
						career: "About my career",
					},
					/** Endgame */
					fight: {
						fight: "Fight",
					},
				}
			}
		},
		/** JSON editor */
		json: {
			/** Form title */
			title: "Mass-edit via JSON",
			/** Form explainer */
			subtitle: "Save/create multiple dialogue boxes at once!",
			/** Text area label */
			label: "JSON representation",
			/** Explanation for the Copy button; appears when hovering over the button */
			explain_copy: "Copy the above JSON to your clipboard",
			/** Explanation for the Download button; appears when hovering over the button */
			explain_download: "Download as a JSON file to your device",
			/** Explanation for the Upload button; appears when hovering over the button */
			explain_upload: "Upload a JSON file (this overwrites existing dialogue!)",
			/** Name of sample JSOn file that users should see upon downloading */
			sample: "sample-dialogue",
		},
		/** Edit menu */
		editor: {
			/** Title when editing a Dialogue block */
			title_dialogue: "Edit dialogue",
			/** Title when editing a Choice block */
			title_choice: "Edit choices",
			/** Title when editing an Image block */
			title_image: "Edit image",
		},
		/** Labels for form fields */
		fields: {
			/** Label for color palette */
			palette: "Palette",
			/** Label for character sprite in Dialogue blocks */
			portrait: "Portrait",
			/** Label for speaker in Dialogue blocks */
			speaker: "Speaker",
			/** Label for spoken text in Dialogue blocks */
			dialogue: "Dialogue",
			/** Label for individual option fields in Choice blocks
			 * @param {int} index The 1-based index of this option in the list
			 */
			option_number: "Option {{index}}",
			/** Label/alternative text for image preview */
			image_preview: "Image preview",
			/** Fallback alternative text for images */
			image: "Image",
			/** Explanatory message for the palette persistence toggle in AddForm */
			explain_reuse_palette: "When unchecked, palette will reset to purple after every submission",
			/** Explanatory message for the palette in Image blocks */
			explain_image_palette: "Determines the color of the image border",
			/** Portraits popup: Title */
			all_portraits: "All portraits",
			/** Portraits popup: "Click to select" explanatory message */
			explain_all_portraits: "Click a portrait to select it!",
		},
	},
	
	/** Action items (generally on buttons) */
	actions: {
		/** AddForm: Submit */
		add: "Add",
		/** Block edit form: Submit */
		update: "Update",
		/** AddForm: Clear fields */
		reset: "Reset form",
		/** Block edit form: Close form and revert changes */
		cancel: "Cancel",
		/** Portraits popup: Open dialog */
		open_portraits: "See all portraits",
		/** Portraits popup: Close dialog */
		close: "Close",
		/** Open edit menu for an existing block */
		edit: "Edit",
		/** Move up in the list of blocks or options */
		move_up: "Move up",
		/** Move down in the list of blocks or options */
		move_down: "Move down",
		/** Delete this block or option */
		delete: "Delete",
		/** Overall block menu: Delete all currently-generated blocks */
		delete_all: "Delete all",
		/** Overall block menu: Save all currently-generated blocks as an image */
		save_image: "Save as PNG",
		/** Overall block menu: Enable preview mode */
		enable_full_size: "View at full width",
		/** Overall block menu: Disable preview mode */
		disable_full_size: "Fit to screen",
		/** JSONForm: Copy JSON to clipboard */
		copy: "Copy",
		/** JSONForm: Download JSON as file */
		download: "Download",
		/** JSONForm: Upload JSON file */
		upload: "Upload",
		/** Autofill a dialogue/choice sample, or download a sample JSON file */
		autofill: "Need a reference?",
		/** AddForm/Choice block edit form: Add option to a choice block */
		add_option: "Add an option",
		/** AddForm/Choice block edit form: highlight option
		 * @param {int} index The 1-based index of this option in the list
		 */
		mark_selected: "<hidden>Mark option {{index}} as</hidden> Selected",
		/** Image block edit form: Image upload drag/drop message */
		drag_drop_image_single: "Drag and drop a replacement image here, or...",
		/** AddForm: Image upload drag/drop message */
		drag_drop_image_multiple: "Drag and drop image files here, or...",
		/** Add/Image block edit form: Image upload browse button */
		browse_files: "Browse files",
		/** Image block edit form: stretch image */
		stretch_image_single: "Stretch image",
		/** AddForm: stretch image
		 * @param {int} index The 1-based index of this option in the list
		 */
		stretch_image_multiple: "Stretch <hidden>image {{index}}</hidden>",
		/** AddForm: keep selected palette even after form submission */
		reuse_palette: "Reuse same palette for future elements",
	},

	/** Messages appearing in alerts/confirmation dialogs */
	alerts: {
		/** Confirm deletion of all content blocks */
		confirm_delete_all: "Really delete all currently-generated dialogue and choices?\n\nThis is irreversible!",
		/** Confirm copying of JSON */
		confirm_copied: "Copied!",
		/** Confirm downloading of JSON file */
		confirm_downloaded: "Downloaded!",
		/** Confirm uploading of JSON file */
		confirm_uploaded: "Uploaded!",
		/** Notify user of error while generating screenshot */
		error_image_conversion: "There was an error while trying to convert the image. Please let me know about the issue on Github!",
		/** AddForm/Edit form, images: Notify user of error when uploading a non-image file */
		error_image_filetype: "Wrong file type!\n\nYou must upload only image files.",
		/** JSONForm: Notify user of error when uploading a file of the wrong type */
		error_json_filetype: "Wrong file type!\n\nYou must upload a .json file.",
		/** JSONForm: Notify user of error in block formatting */
		error_json_format: "Wrong format!\n\nThe dialogue file should contain an array of objects, each of which only has a subset of the keys \"color\", \"portrait\", \"speaker\", \"dialogue\", \"options\" \"image\", and \"stretch\".\n\nMake sure you didn't leave any blank objects in the list!",
	},
	// #endregion

	/** Fallbacks for empty block parameters */
	defaults: {
		/** Dialogue block fallbacks */
		dialogue: {
			speaker: "Someone",
			dialogue: "Lorem ipsum dolor sit amet.",
		},
		/** Choice block fallbacks */
		choice: {
			/** Fallback label for empty options */
			text: "Lorem ipsum dolor sit amet",
		},
	},

	content: {
		/** Used to build variant labels for palettes and portrait groups. Includes colors and locations. */
		descriptors: {
			// Colors
			purple: "Purple",
			orange: "Orange",
			gray: "Gray",
			red: "Red",
			royal_blue: "Royal blue",
			violet: "Violet",
			pink: "Pink",
			green: "Green",
			cornflower_blue: "Cornflower blue",
			yellow: "Yellow",
			dark_gray: "Dark gray",
			sky_blue: "Sky blue",
			// Locations
			house_of_vera: "House of Vera",
			art_gallery: "Art gallery",
			city_police: "City/Police",
		},
		/** Color palette names; displayed in palette dropdown */
		palettes: {
			purple: "$t(content.descriptors.purple) ($t(content.descriptors.house_of_vera)/$t(content.characters.eugene.long))",
			orange: "$t(content.descriptors.orange) ($t(content.characters.oliver.long))",
			gray: "$t(content.descriptors.gray) ($t(content.characters.angel.long))",
			red: "$t(content.descriptors.red) ($t(content.characters.vivi.long))",
			royal_blue: "$t(content.descriptors.royal_blue) ($t(content.characters.marigold.long))",
			violet: "$t(content.descriptors.violet) ($t(content.characters.nina.long))",
			pink: "$t(content.descriptors.pink) ($t(content.characters.nadia.long))",
			green: "$t(content.descriptors.green) ($t(content.characters.simon.long))",
			cornflower_blue: "$t(content.descriptors.cornflower_blue) ($t(content.characters.owen.long))",
			yellow: "$t(content.descriptors.yellow) ($t(content.descriptors.art_gallery))",
			dark_gray: "$t(content.descriptors.dark_gray) ($t(content.descriptors.city_police))",
			sky_blue: "$t(content.descriptors.sky_blue) (True ending)",
			red_train: "$t(content.descriptors.red) (Overnight train)",
			red_yellow: "Red/yellow (Overnight train, unofficial)",
		},
		/** Character names; appear in the portrait dropdown and as suggestions for the speaker field.
		 * See {@link CharaData} for more information on the various keys.
		 * @type {object.<string, CharaData>}
		 */
		characters: {
			oliver: {
				long: "Oliver Beebo",
				short: "Beebo",
			},
			angel: {
				long: "Ángel Valdivia",
				short: "Ángel",
				unknown_label: "Scarf man",
				speaker_label: "$t(content.characters.angel.short)",
			},
			vivi: {
				long: "Vivi Villalobos",
				short: "Vivi",
				unknown_label: "Lady in red",
				speaker_label: "$t(content.characters.vivi.short)",
			},
			marigold: {
				long: "Marigold Margulis",
				short: "Marigold",
				unknown_label: "Blue Hair Lady",
			},
			nina: {
				long: "Nina Coli",
				short: "Nina",
				unknown_label: "Purple Hair Lady",
				speaker_label: "$t(content.characters.nina.short)",
			},
			nadia: {
				long: "Nadia Margulis",
				short: "Nadia",
				unknown_label: "Poncho Teen",
				speaker_label: "$t(content.characters.nadia.short)",
			},
			simon: {
				long: "Simon Margulis",
				short: "Simon",
				unknown_label: "Hoodie Teen",
				speaker_label: "$t(content.characters.simon.short)",
			},
			owen: {
				long: "Owen",
				short: "$t(content.characters.owen.long)",
				unknown_label: "Hat Teen",
			},
			eugene: {
				long: "Eugene Coli",
				short: "Eugene",
			},
			dominion: {
				long: "Dominion",
				short: "$t(content.characters.dominion.long)",
			},
			police_chief: {
				long: "Police Chief",
				short: "Chief",
			},
			// Template for officers
			police_officer: {
				long: "Police Officer {{num}}",
				short: "Officer",
				speaker_label: "Police Officer",
			},
			police_officer_1: {
				long: "$t(content.characters.police_officer.long, { \"num\": 1 })",
				short: "$t(content.characters.police_officer.short)",
				speaker_label: "$t(content.characters.police_officer.speaker_label)",
			},
			police_officer_2: {
				long: "$t(content.characters.police_officer.long, { \"num\": 2 })",
				short: "$t(content.characters.police_officer.short)",
				speaker_label: "$t(content.characters.police_officer.speaker_label)",
			},
			police_officer_3: {
				long: "$t(content.characters.police_officer.long, { \"num\": 3 })",
				short: "$t(content.characters.police_officer.short)",
				speaker_label: "$t(content.characters.police_officer.speaker_label)",
			},
			bartender: {
				long: "Bartender",
				short: "$t(content.characters.bartender.long)",
			},
			someone: {
				long: "Someone",
				short: "$t(content.characters.someone.long)",
			},
			worker: {
				long: "Worker",
				short: "$t(content.characters.worker.long)",
			},
			tutorial: {
				long: "Tutorial",
				short: "$t(content.characters.tutorial.long)",
			},
		},
		/** Portrait descriptions; displayed in portrait dropdown */
		portraits:{
			/** Format strings for an <optgroup> label */
			group_label: {
				/** For a character or group that has no variant palettes/other features.
				 * @example "Oliver Beebo"
				 */
				identifier: "{{identifier}}",
				/** For subgroups.
				 * @example "Oliver Beebo (House/Purple)"
				 * @example "Oliver Beebo (Orange)"
				 */
				identifier_variant: "{{identifier}} ({{variant}})",
			},
			/** Format strings for an <option> label */
			option_label: {
				/** Identifier with no alternative emotions or notable characteristics
				 * @example "Default silhouette"
				 */
				identifier: "{{identifier}}",
				/** Identifier with a specific emotion
				 * @example
				 * // { identifier: "Oliver Beebo", emotion: "Happy" }
				 * "Oliver Beebo > Happy"
				 */
				identifier_emotion: "{{identifier}} > {{emotion}}",
				/** Identifier with a notable characteristic
				 * @example
				 * // { identifier: "Oliver Beebo", variant: "no hat" }
				 * "Oliver Beebo (no hat)"
				 */
				identifier_variant: "{{identifier}} ({{variant}})",
				/** Identifier with a specific emotion and notable characteristic
				 * @example
				 * // { identifier: "Oliver Beebo", emotion: "Happy", variant: "no hat" }
				 * "Oliver Beebo > Happy (no hat)"
				 */
				identifier_emotion_variant: "{{identifier}} > {{emotion}} ({{variant}})",
				/** A specific emotion with no identifier
				 * @example
				 * // { emotion: "Happy" }
				 * "Happy"
				 */
				emotion: "{{emotion}}",
				/** A notable characteristic with no identifier
				 * @example
				 * // { variant: "no hat" }
				 * "no hat"
				 */
				variant: "{{variant}}",
				/** A specific emotion and notable characteristic with no identifier
				 * @example
				 * // { emotion: "Happy", variant: "no hat" }
				 * "Happy (no hat)"
				 */
				emotion_variant: "{{emotion}} ({{variant}})",
			},
			/** Variant names for portrait groups. */
			group_variants: {
				purple: "$t(content.descriptors.house_of_vera)/$t(content.descriptors.purple)",
				orange: "Present/$t(content.descriptors.orange)",
				gallery_yellow: "Gallery era/$t(content.descriptors.yellow)",
				gallery_orange: "Gallery era/$t(content.descriptors.orange)",
				young: "Young",
				gray: "$t(content.descriptors.gray)",
				red: "$t(content.descriptors.red)",
				royal_blue: "$t(content.descriptors.royal_blue)",
				violet: "$t(content.descriptors.violet)",
				pink: "$t(content.descriptors.pink)",
				green: "$t(content.descriptors.green)",
				cornflower_blue: "$t(content.descriptors.cornflower_blue)",
				city_gray: "$t(content.descriptors.city_police)",
				other: "Other",
			},
			/** Emotional descriptors used by all portraits.
			 * 
			 * Generally drawn from the original filenames and expounded upon slightly; some similar names have been merged.
			 */
			emotions: {
				angry: "Angry",
				annoyed: "Annoyed",
				aw: "Aw",
				bleeding: "Bleeding",
				brow_raised: "Brow raised",
				confused: "Confused",
				cringe: "Cringe",
				crying: "Crying",
				down: "Down",
				eager: "Eager",
				embarrassed: "Embarrassed",
				excited: "Excited",
				glad: "Glad",
				haha: "Haha",
				happy: "Happy",
				happy_bleeding: "Happy & bleeding",
				hehe: "Hehe",
				hmph: "Hmph",
				judgy: "Judgy",
				mild_surprise: "Mildly surprised",
				mischievous: "Mischievous",
				neutral: "Neutral",
				nostalgic: "Nostalgic",
				nostalgic_speaking: "Nostalgically speaking",
				odd: "Odd",
				pouting: "Pouting",
				questioning: "Questioning",
				red: "Red",
				sad: "Sad",
				sad_smile: "Sadly smiling",
				sad_speaking: "Sadly speaking",
				sad_side: "Sadly looking to side",
				scared: "Scared",
				scarf: "Scarf",
				side: "Looking to side",
				side_odd: "Looking to side, odd",
				side_2: "Looking to side 2",
				shadow: "Shadow",
				silhouette: "Silhouette",
				silly_angry: "Silly-angry",
				smiling: "Smiling",
				smiling_speaking: "Smiling & speaking",
				smug: "Smug",
				speaking: "Speaking",
				surprised: "Surprised",
				sweet: "Sweet",
				thinking: "Thinking",
				thinking_strong: "Thinking deeply",
				tired: "Tired",
				uneasy: "Uneasy",
				angry_strong: "Very angry",
				worried_strong: "Very worried",
				worried: "Worried",
			},
			/** Unique characteristics of individual sprites. */
			variants: {
				/** For Beebo */
				hatless: "no hat",
				/** For Ángel */
				hat: "with hat",
				/** For Tutorial */
				blank_square: "blank square",
			},
		},
	},
};

deepFreeze(TRANSLATIONS);

export default TRANSLATIONS;