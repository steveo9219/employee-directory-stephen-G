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
		const url = "https://randomuser.me/api/?results=20&nat=us";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ employees: data.results, loaded: true });
	}

	handleChange = (e) => {
		this.setState(
			{
				filteredEmployees: [],
				inputValue: e.target.value,
			},
			(e) => this.filterEmployees(e)
		);
	};

	filterEmployees = (e) => {
		if (this.state.inputValue === "") {
			this.setState({ filteredEmployees: [] });
			return;
		}
		this.state.employees.forEach((employee) => {
			if (
				employee.name.first
					.toLowerCase()
					.includes(this.state.inputValue.toLowerCase())
			) {
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
