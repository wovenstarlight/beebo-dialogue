import { memo } from "react";
import { useTranslation } from "react-i18next";
import ALL_PORTRAITS from "../../../constants/portraits";
import { isSubsetOf } from "../../../utils/arrayUtils";

/**
 * A dropdown menu for selecting a character sprite.
 * @param {object} args 
 * @param {string} args.portrait The value of this form field; a partial URL to a character sprite.
 * @param {function} args.setPortrait The setter for the value of this form field.
 * @returns A <select> element with options for portraits.
 */
function PortraitSelector({ portrait, setPortrait }) {
	const { t } = useTranslation();

	return (
		<select
			className="inputportrait"
			name="inputportrait"
			required
			value={portrait}
			onChange={setPortrait}
		>
			<option value="">{t("FORMS.ADDER.UNSET_PORTRAIT")}</option>
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
				return <optgroup key={label} label={label}>

					{Object.entries(group.options).map(sprite => {
						// Create option label from the provided label object
						let label, spriteKeys = Object.keys(sprite[1]);
						if (isSubsetOf(["emotion", "variant"], spriteKeys)) {
							label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER_EMOTION_VARIANT", {
								identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
								emotion: t(sprite[1].emotion),
								variant: t(sprite[1].variant),
							});
						}
						else if (isSubsetOf(["emotion"], spriteKeys)) {
							label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER_EMOTION", {
								identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
								emotion: t(sprite[1].emotion),
							});
						}
						else if (isSubsetOf(["variant"], spriteKeys)) {
							label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER_VARIANT", {
								identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
								variant: t(sprite[1].variant),
							});
						}
						else {
							label = t("CONTENT.PORTRAITS.OPTION_LABEL.IDENTIFIER", {
								identifier: t(sprite[1].identifier ?? group.label.short_identifier ?? group.label.identifier),
							});
						}

						// And drop that into an option
						return <option value={sprite[0]} key={sprite[0]}>{label}</option>
					})}

				</optgroup>;
			})}
		</select>
	);
}

// Memo to reduce re-rendering of the multiple <option>s
export default memo(PortraitSelector);