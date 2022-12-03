import React from 'react'
export const Category = ({
	title,
	img,
	fetchData,
	difficulty,
	error,
	loading,
	clickable,
}) => {
	return (
		// {error && <div className="pt-6 text-center">{error}</div>}
		// {loading && <div className="pt-6 text-center">Loading...</div>}
		<div className="max-w-sm   overflow-hidden  rounded border-2 border-slate-300    shadow-lg ">
			<img className=" w-full  object-cover" src={img} alt={title} />
			<div className="bg-violet-200 px-6 py-4">
				<div className="mb-2 text-xl font-bold">{title}</div>
				<p className="text-base text-gray-700">
					This Quiz contains multiple {title.toLowerCase()} characters.
					Difficulty {difficulty}
				</p>
			</div>
			<div className="bg-violet-200 px-6 pt-4 pb-2">
				<button
					className={`rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 ${clickable}`}
					onClick={fetchData}
				>
					Start
				</button>
			</div>
		</div>
	)
}
