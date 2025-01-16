import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.name.length <3 || !this.state.salary.length) {
			return;
		}
		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: ''
		})
	}
	
	render() {
		const {name, salary} = this.state;
		return(
			<div className="app-add-form">
				<h3>Add new employee</h3>
				<form 
					onSubmit = {this.onSubmit}
					className="add-form d-flex">
					<input 
						required minLength="3"
						type="text" 	
						className="form-control new-post-label" 
						placeholder="What's his name"
						name="name"
						value={name}
						onChange={this.onValueChange}/>

					<input 
						type="number" 	
						required
						className="form-control new-post-label" 
						placeholder="Salary in $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}/>
				
					<button 
						className="btn btn-outline-light">Add
					</button>
				</form>
			</div>
		);
	}
};

export default EmployeesAddForm;