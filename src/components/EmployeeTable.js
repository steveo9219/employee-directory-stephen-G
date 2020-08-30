import React from "react";

class EmployeeTable extends React.Component {
	render() {
		return (
			<div>
				<table>
					<tr style={{ color: "#477998" }}>
						<th>Employee Picture</th>
						<th>Name</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th>Date of Birth</th>
					</tr>
					<td>
						<img alt="employee" src={this.props.person.picture.large} />
					</td>
					<td>
						{this.props.person.name.first} {this.props.person.name.last}
					</td>
					<td>{this.props.person.phone}</td>
					<td>{this.props.person.email}</td>
					<td>{this.props.person.dob.date}</td>
				</table>
				<br></br>
			</div>
		);
	}
}

export default EmployeeTable;
