import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import MessageCard from '../message-card'
import firebase from '../../helpers/firebase'
import asArray from '../../helpers/asArray'

import './styles.css'

export default class MessageList extends Component {
	state = {
		messages: [],
	}

	database = firebase.database()

	componentDidMount() {
		this.database.ref('messages').on('value', snapshot => {
			const messages = asArray(snapshot.val())

			this.setState({ messages })
		})
	}

	render() {
		const {
			messages,
		} = this.state

		return (
			<CSSTransitionGroup
				transitionName="slide"
				transitionEnterTimeout={400}
				transitionLeaveTimeout={400}
				className="message-list">
				{
					// let's reverse it so newer messages are shown first
					messages.reverse().map(message => (
						<MessageCard
							key={message.id}
							username={message.user_name}
							message={message.message}
						/>
					))
				}
			</CSSTransitionGroup>
		)
	}
}
