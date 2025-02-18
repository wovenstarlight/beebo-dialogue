/**
 * Splits a given list of blocks around the block with the given ID.
 * @param {Object[]} allBlocks The list of blocks to split apart.
 * @param {string} id The ID of the block to split the list around.
 * @returns An array containing: an array of the chosen block's predecessors, the chosen block itself, and an array of the chosen block's successors.
 */
export function splitAround(allBlocks, id) {
	// Find the current block
	let index = allBlocks.findIndex(el => el.id === id);

	// Split up
	return [allBlocks.slice(0, index), allBlocks[index], allBlocks.slice(index + 1)];
}

/** Checks that two arrays contain the same elements.
 * @param {Array} a1 The first of two arrays to be compared.
 * @param {Array} a2 The second of two arrays to be compared.
 * @returns `true` if both arrays are equal; `false` otherwise.
 */
export function arrayEquals(a1, a2) {
	return a1.toSorted().toString() === a2.toSorted().toString();
}