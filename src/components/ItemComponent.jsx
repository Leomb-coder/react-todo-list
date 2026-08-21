import ButtonComponent from "./ButtonComponent";

function ItemComponent({ tarefa, indice, removerTarefa, concluirTarefa }) {
	return (
		<li className="item" key={indice}>
			<span className={tarefa.concluida ? "concluida" : ""}>
				{tarefa.texto}
			</span>

			<div className="acoes">

				<ButtonComponent
					onClick={() => concluirTarefa(indice)}
					buttonText={tarefa.concluida ? "Desfazer" : "Concluir"}
				/>

				<ButtonComponent
					onClick={() => removerTarefa(indice)}
					buttonText={"X"}
				/>
			</div>
		</li>
	);
}

export default ItemComponent;
