import "../../styles/Choice.css";

export default function ChoiceBlock({
	data: { id, color, options },
	allBlocks, setBlocks,
	isFirst, isLast,
}) {
	return <article id={id} className={`mcq ${color ?? "purple"}`}>
		{options.map((opt, index) => <p
			key={`${id}_${index}`}
			id={`${id}_${index}`}
			className={`${opt.color ?? "purple"}${opt.selected ? " selected" : ""}`}
		>{opt.text}</p>)}
	</article>;
}