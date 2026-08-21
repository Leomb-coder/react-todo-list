import ItemComponent from "./ItemComponent";

function ListComponents({ tarefas, removerTarefa, concluirTarefa }) {
	return (
		<ul className="lista">
			{tarefas.map((tarefa, indice) => (
				<ItemComponent
					key={indice}
					tarefa={tarefa}
					indice={indice}
					removerTarefa={removerTarefa}
					concluirTarefa={concluirTarefa}
				/>
			))}
		</ul>
	);
}

export default ListComponents;
