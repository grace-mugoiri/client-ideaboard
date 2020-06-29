import React, { Component } from 'react';
import axios from 'axios';

class IdeaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.idea.title,
			body: this.props.idea.body
		}
	}

	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	handleBlur = () => {
		const idea = {
			title: this.state.title,
			body: this.state.body
		}
		axios.put(
			`http://localhost:3001/api/v1/ideas/${this.props.idea.id}`,
			{
				idea: idea
			}
		)
		.then(response => {
			console.log(response)
			this.props.updateIdea(response.data)
		})
		.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="tile">
				<form onBlur={this.handleBlur}>
					<input type="text" className="input" name="title" placeholder="Enter a Title" onChange={this.handleInput} />
					<textarea name="body" className="input" placeholder="Desrcibe your idea" onChange={this.handleInput} ></textarea>
				</form>
			</div>
		);
	}
}
export default IdeaForm;
