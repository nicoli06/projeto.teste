// Selecionando os elementos da página
const addButton = document.getElementById('add-task-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('tasks');

// Função para adicionar uma tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Adiciona o botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        // Limpa o campo de input
        taskInput.value = '';
    }
}

// Adiciona a tarefa ao clicar no botão
addButton.addEventListener('click', addTask);

// Adiciona a tarefa ao pressionar Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
