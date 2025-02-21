import "./documentation";
import deepFreeze from "../utils/deepFreeze";

/**
 * A list of all characters whose names are to be suggested in the speaker dropdown.
 * @type {LanguageKey[]}
 */
const ALL_CHARACTERS = [
	"oliver",
	"angel",
	"vivi",
	"marigold",
	"nina",
	"nadia",
	"simon",
	"owen",
	"eugene",
	"dominion",
	"police_chief",
	"police_officer_1",
	"police_officer_2",
	"police_officer_3",
	"bartender",
	"someone",
	"worker",
	"tutorial",
];

deepFreeze(ALL_CHARACTERS);

export default ALL_CHARACTERS;