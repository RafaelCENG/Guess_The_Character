import './App.css'
import AnimeCharacters from './components/AnimeCharacters'
import Test from './components/Test'
import useFetch from './useFetch'

function App() {
	const {
		data: characters,
		error,
		isPending,
	} = useFetch('https://api.jikan.moe/v4/anime/1/characters')

	return (
		<div className="App">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{characters && <Test characters={characters} />}
		</div>
	)
}

export default App