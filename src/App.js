import "./styles/App.css";
import { useState } from "react";
import { BlockContext } from "./context/BlockContext";
import getBlockType from "./utils/getBlockType";
import BlockWrapper from "./components/Blocks/BlockWrapper";
import AddForm from "./components/Forms/AddForm";
import JSONForm from "./components/Forms/JSONForm";
import domtoimage from 'dom-to-image';
import { Trans, useTranslation } from "react-i18next";

export default function App() {
	const [blocks, setBlocks] = useState([]);
	const { t } = useTranslation();
	
	/** Deletes all dialogue boxes currently being displayed. */
	function clearAll() {
		if (window.confirm(t("ALERTS.CONFIRM_DELETE_ALL")))
			setBlocks([]);
	}

	/** Saves all currently-displayed dialogue boxes as an image. */
	function screenshot() {
		// Prepare the elements for the transfer
		const canvas = document.getElementById("imgcanvas"),
			downloadLink = document.getElementById("imgdownload"),
			dialogues = document.getElementById("dialogues");
		
		dialogues.classList.toggle("screenshotting");

		domtoimage.toSvg(dialogues)
			.then((dataUrl) => {
				// SVG comes out the most crisp, so we use that instead of .toPNG()
				// But we do want to save as a PNG, so we draw the SVG image onto a canvas…
				let img = new Image();
				img.addEventListener("load", () => {
					canvas.width = img.width;
					canvas.height = img.height;
					canvas.getContext("2d").drawImage(img, 0, 0);

					// …and then download the canvas as a data URL, which
					downloadLink.href = canvas.toDataURL();
					downloadLink.click();

					dialogues.classList.toggle("screenshotting");
				});
				img.src = dataUrl;
			})
			.catch((error) => {
				window.alert(t("ALERTS.ERROR_IMAGE_CONVERSION"));
				console.error("Error occurred while saving image:", error);
			});
	}

	return (<>
		<header id="sitehead">
			<h1>{t("SITE_HEADER.TITLE")}</h1>
			<p><Trans i18nKey="SITE_HEADER.SUBTITLE" components={{ hyperlink: <a href="https://bwobbers.itch.io/detective-beebo-night-at-the-mansion">nonempty</a> }} /></p>
			<p><Trans i18nKey="SITE_HEADER.GIF_MAKER" components={{ hyperlink: <a href="https://kongkrog.github.io/isat-profile-customizer/beebo/beebo.html">nonempty</a> }} /></p>
		</header>

		<main id="sitebody">
			{blocks.length === 0 && <p id="explainer">{t("BODY.STARTUP")}</p>}
			{blocks.length > 0 && <header id="topmenu">
				<button id="saveimage" onClick={screenshot}>{t("ACTIONS.SAVE_IMAGE")}</button>
				<button id="clearall" onClick={clearAll}>{t("ACTIONS.DELETE_ALL")}</button>
			</header>}

			<BlockContext.Provider value={[blocks, setBlocks]}>
				{blocks.length > 0 && <section id="dialogues">
					{blocks.map(obj => <BlockWrapper key={obj.id} type={getBlockType(obj)} data={obj} />)}
				</section>}

				<AddForm />

				<JSONForm />
			</BlockContext.Provider>

			<section id="downloadasimage" hidden>
				{/* Placeholder URL to avoid a11ty warning */}
				<a id="imgdownload" href="/misc/someone_shadow.png" download="beebo-dialogue.png">{t("ACTIONS.SAVE_IMAGE")}</a>
				<canvas id="imgcanvas" />
			</section>
		</main>

		<footer id="sitefoot">
			<p><Trans
				i18nKey="FOOTER.CREATION"
				components={{
					hyperlinkCreator: <a href="https://github.com/wovenstarlight">nonempty</a>,
					hyperllinkRepo: <a href="https://github.com/wovenstarlight/beebo-dialogue">nonempty</a>,
				}}
			/></p>
			<p><Trans
				i18nKey="FOOTER.FONTS"
				components={{
					hyperlinkNokia: <a href="https://www.dafont.com/nokia-cellphone.font">nonempty</a>,
				}}
			/></p>
		</footer>
	</>);
}