import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		axios
			.get(`https://api.jikan.moe/v4/characters`)
			.then((res) => {
				setLoading(false)
				console.log(res.data.data)

				const character = res.data.data.map((character) => ({
					id: character.mal_id,
					name: character.name,
					imgUrl: character.images.jpg.image_url,
					matched: false,
				}))
				setCharacters(character)
				setError('')
			})
			.catch((error) => {
				setLoading(false)
				setCharacters([])
				setError('Something went wrong!')
			})
	}, [])
	console.log('characters', characters)

	return (
		<div>
			<h1>Guess The Character</h1>
			{error && <div>{error}</div>}
			{loading && <div>Loading...</div>}
			{characters && (
				<Home characters={characters} setCharacters={setCharacters} />
			)}
		</div>
	)
}

export default App
