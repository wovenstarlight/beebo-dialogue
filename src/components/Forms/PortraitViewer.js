import { memo } from "react";
import { useTranslation } from "react-i18next";
import ALL_PORTRAITS from "../../constants/portraits";
import { isSubsetOf } from "../../utils/arrayUtils";
import getPortraitURL from "../../utils/getPortraitURL";

/**
 * A dialog showing all available portraits.
 * @returns A <dialog> element listing every portrait in `constants/portraits.js`.
 */
export default memo(function PortraitViewer() {
	const { t } = useTranslation();

	return <dialog id="allportraits" className="menu">
		<button
			id="closeportraits"
			className="blockbtn deletebtn"
			onClick={() => document.getElementById("allportraits").close()}
		>{t("actions.close")}</button>

		<h2>{t("forms.fields.all_portraits")}</h2>

		{ALL_PORTRAITS.map(group => {
			// Create group label from the provided label object
			let label, keys = Object.keys(group.label);
			if (isSubsetOf(["identifier", "variant"], keys)) {
				label = t("content.portraits.group_label.identifier_variant", {
					identifier: t(group.label.identifier),
					variant: t(group.label.variant),
				});
			}
			else if (isSubsetOf(["identifier"], keys)) {
				label = t("content.portraits.group_label.identifier", {
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
						label = t("content.portraits.option_label.identifier_emotion_variant", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
							emotion: t(sprite[1].emotion, { context: sprite[1].gender ?? group.label.gender }),
							variant: t(sprite[1].variant),
						});
					}
					else if (isSubsetOf(["identifier", "emotion"], spriteKeys)) {
						label = t("content.portraits.option_label.identifier_emotion", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
							emotion: t(sprite[1].emotion, { context: sprite[1].gender ?? group.label.gender }),
						});
					}
					else if (isSubsetOf(["identifier", "variant"], spriteKeys)) {
						label = t("content.portraits.option_label.identifier_variant", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
							variant: t(sprite[1].variant),
						});
					}
					else if (isSubsetOf(["identifier"], spriteKeys)) {
						label = t("content.portraits.option_label.identifier", {
							identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
						});
					}
					// Or, if no identifier
					else if (isSubsetOf(["emotion", "variant"], spriteKeys)) {
						label = t("content.portraits.option_label.emotion_variant", {
							emotion: t(sprite[1].emotion, { context: sprite[1].gender ?? group.label.gender }),
							variant: t(sprite[1].variant),
						});
					}
					else if (isSubsetOf(["emotion"], spriteKeys)) {
						label = t("content.portraits.option_label.emotion", {
							emotion: t(sprite[1].emotion, { context: sprite[1].gender ?? group.label.gender }),
						});
					}
					else if (isSubsetOf(["variant"], spriteKeys)) {
						label = t("content.portraits.option_label.variant", {
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
});