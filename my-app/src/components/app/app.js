import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// class WhoAmI extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			years: 27,
// 			text: 'aaaa',
// 			position: ''
// 		}
// 	}
// 	nextYear = () => {
// 		this.setState(state => ({
// 			years: state.years + 1
// 		}))
// 	}

// 	commitInputChanges = (e, color) => {
// 		console.log(color);
// 		this.setState({
// 			position: e.target.value
// 		})
// 	}

// 	render() {
// 		const {name, surname, link} = this.props;
// 		const {position, years} = this.state;

// 		console.log(this);
// 		return (
// 			<div>
// 				<button onClick={this.nextYear} >{this.state.text}</button>
// 				<h1>My name is {name}, surname- {surname}, 
// 					age - {years}, 
// 					position - {position}
// 				</h1>
// 				<a href={link}>my profile</a>
// 				<form>
// 					<span>inseart position</span>
// 					<input type="text" onInput={(e) => this.commitInputChanges(e, 'some color')} />
// 				</form>
// 			</div>
// 		)
// 	}
// }

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John Smith', salary: 1800, increase: false, id: 1},
				{name: 'Vasya Pupkin', salary: 300, increase: true, id: 2},
				{name: 'Jayne Dough', salary: 5000, increase: false, id: 3}
			]
		}
		this.maxId = 4;
	}

	deleteItem =(id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	// setMaxId = ({data}=this.state) => {
	// 	let newArr = [];
	// 	data.forEach((item, i) => {
	// 		newArr[i] = item.id
	// 	})
 
	// 	this.maxId = Math.max(...newArr) + 1
	// 	console.log(this.maxId);
	// 	return this.maxId
	// }

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: this.maxId++
		}

		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	render() {
		return (
			<div className='app'>
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter/>
				</div>

				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}/>

				<EmployeesAddForm
					onAdd={this.addItem}/>
			</div>
			// <div className="App">
			// 		<WhoAmI name='John' surname='Smith' link='facebook.com'/>
			// 		<WhoAmI name='Alex' surname='Shepard' link='vk.com'/>
			// </div>
		);
	}
}


export default App;