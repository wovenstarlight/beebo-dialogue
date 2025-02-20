import { useTranslation } from "react-i18next";
import ALL_PORTRAITS from "../../constants/portraits";
import { isSubsetOf } from "../../utils/arrayUtils";
import getPortraitURL from "../../utils/getPortraitURL";

/**
 * A dialog showing all available portraits.
 * @returns A <dialog> element listing every portrait in `constants/portraits.js`.
 */
export default function PortraitViewer() {
	const { t } = useTranslation();

	return <dialog id="allportraits" className="menu">
		<button
			id="closeportraits"
			className="blockbtn deletebtn"
			onClick={() => document.getElementById("allportraits").close()}
		>{t("ACTIONS.CLOSE")}</button>

		<h2>{t("FORMS.FIELDS.ALL_PORTRAITS")}</h2>

		{ALL_PORTRAITS.map(group => {
			// Create group label from the provided label object
			let label, keys = Object.keys(group.label);
			if (isSubsetOf(["identifier", "variant"], keys)) {
				label = t("CONTENT.PORTRAITS.GROUP_LABEL.IDENTIFIER_VARIANT", {
					identifier: t(group.label.identifier),
					variant: t(group.label.variant),
				});
			}
			else if (isSubsetOf(["identifier"], keys)) {
				label = t("CONTENT.PORTRAITS.GROUP_LABEL.IDENTIFIER", {
					identifier: t(group.label.identifier),
				});
			}

			// And drop that into an optgroup
			return <details className="portraitgroup" key={label} open>
				<summary>{label}</summary>

				<ul className="portraitlist">
				{Object.entries(group.options).map(sprite => {
					// Create option label from the provided label object
					let label, spriteKeys = Object.keys(sprite[1]);
					if (isSubsetOf(["identifier", "emotion", "variant"], spriteKeys)) {
						label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER_EMOTION_VARIANT", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
							emotion: t(sprite[1].emotion),
							variant: t(sprite[1].variant),
						});
					}
					else if (isSubsetOf(["identifier", "emotion"], spriteKeys)) {
						label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER_EMOTION", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
							emotion: t(sprite[1].emotion),
						});
					}
					else if (isSubsetOf(["identifier", "variant"], spriteKeys)) {
						label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER_VARIANT", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
							variant: t(sprite[1].variant),
						});
					}
					else if (isSubsetOf(["identifier"], spriteKeys)) {
						label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
						});
					}
					// Or, if no identifier
					else if (isSubsetOf(["emotion", "variant"], spriteKeys)) {
						label = t("CONTENT.PORTRAITS.OPTION_LABEL.EMOTION_VARIANT", {
							emotion: t(sprite[1].emotion),
							variant: t(sprite[1].variant),
						});
					}
					else if (isSubsetOf(["emotion"], spriteKeys)) {
						label = t("CONTENT.PORTRAITS.OPTION_LABEL.EMOTION", {
							emotion: t(sprite[1].emotion),
						});
					}
					else if (isSubsetOf(["variant"], spriteKeys)) {
						label = t("CONTENT.PORTRAITS.OPTION_LABEL.VARIANT", {
							variant: t(sprite[1].variant),
						});
					}

					// And drop that into an option
					return <li key={sprite[0]} className="portraitdata" data-id={sprite[0]}>
						<img src={getPortraitURL(sprite[0])} alt={label} className="portrait" />
						<span className="portraitname">{label}</span>
					</li>
				})}
				</ul>
			</details>;
		})}
	</dialog>;
}