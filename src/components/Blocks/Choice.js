import "../../styles/Choice.css";

export default function Choice({ id, options }) {
	return <>
		{options.map((opt, index) => (
			<p
				key={`${id}_${index}`}
				id={`${id}_${index}`}
				className={`${opt.color ?? "purple"}${opt.selected ? " selected" : ""}`}
			>
				{opt.text}
			</p>
		))}
	</>;
}