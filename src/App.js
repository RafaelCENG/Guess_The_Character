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
			.get(`https://api.jikan.moe/v4/anime/1/characters`)
			.then((res) => {
				setLoading(false)
				setCharacters(res.data.data)
				setError('')
			})
			.catch((error) => {
				setLoading(false)
				setCharacters({})
				setError('Something went wrong!')
			})
	}, [])

	return (
		<div>
			<h1>Guess The Character</h1>
			{error && <div>{error}</div>}
			{loading && <div>Loading...</div>}
			{characters && <Home characters={characters} />}
		</div>
	)
}

export default App
