import { useTranslation } from "react-i18next";
import { DEFAULT_CHOICE_OPTION } from "../../constants/blockDefaults";
import "../../constants/documentation";
import "../../styles/Choice.css";

/**
 * The contents of a multiple choice menu.
 * @param {object} args
 * @param {string} args.id The ID of this block.
 * @param {DataChoiceOption[]} args.options A list of data objects for individual menu options.
 * @returns A list of rendered options.
 */
export default function Choice({ id, options }) {
	const { t } = useTranslation();

	return <>
		{options.map((opt, index) => (
			<p
				key={`${id}_${index}`}
				id={`${id}_${index}`}
				className={opt.selected ? "selected" : undefined}
			>
				{opt.text ?? t(DEFAULT_CHOICE_OPTION.text)}
			</p>
		))}
	</>;
}