import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import './input.css'

function App() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		axios
			.get(`https://api.jikan.moe/v4/characters`)
			.then((res) => {
				setLoading(false)
				console.log(res.data)
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
	return (
		<div>
			<h1 className="pt-6 text-center text-4xl ">Anime Quiz</h1>
			{error && <div className="pt-6 text-center">{error}</div>}
			{loading && <div className="pt-6 text-center">Loading...</div>}
			{characters && (
				<Home characters={characters} setCharacters={setCharacters} />
			)}
		</div>
	)
}

export default App
