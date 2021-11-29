import React from "react";
import Button from "../Button";

const Numpad = () => {
	const buttons = [
		{ value: "1", id: "number" },
		{ value: "2", id: "number" },
		{ value: "3", id: "number" },
		{ value: "4", id: "number" },
		{ value: "5", id: "number" },
		{ value: "6", id: "number" },
		{ value: "7", id: "number" },
		{ value: "8", id: "number" },
		{ value: "9", id: "number" },
		{ value: "+", id: "number" },
		{ value: "*", id: "number" },
		{ value: "/", id: "number" },
		{ value: "-", id: "number" },
		{ value: "=", id: "show_result" },
		{ value: "del", id: "delete" },
		{ value: "reset", id: "reset" },
	];
	return (
		<div>
			{buttons.map((item, key) => (
				<Button key={key} value={item.value} id={item.id} />
			))}
		</div>
	);
};

export default Numpad;
