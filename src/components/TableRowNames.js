import React from "react";

class TableRowNames extends React.Component {
	render() {
		return (
			<div className="Header">
				<table>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>DOB</th>
					</tr>
				</table>
			</div>
		);
	}
}

export default TableRowNames;
