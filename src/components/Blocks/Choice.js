import "../../styles/Choice.css";

export default function Choice({ id, options }) {
	return <>
		{options.map((opt, index) => (
			<p
				key={`${id}_${index}`}
				id={`${id}_${index}`}
				className={[opt.color, opt.selected && "selected"].filter(el => el != null).join(" ")}
			>
				{opt.text}
			</p>
		))}
	</>;
}