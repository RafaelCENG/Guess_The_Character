const Answers = ({ shuffleAnswers, randomCharacter }) => {
	// console.log([...shuffleAnswers, ...randomCharacter])
	//console.log(shuffleAnswers)
	//console.log(randomCharacter)
	const shuffledAnswers = shuffleAnswers
		.concat(randomCharacter)
		.sort(() => Math.random() - 0.5)
		.map((answer) => ({ ...answer }))
	//console.log(shuffledAnswers)

	return (
		<div>
			<div>Solution : {randomCharacter.name}</div>
			<div>
				{shuffledAnswers.map((answer) => (
					<div key={answer.id}>{answer.name}</div>
				))}
			</div>
		</div>
	)
}

export default Answers
