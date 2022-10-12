import useFetch from '../useFetch'

const AnimeCharacters = () => {
	const {
		data: characters,
		error,
		isPending,
	} = useFetch('https://api.jikan.moe/v4/anime/1/characters')
	console.log(characters)
	console.log(characters)

	return (
		<div>
			{isPending && <div>Loading...</div>}
			{error && <div> {error} </div>}
			{characters &&
				characters.data.map((character) => (
					<div key={character.character.mal_id}>
						<h2>{character.character.name}</h2>
						<img
							src={character.character.images.jpg.image_url}
							alt="character"
						></img>
					</div>
				))}
		</div>
	)
}

export default AnimeCharacters
