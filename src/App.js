import Body from "./components/Sections/Body";
import Footer from "./components/Sections/Footer";
import Header from "./components/Sections/Header";
import "./styles/App.css";

/**
 * The React application itself, containing all page content.
 * @returns The complete single-page application.
 */
export default function App() {
	return (<>
		<Header />

		<Body />

		<Footer />
	</>);
}