import { memo } from "react";
import { useTranslation } from "react-i18next";
import ALL_PORTRAITS from "../../../constants/portraits";

function PortraitSelector({ portrait, setPortrait }) {
	const { t } = useTranslation();

	/** Checks that two arrays contain the same elements.
	 * To be used for confirming what keys a given option comes with.
	 */
	function arrayEquals(a1, a2) {
		return a1.toSorted().toString() === a2.toSorted().toString();
	}

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
				if (arrayEquals(keys, ["identifier", "variant"])) {
					label = t("DEFAULTS.PORTRAITS.GROUP_LABEL.IDENTIFIER_VARIANT", {
						identifier: t(group.label.identifier),
						variant: t(group.label.variant),
					});
				}
				else if (arrayEquals(keys, ["identifier"])) {
					label = t("DEFAULTS.PORTRAITS.GROUP_LABEL.IDENTIFIER", {
						identifier: t(group.label.identifier),
					});
				}

				// And drop that into an optgroup
				return <optgroup key={label} label={label}>

					{Object.entries(group.options).map(sprite => {
						// Create option label from the provided label object
						let label, spriteKeys = Object.keys(sprite[1]);
						if (arrayEquals(spriteKeys, ["identifier", "emotion", "variant"])) {
							label = t("DEFAULTS.PORTRAITS.OPTION_LABEL.IDENTIFIER_EMOTION_VARIANT", {
								identifier: t(sprite[1].identifier),
								emotion: t(sprite[1].emotion),
								variant: t(sprite[1].variant),
							});
						}
						else if (arrayEquals(spriteKeys, ["identifier", "emotion"])) {
							label = t("DEFAULTS.PORTRAITS.OPTION_LABEL.IDENTIFIER_EMOTION", {
								identifier: t(sprite[1].identifier),
								emotion: t(sprite[1].emotion),
							});
						}
						else if (arrayEquals(spriteKeys, ["identifier", "variant"])) {
							label = t("DEFAULTS.PORTRAITS.OPTION_LABEL.IDENTIFIER_VARIANT", {
								identifier: t(sprite[1].identifier),
								variant: t(sprite[1].variant),
							});
						}
						else if (arrayEquals(spriteKeys, ["identifier"])) {
							label = t("DEFAULTS.PORTRAITS.OPTION_LABEL.IDENTIFIER", {
								identifier: t(sprite[1].identifier),
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

export default memo(PortraitSelector);