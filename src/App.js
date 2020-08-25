import React from "react";
import "./App.css";
import Header from "./components/Header";
import Employee from "./components/Employee";
import TableRowNames from "./components/TableRowNames";

class App extends React.Component {
	state = {
		employees: [],
		loaded: false,
		inputValue: "",
		filteredEmployees: [],
	};

	async componentDidMount() {
		const url = "https://api.randomuser.me/?results=5";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ employees: data.results, loaded: true });
	}

	handleChange = (e) => {
		this.setState({
			inputValue: e.target.value,
		});
		console.log(e.target.value);
	};

	handleClick = (e) => {
		this.state.employees.forEach((employee) => {
			console.log(employee);
			if (employee.name.first.includes(this.state.inputValue)) {
				console.log("working");
				this.setState({
					filteredEmployees: [...this.state.filteredEmployees, employee],
					inputValue: "",
				});
			}
		});
	};

	render() {
		if (!this.state.loaded) {
			return <div>loading...</div>;
		}
		return (
			<div className="App">
				<Header />
				<input type="text" onChange={this.handleChange}></input>
				<button onClick={this.handleClick}>Search</button>
				<TableRowNames />
				{this.state.filteredEmployees.length > 0
					? this.state.filteredEmployees.map((employee) => {
							return <Employee person={employee} />;
					  })
					: this.state.employees.map((employee) => {
							return <Employee person={employee} />;
					  })}
			</div>
		);
	}
}
export default App;
