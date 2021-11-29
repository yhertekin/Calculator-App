import "./App.css";
import Header from "./components/Header";
import Numpad from "./components/Numpad";
import Output from "./components/Output";
import { CalculatorProvider } from "./context/CalculatorContext";

function App() {
	return (
		<CalculatorProvider>
			<div className="App">
				<Header />
				<Output />
				<Numpad />
			</div>
		</CalculatorProvider>
	);
}

export default App;
