import { Children, useEffect, useState } from 'react'
import Answers from './Answers'
import Photo from './Photo'

const Home = ({ characters }) => {
	const [randomCharacter, setRandomCharacter] = useState({})
	const [turns, setTurns] = useState(0)
	const [shuffleAnswers, setShuffleAnswers] = useState([])

	const character = characters.map((character) => ({
		id: character.character.mal_id,
		name: character.character.name,
		imgUrl: character.character.images.jpg.image_url,
		matched: false,
	}))
	const findCharacter = () => {
		if (character.length !== 0) {
			const randomNumber = Math.floor(Math.random() * character.length)
			setRandomCharacter(character[randomNumber])

			const shuffled = [...character].sort(() => 0.5 - Math.random())
			const shuffled1 = shuffled.slice(0, 3)

			console.log(shuffled1)
			console.log(character[randomNumber])
			setShuffleAnswers(shuffled1)
		}
	}

	// start a new game automatically
	useEffect(() => {
		findCharacter()
	}, [])

	//console.log(character)

	return (
		<div>
			<div>
				<button onClick={findCharacter}>New Game</button>
				{randomCharacter && <Photo randomCharacter={randomCharacter} />}
				{randomCharacter && (
					<Answers
						shuffleAnswers={shuffleAnswers}
						randomCharacter={randomCharacter}
					/>
				)}
				<p>Turns - {turns}</p>
			</div>
		</div>
	)
}

export default Home
