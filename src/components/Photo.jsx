const Photo = ({ randomCharacter }) => {
	return (
		<div className=" flex   items-center justify-center ">
			<img
				className="rounder-md border-8 border-rose-200"
				src={randomCharacter.imgUrl}
				alt="random"
			/>
		</div>
	)
}

export default Photo
