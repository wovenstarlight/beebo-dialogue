import "./styles/App.css";
import TextBox from "./components/TextBox";
import AddForm from "./components/AddForm";
import { useState } from "react";

function App() {
	const [dialogues, setDialogues] = useState([]);

	return (<>
		<header id="sitehead">
			<h1>Detective Beebo dialogue builder</h1>
			<p>Based on the game <a href="https://bwobbers.itch.io/detective-beebo-night-at-the-mansion">Detective Beebo: Night at the Mansion</a> by Bwobbers</p>
			<p>(Inspired by <a href="https://kongkrog.github.io/isat-profile-customizer/beebo/beebo.html">kongkrog's dialogue GIF maker</a>)</p>
		</header>
		<main id="sitebody">
			<p id="explainer">TODO</p>

			{dialogues.map((obj, index, array) => <TextBox key={obj.id} {...obj} allDialogues={dialogues} setDialogues={setDialogues} isFirst={index === 0} isLast={index === array.length - 1} />)}

			<AddForm setDialogues={setDialogues} />
		</main>
		<footer id="sitefoot">
			<p>Made by <a href="https://github.com/wovenstarlight">wovenstarlight</a></p>
			<p>Font credits: <a href="https://www.dafont.com/nokia-cellphone.font">Nokia Cellphone FC</a> and SqueezedPixels by Bwobbers</p>
		</footer>
	</>);
}

export default App;
