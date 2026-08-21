import { useState, useEffect } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import ListComponents from "./components/ListComponent";

function App() {
	const [texto, setTexto] = useState("");
	const [tarefas, setTarefas] = useState(() => {
		const tarefasSalvas = localStorage.getItem(
			"tarefas"
		)
		return tarefasSalvas ? JSON.parse(tarefasSalvas) : []
	});

	useEffect(() => {
		localStorage.setItem(
			"tarefas",
			JSON.stringify(tarefas)
		)
	}, [tarefas]);

	function adicionarTarefa() {
		if (texto.trim() != "") {
			const tarefaJaExiste = tarefas.find(
				(tarefa) => tarefa.texto === texto,
			);
			if (tarefaJaExiste) {
				alert("Tarefa ja existe");
				return;
			}

			const tarefa = {
				texto: texto,
				concluida: false,
			};

			setTarefas([...tarefas, tarefa]);

			setTexto("");
		}
	}

	function limparTarefas() {
		setTarefas([]);
	}

	function removerTarefa(indiceRemover) {
		const listaAtualizada = tarefas.filter(
			(tarefa, indice) => indice !== indiceRemover,
		);

		setTarefas(listaAtualizada);
	}

	function concluirTarefa(indiceSelecionado) {
		const listaAtualizada = tarefas.map((tarefa, indice) => {
			if (indice === indiceSelecionado) {
				return {
					...tarefas,
					concluida: !tarefa.concluida,
				};
			}

			return tarefa;
		});
		setTarefas(listaAtualizada);
	}

	return (
		<div className="container">
			<h1>Lista de Tarefas</h1>

			{tarefas.length === 0 && (
				<p className="vazio">Nenhuma tarefa cadastrada</p>
			)}

			<FormComponent
				texto={texto}
				adicionarTarefa={adicionarTarefa}
				setTexto={setTexto}
			/>

			<ListComponents
				tarefas={tarefas}
				removerTarefa={removerTarefa}
				concluirTarefa={concluirTarefa}
			/>

			<p className="digitado">Total de tarefas: {tarefas.length}</p>

			<button onClick={limparTarefas}>Limpar Tarefas</button>
		</div>
	);
}

export default App;
