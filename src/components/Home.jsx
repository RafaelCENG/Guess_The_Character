import { useEffect, useState } from 'react'
import Answers from './Answers'
import Modal from './Modal'
import Photo from './Photo'

const Home = ({ characters, setCharacters }) => {
	const [randomCharacter, setRandomCharacter] = useState({})
	const [turns, setTurns] = useState(0)
	const [lives, setLives] = useState(3)
	const [shuffleAnswers, setShuffleAnswers] = useState([])
	const [choice, setChoice] = useState(null)
	const [score, setScore] = useState(0)
	const [showModal, setShowModal] = useState(false)
	const [finished, setFinished] = useState(false)
	const [startGame, setStartGame] = useState(false)
	//const [allCharacters, setAllCharacters] = useState(characters)
	//console.log('Test', characters)
	//console.log('All characterS', allCharacters)

	const handleStartGame = () => {
		setStartGame(true)
		findCharacter()
		// setStartGame(current => !current)
	}

	const findCharacter = () => {
		console.log('All characterS', characters)
		if (characters.length !== 0) {
			// Check if we won or lost.
			// Win means we found all the characters
			// Lose we lost our 3 lives
			console.log(characters.length)
			if (characters.length === score || lives === 0) {
				setFinished(true)
				return
			}

			const randomNumber = Math.floor(Math.random() * characters.length)
			setRandomCharacter(characters[randomNumber])
			const shuffled = [...characters].sort(() => 0.5 - Math.random())
			const shuffled1 = shuffled.slice(0, 3)
			const check = shuffled1.some((e) => e.id === characters[randomNumber].id)
			if (check || characters[randomNumber].matched === true) {
				findCharacter()
			} else {
				const shuffledAnswers = shuffled1
					.concat(characters[randomNumber])
					.sort(() => Math.random() - 0.5)
					.map((answer) => ({ ...answer }))
				setShuffleAnswers(shuffledAnswers)
			}
		}
	}

	// handle choice
	const handleChoice = (character) => {
		setChoice(character)
	}

	// compare the choice with the answer
	useEffect(() => {
		if (choice !== null && randomCharacter !== null) {
			// Checking if the answer is correct
			if (choice.id === randomCharacter.id) {
				setScore((prevScore) => prevScore + 1)
				setCharacters((prevCharacters) => {
					return prevCharacters.map((character) => {
						if (character.id === choice.id) {
							return { ...character, matched: true }
						} else {
							return character
						}
					})
				})
				// If wrong remove one life
			} else {
				setLives((prevLives) => prevLives - 1)
			}
			resetTurn()
		}
	}, [choice, randomCharacter])

	// reset choice & increase turn
	const resetTurn = () => {
		setChoice(null)
		setTurns((prevTurns) => prevTurns + 1)
		findCharacter()
	}

	// If finished true.
	useEffect(() => {
		if (finished) {
			console.log('congrats, you win!')
			setTimeout(() => setShowModal(true), 1000)
		}

		if (lives === 0) {
			console.log('Out of lives')
			setTimeout(() => setShowModal(true), 1000)
		}

		return
	}, [choice, finished])

	// start a new game automatically
	// useEffect(() => {
	// 	findCharacter()
	// }, [])

	//console.log(character)

	return (
		<div>
			<button onClick={handleStartGame}>New Game</button>
			{startGame && (
				<div>
					<div>Solution : {randomCharacter.name}</div>
					{randomCharacter && <Photo randomCharacter={randomCharacter} />}
					{
						randomCharacter &&
							shuffleAnswers.map((character) => (
								<Answers
									key={character.id}
									character={character}
									handleChoice={handleChoice}
								/>
							))
						/* <Answers
						shuffleAnswers={shuffleAnswers}
						randomCharacter={randomCharacter}
					/> */
					}
					<p>Turns : {turns}</p>
					<p>Score : {score}</p>
					<p>Lives : {lives}</p>
					{showModal && <Modal finished={finished} score={score} />}
				</div>
			)}
		</div>
	)
}

export default Home
