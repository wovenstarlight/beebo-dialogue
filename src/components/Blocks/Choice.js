import { useTranslation } from "react-i18next";
import { DEFAULT_CHOICE } from "../../constants/blockDefaults";
import "../../styles/Choice.css";

export default function Choice({ id, options }) {
	const { t } = useTranslation();

	return <>
		{options.map((opt, index) => (
			<p
				key={`${id}_${index}`}
				id={`${id}_${index}`}
				className={opt.selected ? "selected" : undefined}
			>
				{opt.text ?? t(DEFAULT_CHOICE.text)}
			</p>
		))}
	</>;
}