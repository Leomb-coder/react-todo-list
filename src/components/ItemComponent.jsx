function ItemComponent({ tarefa, indice, removerTarefa, concluirTarefa }) {
	return (
		<li className="item" key={indice}>
			<span className={tarefa.concluida ? "concluida" : ""}>
				{tarefa.texto}
			</span>

			<div className="acoes">
				<button onClick={() => concluirTarefa(indice)}>
					{tarefa.concluida ? "Desfazer" : "Concluir"}
				</button>

				<button onClick={() => removerTarefa(indice)}>X</button>
			</div>
		</li>
	);
}

export default ItemComponent;
