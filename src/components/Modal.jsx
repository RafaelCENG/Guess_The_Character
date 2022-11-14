import React from 'react'

export default function Modal({ finished, score }) {
	return (
		<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="max-w-sm rounded bg-gray-200 py-2 px-3 text-gray-800 shadow-xl">
				{finished && (
					<div className="mt-2 text-sm">
						<h1>You Win with a score of {score}</h1>
					</div>
				)}
				{!finished && (
					<div className="mt-2 text-sm">
						<h1>Nevermind you lost with a score of {score}</h1>
						<p>Better luck next time :)</p>
					</div>
				)}
			</div>
		</div>
	)
}
