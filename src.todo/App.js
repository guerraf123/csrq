import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'take',
				completed: false
			},
			{
				id: 2,
				title: 'Dinner with wife',
				completed: false
			},
			{
				id: 3,
				title: 'Meeting with Boss',
				completed: false
			}
		]
	}
		
		render(){
			console.log(this.state.todos)
			return(
				<div className="Todos">
				  <Todos todos={this.state.todos} />
				</div>
			  );
		}
	}

export default App
