import { CHOICE, DIALOGUE, IMAGE } from "../constants/blockNames";

/**
 * Detects the intended component type of a given data object.
 * 
 * Types are determined in the following priority order:
 * - `image`
 * - `choice`
 * - `dialogue`
 * @param {object} block The data object whose type to detect
 * @returns The type of the data object
 */
export default function getBlockType(block) {
	return (
		"image" in block ? IMAGE
		: "options" in block ? CHOICE
		: DIALOGUE
	);
}