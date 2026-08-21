function FormComponent({ texto, adicionarTarefa, setTexto }) {
	return (
		<div className="box">
			<div className="formulario">
				<input
					type="text"
					value={texto}
					onChange={(e) => setTexto(e.target.value)}
					placeholder="Digite uma tarefa"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							adicionarTarefa();
						}
					}}
				></input>
			</div>

			<p className="digitado">Você digitou: {texto}</p>

			<button onClick={adicionarTarefa}>Adicionar</button>
		</div>
	);
}

export default FormComponent;
