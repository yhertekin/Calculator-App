import React from "react";

import { useCalculator } from "../../context/CalculatorContext";

const Output = () => {
	const { input, result } = useCalculator();
	return (
		<div>
			<span>{result}</span>
			<span>{input}</span>
		</div>
	);
};

export default Output;
