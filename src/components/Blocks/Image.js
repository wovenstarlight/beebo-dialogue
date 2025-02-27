import { DEFAULT_IMAGE } from "../../constants/blockDefaults";
import "../../constants/documentation";
import "../../styles/Image.css";

/**
 * An image block.
 * @param {object} args
 * @param {string} args.image The data URL representing this image.
 * @param {boolean} args.stretch `true` if this image should be stretched to fill the available space; `false` or `undefined` if it should be displayed at its real size.
 * @returns A rendered image.
 */
export default function Image({ image, stretch }) {
	return <img src={image.length ? image : DEFAULT_IMAGE.image} className={stretch ? "stretch" : undefined} />;
}