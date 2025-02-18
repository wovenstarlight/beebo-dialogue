import "./documentation";
import deepFreeze from "../utils/deepFreeze";

/**
 * A list of all characters whose names are to be suggested in the speaker dropdown.
 * @type {LanguageKey[]}
 */
const ALL_CHARACTERS = [
	"OLIVER",
	"ANGEL",
	"VIVI",
	"MARIGOLD",
	"NINA",
	"NADIA",
	"SIMON",
	"OWEN",
	"EUGENE",
	"DOMINION",
	"POLICE_CHIEF",
	"POLICE_OFFICER_1",
	"POLICE_OFFICER_2",
	"POLICE_OFFICER_3",
	"BARTENDER",
	"SOMEONE",
	"WORKER",
	"TUTORIAL",
];

deepFreeze(ALL_CHARACTERS);

export default ALL_CHARACTERS;