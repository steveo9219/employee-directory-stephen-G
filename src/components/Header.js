import React from "react";
import "./Header.css";

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<header className="App-header">
					<h1>Employee Directory</h1>
					<p>"Where you go to find your Employees using the power of React!"</p>
				</header>
			</div>
		);
	}
}

export default Header;
