/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
type Componente = {
	new (...args: any[]): {
		render(): any;
	};
};

export default function logRender<C extends Componente>(componente: C) {
	return class extends componente {
		render() {
			console.log("Renderizando o componente...");
			const r: any = super.render();
			console.log("Renderizacao concluida!");
			return r;
		}
	};
}
