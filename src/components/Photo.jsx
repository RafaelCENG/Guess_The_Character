const Photo = ({ randomCharacter }) => {
	return (
		<div className="flex items-center justify-center">
			<img src={randomCharacter.imgUrl} alt="random" />
		</div>
	)
}

export default Photo
