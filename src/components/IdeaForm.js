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

	render() {
		return (
			<div className="tile">
				<form>
					<input type="text" className="input" name="title" placeholder="Enter a Title" onChange={this.handleInput} />
					<textarea name="body" className="input" placeholder="Desrcibe your idea" onChange={this.handleInput} ></textarea>
				</form>
			</div>
		);
	}
}
export default IdeaForm;
