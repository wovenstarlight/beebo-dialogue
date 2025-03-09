import { DEFAULT_DIALOGUE } from "../constants/blockDefaults";
import "../constants/documentation";

/** Returns the relative URL to a given portrait, completed with directory prefixes.
 * 
 * If the portrait happens to be an empty string, defaults to the portrait defined in the Dialogue block defaults.
 * @param {PortraitURL} portrait A partial URL to a portrait.
 * @returns The relative URL to the desired portrait.
 */
export default function getPortraitURL(portrait) {
	return `${import.meta.env.BASE_URL}/assets/portraits/`.concat(portrait.length ? portrait : DEFAULT_DIALOGUE.portrait);
}