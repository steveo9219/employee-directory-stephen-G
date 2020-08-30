import React from "react";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";

import "materialize-css/dist/css/materialize.min.css";

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
				<p>
					Please use the search box <strong>below</strong> to find a name you
					would like to look up. Then delete your text to look up a different
					person! No need to use a search button with the power of React!
				</p>
				<input
					placeholder={"Type Employee's Name Here"}
					type="text"
					onChange={this.handleChange}
				></input>
				{this.state.filteredEmployees.length > 0
					? this.state.filteredEmployees.map((employee) => {
							return <EmployeeTable person={employee} />;
					  })
					: this.state.employees.map((employee) => {
							return <EmployeeTable person={employee} />;
					  })}
			</div>
		);
	}
}
export default App;
