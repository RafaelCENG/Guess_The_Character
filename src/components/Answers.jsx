const Answers = ({ character, handleChoice }) => {
	const handleClick = () => {
		handleChoice(character)
	}
	return (
		<button
			className="w-4/12  border-2 border-gray-300 bg-gray-100 p-6 text-2xl"
			onClick={handleClick}
		>
			{character.name}
		</button>
	)
}

export default Answers
