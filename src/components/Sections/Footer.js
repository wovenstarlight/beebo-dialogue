import { Trans } from "react-i18next";

/** The app footer, including app credits. */
export default function Footer() {
	// eslint gets upset if you supply links with no content to <Trans/>, so include placeholder text; it gets overwritten by the actual content in the i18n file
	return <footer id="sitefoot">
		<p><Trans
			i18nKey="footer.creation"
			components={{
				hyperlinkCreator: <a href="https://github.com/wovenstarlight">nonempty</a>,
				hyperllinkRepo: <a href="https://github.com/wovenstarlight/beebo-dialogue">nonempty</a>,
			}}
		/></p>
		<p><Trans
			i18nKey="footer.fonts"
			components={{
				hyperlinkNokia: <a href="https://www.dafont.com/nokia-cellphone.font">nonempty</a>,
			}}
		/></p>
	</footer>;
}