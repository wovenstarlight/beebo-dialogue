import "../../styles/MultipleChoice.css";

function ChoiceBlock({
	data: { id, color, options },
}) {
	return <article className={`mcq ${color ?? "purple"}`}>
		{options.map((opt, index) => <p key={`${id}_${index}`} className={opt.selected && "selected"}>{opt.text}</p>)}
	</article>;
}

export default ChoiceBlock;