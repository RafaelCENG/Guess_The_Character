import { useEffect, useState } from 'react'
import Answers from './Answers'
import Photo from './Photo'

const Home = ({ characters }) => {
	const [randomCharacter, setRandomCharacter] = useState({})
	const [turns, setTurns] = useState(0)
	const [shuffleAnswers, setShuffleAnswers] = useState([])
	const [choice, setChoice] = useState(null)

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
			const check = shuffled1.some((e) => e.id === character[randomNumber].id)
			console.log('Check', check)
			if (check) {
				findCharacter()
			} else {
				const shuffledAnswers = shuffled1
					.concat(character[randomNumber])
					.sort(() => Math.random() - 0.5)
					.map((answer) => ({ ...answer }))
				console.log('GG Shuffled Answers', shuffledAnswers)
				setShuffleAnswers(shuffledAnswers)
			}
			// console.log('Shuffled1', shuffled1)
			// console.log(character[randomNumber])
		}
	}

	// handle choice
	const handleChoice = (character) => {
		setChoice(character)
	}

	// compare the choice with the answer
	useEffect(() => {
		console.log(choice)
	}, [choice])

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
				{
					randomCharacter &&
						shuffleAnswers.map((character) => (
							<Answers
								key={character.id}
								character={character}
								handleChoice={handleChoice}
								randomCharacter={randomCharacter}
							/>
						))
					/* <Answers
						shuffleAnswers={shuffleAnswers}
						randomCharacter={randomCharacter}
					/> */
				}
				<p>Turns - {turns}</p>
			</div>
		</div>
	)
}

export default Home
