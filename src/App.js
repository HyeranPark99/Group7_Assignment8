import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";

class App extends Component {
	constructor(props) {
		super(props);

		//initialize the color to light gray one cell
		const defaultColor = "light-gray-color";
		const initialRow = 1;
		const initialCol = 1;


		const array = Array.from({ length: initialRow }).map(x =>
			Array.from({ length: initialCol }).map(x => defaultColor)

		);

		this.state = {
			defaultColor: defaultColor,
			currentColor: "light-gray-color",
			colorArray: array
		};

	}

	// add rows 
	addRow = () => {
		const newRow = Array.from({ length: this.state.colorArray[0].length }).map(
			x => this.state.defaultColor
		);
		this.setState(
			{
				colorArray: this.state.colorArray.concat([newRow])
			},

		);
	};

	// add columns 
	addCol = () => {
		let newArr = this.state.colorArray.map(row => {
			return row.concat(this.state.defaultColor);
		});
		this.setState({
			colorArray: newArr
		});
	};

	// remove rows
	removeRow = () => {
		if (this.state.colorArray.length > 1) {
			let newArr = this.state.colorArray.slice(0, -1);
			this.setState(
				{
					colorArray: newArr
				},
			);
		} else {
			alert("Minimum rows achieved");
		}
	};

	// remove columns
	removeCol = () => {
		if (this.state.colorArray[0].length > 1) {
			let newArr = this.state.colorArray.map(row => {
				return row.slice(0, -1);
			});
			this.setState({
				colorArray: newArr
			});
		} else {
			alert("Minimum cols achieved");
		}
	};

	// update colors
	updateSelectedColor = e => {
		this.setState({
			currentColor: e.target.value
		});
	};

	// fill all cells
	fillAll = () => {
		let newArr = this.state.colorArray.map(row =>
			row.map(() => this.state.currentColor)
		);
		this.setState({
			colorArray: newArr
		});
	};

	// clear the color from cells
	clearAll = () => {
		let newArr = this.state.colorArray.map(row =>
			row.map(() => this.state.defaultColor)
		);
		this.setState({
			colorArray: newArr
		});
	};

	//fill uncolored cells
	fillUncolored = () => {
		const { defaultColor, currentColor, colorArray } = this.state;
		let newArr = colorArray;
		for (let i = 0; i < colorArray.length; ++i) {
			for (let j = 0; j < colorArray[0].length; ++j) {
				if (newArr[i][j] === defaultColor) {
					newArr[i][j] = currentColor;
				}
			}
		}
		this.setState({
			colorArray: newArr
		});
	};

	// this changes color on click
	handleClick = (row, col) => {
		const { currentColor, colorArray } = this.state;
		let newArr = colorArray;
		for (let i = 0; i < colorArray.length; ++i) {
			for (let j = 0; j < colorArray[0].length; ++j) {
				if (i === row && j === col) {
					newArr[i][j] = currentColor;
				}
			}
		}
		this.setState({
			colorArray: newArr
		});
	};


	render() {
		return (
			<div id="parent-container">
				<h1>ReactJS Grid Coloring</h1>
				<h3>by: Farai Mutukumira, Hyeran Park, Lubna Khalid</h3>

				<span>

					<button id="row-btn" onClick={this.addRow}>Add row</button>
					<button id="rmv-row-btn" onClick={this.removeRow}> Remove row</button>
					<button id="column-btn" onClick={this.addCol}>Add column</button>
					<button id="rmv-column-btn" onClick={this.removeCol}> Remove column</button>

					<label>Select color:</label>
					<select
						value={this.state.currentColor}
						onChange={this.updateSelectedColor}
					>
						<option id="lightGray" value="light-gray-color">
							Light Gray
						</option>
						<option id="greenyellow" value="green-yellow-color">
							Green yellow
						</option>

						<option id="forest" value="forest-color">
							Forest
						</option>
						<option id="gold" value="gold-color">
							Gold
						</option>
						<option id="blue" value="blue-color">
							Blue
						</option>
						<option id="green" value="green-color">
							Green
						</option>
						<option id="yellow" value="yellow-color">
							Yellow
						</option>
						<option id="orange" value="orange-color">
							Orange
						</option>
						<option id="red" value="red-color">
							Red
						</option>
					</select>
					<div id="preview" class={this.state.currentColor}></div>
				</span>

				<button id="fill-all" onClick={this.fillAll}>Fill all</button>
				<button id="clear-all" onClick={this.clearAll}>Clear all</button>
				<button id="fill-only" onClick={this.fillUncolored}>Fill only uncolored</button>

				<Table
					numRows={this.state.colorArray.length}
					numCols={this.state.colorArray[0].length}
					colorArray={this.state.colorArray}
					handleClick={this.handleClick}
				/>



			</div>
		);
	}
}

export default App;