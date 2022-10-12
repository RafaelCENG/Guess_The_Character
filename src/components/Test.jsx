import { useState } from 'react'

const Test = ({ characters, error, isPending }) => {
	const [deck, setDeck] = useState([])
	const [answer, setAnswer] = useState(null)
	const [score, setScore] = useState(0)

	// New Array of object that contains only the properties we need
	const test = characters.data.map((character) => ({
		id: character.character.mal_id,
		name: character.character.name,
		imgUrl: character.character.images.jpg.image_url,
		matched: false,
	}))
	console.log(test)

	const shuffleDeck = () => {
		setScore(0)
	}

	// Starting a new Game
	const newGame = () => {}
	return (
		<div className="App">
			<h1>Guess The Name</h1>
			<button onClick={newGame}>New Game</button>
		</div>
	)
}

export default Test
