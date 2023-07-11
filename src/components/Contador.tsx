import { Component } from "react";
import ContadorValor from "./ContadorValor";
import logRender from "../decorators/logRender";

interface IContadorProps {
	valorInicial?: number;
}

interface IContadorState {
	valor: number;
}

@logRender
class Contador extends Component<IContadorProps, IContadorState> {
	state = { valor: this.props.valorInicial || 0 };

	private setValor = (delta: number) => {
		this.setState({ valor: this.state.valor + delta });
	};

	render() {
		return (
			<div>
				<ContadorValor contador={this.state.valor} />
				<button onClick={() => this.setValor(10)}>+</button>
				<button onClick={() => this.setValor(-10)}>-</button>
			</div>
		);
	}
}

export default Contador;
