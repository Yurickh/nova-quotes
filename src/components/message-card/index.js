import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const cardColors = [
	'#164683',
	'#2b007b',
	'#040212',
	'#2b999e',
	'#951403',
	'#ef9830'
]

export default class MessageCard extends Component {
	static propTypes = {
		username: PropTypes.string,
		message: PropTypes.string.isRequired,
	}

	backgroundColor = cardColors[Math.floor(Math.random()*cardColors.length)]

	render() {
		const {
			username,
			message,
			avatar,
		} = this.props

		return (
			<div className="message-card" style={{
				backgroundColor: this.backgroundColor
			}}>
				<div />

				<p className="message">
					{message}
				</p>

				<div className="head">
					{
						avatar && (
							<div className="avatar" style={{
								backgroundImage: `url(${avatar})`,
							}} />
						)
					}
					<div className="username">
						{username || 'Autor desconhecido'}
					</div>
				</div>
			</div>
		)
	}
}
