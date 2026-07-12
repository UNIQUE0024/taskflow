let tasks = [];
let currentFilter = 'all';
let nextId = 1;


function getFilteredTasks() {
  if (currentFilter === 'active') return tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') return tasks.filter(t => t.completed);
  return tasks;
}

function addTask(text, cost) {
  tasks.push({ id: nextId++, text, cost: cost || 0, completed: false, priority: 'normal' });
  render();
}
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  render();
}
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  render();
}
function render() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}" class="toggle-box">
      <span class="task-text">${task.text}</span>
      <span class="task-cost">$${task.cost.toFixed(2)}</span>
      <button class="delete-btn" data-id="${task.id}">✕</button>
    `;
    list.appendChild(li);
  });
  document.getElementById('task-count').textContent = `${task.length} tasks`;
  updateBudget();
}

function getPriorityLabel(priority) {
  if (priority === 'high') return 'High';
  if (priority === 'low') return 'Low';
  return 'Normal';
}


document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('task-input');
  const costInput = document.getElementById('task-cost');
  addTask(input.value.trim(), parseFloat(costInput.value));
  input.value = ''; costInput.value = '';
});
document.getElementById('task-list').addEventListener('click', (e) => {
  const id = Number(e.target.dataset.id);
  if (e.target.classList.contains('toggle-box')) toggleTask(id);
  if (e.target.classList.contains('delete-btn')) deleteTask(id);
});

<span class="task-priority">${getPriorityLabel(task.priority)}</span>
render();
