import { useState } from "react";
import "./App.css";

function App() {

    const [texto, setTexto] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa() {
        if (texto.trim() != "") {
            const tarefaJaExiste = tarefas.find(tarefa => tarefa.texto === texto)
            if (tarefaJaExiste) {
                alert('Tarefa ja existe')
                return
            }

            const tarefa = {
                texto: texto,
                concluida: false
            }

            setTarefas([...tarefas, tarefa])

            setTexto("")
            
        }
    }

    function limparTarefas() {
        setTarefas([])
    }

    function removerTarefa(indiceRemover) {
        const listaAtualizada = tarefas.filter(
            (tarefa, indice) => indice !== indiceRemover
        )

        setTarefas(listaAtualizada)
    }

    function concluirTarefa(indiceSelecionado) {
        const listaAtualizada = tarefas.map(
            (tarefa, indice) => {
                if (indice === indiceSelecionado) {
                    return {
                        ...tarefas,
                        concluida: !tarefa.concluida
                    }
                }

                return tarefa
            }
        )
        setTarefas(listaAtualizada)
    }

    return(
        <div className="container">
            <h1>Lista de Tarefas</h1>

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

            {
                tarefas.length === 0 &&
                <p className="vazio">Nenhuma tarefa cadastrada</p> 
            }

            <ul className="lista">
                {tarefas.map((tarefa, indice) => (
                    <li className="item" key={indice}>
                        <span className={
                                tarefa.concluida ? 'concluida' : ''
                            }>{tarefa.texto}</span>

                        <div className="acoes">
                            <button onClick={() => concluirTarefa(indice)}>
                                {tarefa.concluida ? 'Desfazer' : 'Concluir'}
                            </button>

                            <button onClick={() => removerTarefa(indice)}>
                                X
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
                
            <p className="digitado">Total de tarefas: {tarefas.length}</p>

            <button onClick={limparTarefas}>Limpar Tarefas</button>

        </div>
    );
}

export default App;