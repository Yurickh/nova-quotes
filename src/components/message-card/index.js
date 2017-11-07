import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default class MessageCard extends Component {
	static propTypes = {
		username: PropTypes.string,
		message: PropTypes.string.isRequired,
	}

	render() {
		const {
			username,
			message,
			avatar,
		} = this.props

		return (
			<div className="message-card">
				{
					avatar && (
						<div className="avatar" style={{
							backgroundImage: `url(${avatar})`,
						}} />
					)
				}

				<div className="info">
					<p className="message">
						{message}
					</p>

					<div className="username">
						{username || 'Autor desconhecido'}
					</div>
				</div>
			</div>
		)
	}
}
