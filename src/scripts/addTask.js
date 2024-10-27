// Adiciona evento ao formulário
document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Pega os valores dos campos de entrada
    const task = document.getElementById("task").value;
    const description = document.getElementById("description").value;

    // Chamamos a função de adicionar a tarefa
    addTask(task, description);
    
    // Limpa os campos de entrada
    document.getElementById("task").value = "";
    document.getElementById("description").value = "";
});

// Função para adicionar a tarefa à lista
function addTask(task, description) {
    if (task.trim() && description.trim()) {
        // Cria novos elementos para a tarefa e descrição
        const dt = document.createElement("dt");
        dt.textContent = task;

        const dd = document.createElement("dd");
        dd.textContent = description;

        // Adiciona os elementos à lista de tarefas no DOM
        document.getElementById("task-list").appendChild(dt);
        document.getElementById("task-list").appendChild(dd);
    } else {
        alert("Please fill in both the task and description fields.");
    }
}
