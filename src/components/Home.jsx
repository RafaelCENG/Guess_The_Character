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
	const [isShown, setIsShown] = useState(false)

	const handleStartGame = () => {
		setIsShown(true)
		setTurns(0)
		setLives(3)
		setScore(0)
		setCharacters((prevCharacters) =>
			prevCharacters.map((character) => ({ ...character, matched: false }))
		)
		findCharacter()
	}

	const findCharacter = () => {
		if (characters.length !== 0) {
			// Check if we won or lost.
			// Win means we found all the characters
			// Lose we lost our 3 lives
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

	return (
		<div>
			<div className="mt-6 text-center">
				<button
					className="btn mr-2 mb-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
					onClick={handleStartGame}
				>
					New Game
				</button>
			</div>

			{isShown && (
				<div>
					{randomCharacter && <Photo randomCharacter={randomCharacter} />}
					<div className="grid grid-cols-2  gap-4 py-10 px-10">
						{randomCharacter &&
							shuffleAnswers.map((character) => (
								<Answers
									key={character.id}
									character={character}
									handleChoice={handleChoice}
								/>
							))}
					</div>

					<div className="flex justify-center ">
						<p>Turns : {turns}</p>
						<p>Score : {score}</p>
						<p>Lives : {lives}</p>
					</div>

					{showModal && <Modal finished={finished} score={score} />}
				</div>
			)}
		</div>
	)
}

export default Home
