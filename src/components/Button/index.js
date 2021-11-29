import React from "react";

import { useCalculator } from "../../context/CalculatorContext";

const Button = ({ value, id }) => {
	const { buttonHandler } = useCalculator();
	return (
		<div>
			<button onClick={(e) => buttonHandler(e, value)} id={id}>
				{value}
			</button>
		</div>
	);
};

export default Button;
