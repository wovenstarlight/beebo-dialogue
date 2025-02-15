import "../styles/TextBox.css";

function TextBox({color, name, portrait, children}) {
	return <article className={`dialogue ${color ?? "house"}`}>
		<header className="speaker">
			<span className="question">?</span>
			<span className="name">{name ?? "Y/N"}</span>
		</header>
		<div className="body">
			<img className="portrait" src={`${process.env.PUBLIC_URL}/assets/portraits/`.concat(portrait ?? "default.png")} />
			<p className="text">{children ?? "Lorem ipsum dolor sit amet."}</p>
		</div>
	</article>
}

export default TextBox;