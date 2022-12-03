import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import AnimePhoto from './assets/AnimePhoto.jpg'
import PokemonPhoto from './assets/PokemonPhoto.png'
import { Category } from './components/Category'
import Home from './components/Home'
import './input.css'
function App() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [characters, setCharacters] = useState(null)
	const [show, setShow] = useState(true)

	const animeFetchRequest = useCallback(() => {
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
		setShow(false)
	}, [])

	return (
		<div>
			<h1 className="pt-6 text-center text-4xl ">Quiz Game</h1>
			{show && (
				<div className="m-10 flex flex-wrap justify-between p-10 ">
					<Category
						error={error}
						loading={loading}
						title="Anime"
						img={AnimePhoto}
						fetchData={animeFetchRequest}
						difficulty="Hard"
					/>
					<Category
						title="Test"
						img={PokemonPhoto}
						//fetchData={animeFetchRequest}
						difficulty="Easy"
						clickable="cursor-not-allowed"
					/>
					<Category
						title="Test"
						img=""
						//fetchData={animeFetchRequest}
						difficulty="Easy"
						clickable="cursor-not-allowed"
					/>
					<Category
						title="Test"
						img=""
						//fetchData={animeFetchRequest}
						difficulty="Easy"
						clickable="cursor-not-allowed"
					/>
				</div>
			)}

			<div>
				{/* {error && <div className="pt-6 text-center">{error}</div>}
				{loading && <div className="pt-6 text-center">Loading...</div>} */}
				{characters && (
					<Home characters={characters} setCharacters={setCharacters} />
				)}
			</div>
		</div>
	)
}

export default App
