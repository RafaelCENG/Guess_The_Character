import { useState } from 'react'



const RandomCharacter = ({ randomCharacter, test }) => {
	if (randomCharacter !== null)
		return <img src={test[randomCharacter].imgUrl} alt="character" />
}

const Test = ({ characters }) => {
	//const [answer, setAnswer] = useState('')
	//const [score, setScore] = useState(0)
	const [randomCharacter, setRandomCharacter] = useState(null)

	// New Array of object that contains only the properties we need
	const test = characters.map((character) => ({
		id: character.character.mal_id,
		name: character.character.name,
		imgUrl: character.character.images.jpg.image_url,
		matched: false,
	}))

	const findCharacter = () => {
		console.log(test.length)
		console.log(Math.floor(Math.random() * test.length))
		setRandomCharacter(Math.floor(Math.random() * test.length))
		return randomCharacter
	}

	// Starting a new Game
	const newGame = () => {
		//setScore(0)
		//setAnswer(null)
		console.log(test)
		findCharacter()
	}
	return (
		<div className="App">
			<h1>Guess The Name</h1>
			<button onClick={newGame}>New Game</button>
			<div>
				<RandomCharacter randomCharacter={randomCharacter} test={test} />
			</div>
		</div>
	)
}

export default Test