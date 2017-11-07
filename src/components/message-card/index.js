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
		} = this.props

		return (
			<div className="message-card">
				<div className="username">
					{username || 'Autor desconhecido'}
				</div>

				<div className="message">
					{message}
				</div>
			</div>
		)
	}
}
