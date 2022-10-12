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
			{characters && (
				<Test characters={characters} error={error} isPending={isPending} />
			)}
		</div>
	)
}

export default App
