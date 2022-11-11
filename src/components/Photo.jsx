const Photo = ({ randomCharacter }) => {
	return (
		<div>
			<img src={randomCharacter.imgUrl} alt="random" />
		</div>
	)
}

export default Photo
