const Answers = ({ character, handleChoice }) => {
	const handleClick = () => {
		handleChoice(character)
	}
	return (
		<div>
			<div onClick={handleClick}>{character.name}</div>
		</div>
	)
}

export default Answers
