/**
 * Splits a given list of blocks around the block with the given ID.
 * @param {Object[]} allBlocks The list of blocks to split apart.
 * @param {string} id The ID of the block to split the list around.
 * @returns An array containing: an array of the chosen block's predecessors, the chosen block itself, and an array of the chosen block's successors.
 */

export default function getNeighbors(allBlocks, id) {
	// Find the current block
	let index = allBlocks.findIndex(el => el.id === id);

	// Split up
	return [allBlocks.slice(0, index), allBlocks[index], allBlocks.slice(index + 1)];
}