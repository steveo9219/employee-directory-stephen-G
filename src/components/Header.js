import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<header className="App-header">
					<h1>Employee Directory</h1>
					<p>Here are the list of the employees we have</p>
				</header>
			</div>
		);
	}
}

export default Header;
