import { useState } from "react";
import domtoimage from "dom-to-image";
import BlockContext from "../../context/BlockContext";
import { useTranslation } from "react-i18next";
import BlockWrapper from "../Blocks/BlockWrapper";
import AddForm from "../Forms/AddForm";
import JSONForm from "../Forms/JSONForm";
import PortraitViewer from "../Forms/PortraitViewer";
import getBlockType from "../../utils/getBlockType";

/** The app body, consisting of the actual editor. */
export default function Body() {
	const [blocks, setBlocks] = useState([]);
	const { t } = useTranslation();

	/** Deletes all currently-rendered content blocks. */
	function clearAll() {
		if (window.confirm(t("alerts.confirm_delete_all")))
			setBlocks([]);
	}

	/** Saves all currently-rendered content blocks as an image. */
	function screenshot() {
		// Prepare the elements for the transfer
		const canvas = document.getElementById("imgcanvas"),
			downloadLink = document.getElementById("imgdownload"),
			dialogues = document.getElementById("dialogues");

		// Mark the page in preparation for capturing
		// This disables all elements that shouldn't appear in the final image, like edit menus
		dialogues.classList.toggle("screenshotting");

		domtoimage.toSvg(dialogues)
			.then((dataUrl) => {
				// SVG comes out the crispest, so we use that instead of .toPNG()
				// But we do want to save as a PNG, so we draw the SVG image onto a canvas…
				let img = new Image();
				img.addEventListener("load", () => {
					canvas.width = img.width;
					canvas.height = img.height;
					canvas.getContext("2d").drawImage(img, 0, 0);

					// …and then download the canvas as a data URL, which gets slapped into the prepared download link and triggered
					downloadLink.href = canvas.toDataURL();
					downloadLink.click();

					// With that done, bring back the edit menus and all!
					dialogues.classList.toggle("screenshotting");
				});
				img.src = dataUrl;
			})
			.catch((error) => {
				window.alert(t("alerts.error_image_conversion"));
				console.error("Error occurred while saving image:", error);
			});
	}

	return <main id="sitebody">
		{blocks.length === 0 && <p id="explainer">{t("body.startup")}</p>}
		{blocks.length > 0 && <header id="topmenu">
			<button className="blockbtn" id="saveimage" onClick={screenshot}>{t("actions.save_image")}</button>
			<button className="blockbtn" id="clearall" onClick={clearAll}>{t("actions.delete_all")}</button>
		</header>}

		<BlockContext.Provider value={[blocks, setBlocks]}>
			{blocks.length > 0 && <section id="dialogues">
				{blocks.map(obj => <BlockWrapper key={obj.id} type={getBlockType(obj)} data={obj} />)}
			</section>}

			<AddForm />

			<JSONForm />
		</BlockContext.Provider>

		<PortraitViewer />

		<section id="downloadasimage" hidden>
			{/* Placeholder URL to avoid a11ty warning */}
			<a id="imgdownload" href="/misc/someone_shadow.png" download="beebo-dialogue.png">{t("actions.save_image")}</a>
			<canvas id="imgcanvas" />
		</section>
	</main>
};