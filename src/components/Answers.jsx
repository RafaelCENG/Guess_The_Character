const Answers = ({ character, handleChoice }) => {
	//console.log('Character', character)
	//console.log('shuffleAnswers', shuffleAnswers)
	//console.log('randomCharacter', randomCharacter)
	// console.log([...shuffleAnswers, ...randomCharacter])
	//console.log(shuffleAnswers)
	//console.log(randomCharacter)
	// console.log('First shuffle', shuffleAnswers)

	// const shuffledAnswers = shuffleAnswers
	// 	.concat(randomCharacter)
	// 	.sort(() => Math.random() - 0.5)
	// 	.map((answer) => ({ ...answer }))
	// console.log('Shuffled Answers', shuffledAnswers)

	const handleClick = () => {
		handleChoice(character)
	}
	return (
		<div>
			<div onClick={handleClick}>
				{character.name}
				{/* {shuffledAnswers.map((answer) => (
					<div key={answer.id}>{answer.name}</div>
				))} */}
			</div>
		</div>
	)
}

export default Answers
