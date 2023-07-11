import "./App.css";
import Contador from "./components/Contador";

function App() {
	return (
		<>
			<div className="App">
				<Contador valorInicial={9876} />
				<Contador />
			</div>
		</>
	);
}

export default App;
