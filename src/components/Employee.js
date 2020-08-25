import React from "react";

class Employee extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<table>
					<tr>
						<td>
							<img src={this.props.person.picture.large} />
						</td>
						<td>
							{this.props.person.name.first} {this.props.person.name.last}
						</td>
						<td>{this.props.person.phone}</td>
						<td>{this.props.person.email}</td>
						<td>{this.props.person.dob.date}</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default Employee;
