import "./styles/App.css";
import { useState } from "react";
import DialogueBlock from "./components/Blocks/Dialogue";
import ChoiceBlock from "./components/Blocks/Choice";
import AddForm from "./components/Forms/AddForm";
import JSONForm from "./components/Forms/JSONForm";
import domtoimage from 'dom-to-image';

function App() {
	const [blocks, setBlocks] = useState([]);
	
	/** Deletes all dialogue boxes currently being displayed. */
	function clearAll() {
		if (window.confirm("Really delete all currently-generated dialogue boxes?\n\nThis is irreversible!"))
			setBlocks([]);
	}

	/** Saves all currently-displayed dialogue boxes as an image. */
	function screenshot() {
		// Prepare the elements for the transfer
		const canvas = document.getElementById("imgcanvas"),
			downloadLink = document.getElementById("imgdownload");

		domtoimage.toSvg(document.getElementById("dialogues"))
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
				});
				img.src = dataUrl;
			})
			.catch((error) => {
				window.alert("There was an error while trying to convert the image. Please let me know about the issue on Github!");
				console.error("Error occurred while saving image:", error);
			});
	}

	return (<>
		<header id="sitehead">
			<h1>Detective Beebo dialogue builder</h1>
			<p>Based on the game <a href="https://bwobbers.itch.io/detective-beebo-night-at-the-mansion">Detective Beebo: Night at the Mansion</a> by Bwobbers</p>
			<p>A static image version of <a href="https://kongkrog.github.io/isat-profile-customizer/beebo/beebo.html">kongkrog's dialogue GIF maker</a></p>
		</header>

		<main id="sitebody">
			{blocks.length === 0 && <p id="explainer">Use the form below to get started!</p>}
			{blocks.length > 0 && <header id="topmenu">
				<button id="saveimage" onClick={screenshot}>Save as PNG</button>
				<button id="clearall" onClick={clearAll}>Delete all</button>
			</header>}

			{blocks.length > 0 && <section id="dialogues">
				{blocks.map((obj, index, array) => {
					return "options" in obj
						? <ChoiceBlock
							key={obj.id}
							data={obj}
							allBlocks={blocks}
							setBlocks={setBlocks}
							isFirst={index === 0}
							isLast={index === array.length - 1}
						/>
						: <DialogueBlock
							key={obj.id}
							data={obj}
							allBlocks={blocks}
							setBlocks={setBlocks}
							isFirst={index === 0}
							isLast={index === array.length - 1}
						/>
				})}
			</section>}

			<AddForm setBlocks={setBlocks} />

			<JSONForm blocks={blocks} setBlocks={setBlocks} />

			<section id="downloadasimage" hidden>
				{/* Placeholder URL to avoid a11ty warning */}
				<a id="imgdownload" href="/misc/someone_shadow.png" download="beebo-dialogue.png">Download as image</a>
				<canvas id="imgcanvas" />
			</section>
		</main>

		<footer id="sitefoot">
			<p><a href="https://github.com/wovenstarlight">Made by wovenstarlight</a> | <a href="https://github.com/wovenstarlight/beebo-dialogue">Source code on Github</a></p>
			<p>Font credits: <a href="https://www.dafont.com/nokia-cellphone.font">Nokia Cellphone FC</a> and SqueezedPixels by Bwobbers</p>
		</footer>
	</>);
}

export default App;
