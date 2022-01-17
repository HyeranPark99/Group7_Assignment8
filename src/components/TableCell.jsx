import React from "react";

function TableCell(props) {
	const colorEl = props.colorArray[props.row][props.col];
	return (
		<td
			className={colorEl}
			onClick={() => props.handleClick(props.row, props.col)}
		>
		</td>
	);
}

export default TableCell;