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

/** Checks that one array is a subset of a second, i.e. that all elements of the first array are contained in the second.
 * @param {Array} a1 The potential subset.
 * @param {Array} a2 The array of which `a1` might be a subset.
 * @returns `true` if `a1` is a subset of `a2`; `false` otherwise.
 */
export function isSubsetOf(a1, a2) {
	return a1.every(el => a2.includes(el));
}