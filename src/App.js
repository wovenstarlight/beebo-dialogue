import "./styles/App.css";
import TextBox from "./components/TextBox";

function App() {
	return (<>
		<header id="sitehead">
			<h1>Detective Beebo dialogue builder</h1>
			<p>Based on the game <a href="https://bwobbers.itch.io/detective-beebo-night-at-the-mansion">Detective Beebo: Night at the Mansion</a> by Bwobbers</p>
			<p>(Inspired by and built off <a href="https://kongkrog.github.io/isat-profile-customizer/beebo/beebo.html">GIF version</a>)</p>
		</header>
		<main id="sitebody">
			<p id="explainer">TODO</p>
			<TextBox />
			<AddForm />
		</main>
		<footer id="sitefoot">
			<p>Made by <a href="https://github.com/wovenstarlight">wovenstarlight</a></p>
			<p>Font credits: <a href="https://www.dafont.com/nokia-cellphone.font">Nokia Cellphone FC</a> and SqueezedPixels by Bwobbers</p>
		</footer>
	</>);
}

export default App;
