import React from 'react'

export default function Modal({ finished, score }) {
	return (
		<div className="modal">
			{finished && (
				<div>
					<h1>You Win with a score of {score}</h1>
				</div>
			)}
			{!finished && (
				<div>
					<h1>Nevermind you lost with a score of {score}</h1>
					<p>Better luck next time :)</p>
				</div>
			)}
		</div>
	)
}
