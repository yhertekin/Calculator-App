import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const buttonHandler = (e, value) => {
		const { id } = e.target;

		if (id === "number") {
			setResult("");
			setInput((prevState) => prevState + value);
		} else if (id === "show_result") {
			if (
				!"+*/.".includes(input[0]) &&
				!"*+-/.".includes(input[input.length - 1])
			) {
				setResult(eval(input));
				setInput("");
			} else {
				setResult("Invalid Input");
			}
		} else if (id === "delete") {
			setInput((prevState) => prevState.slice(0, -1));
		} else if (id === "reset") {
			setInput("");
			setResult("");
		}
	};

	const values = { result, input, buttonHandler };

	return (
		<CalculatorContext.Provider value={values}>
			{children}
		</CalculatorContext.Provider>
	);
};

export const useCalculator = () => useContext(CalculatorContext);
