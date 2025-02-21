import { Trans, useTranslation } from "react-i18next";

/** The app header, including title and inspiration credits. */
export default function Header() {
	const { t } = useTranslation();

	// eslint gets upset if you supply links with no content to <Trans/>, so include placeholder text; it gets overwritten by the actual content in the i18n file
	return <header id="sitehead">
		<h1>{t("site_header.title")}</h1>
		<p><Trans
			i18nKey="site_header.subtitle"
			components={{
				hyperlink: <a href="https://bwobbers.itch.io/detective-beebo-night-at-the-mansion">nonempty</a>,
			}}
		/></p>
		<p><Trans
			i18nKey="site_header.gif_maker"
			components={{
				hyperlink: <a href="https://kongkrog.github.io/isat-profile-customizer/beebo/beebo.html">nonempty</a>,
			}}
		/></p>
	</header>;
}