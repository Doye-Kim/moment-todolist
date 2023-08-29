const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

let toDos = [];

const TODOS_KEY = 'todos';

function saveToDos(){
	localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(event){
	const li = event.target.parentElement;
	console.log(li.id);
	toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
	li.remove();
	saveToDos();
}

function paintToDo(newTodoObj){
	const li = document.createElement('li');
	li.id = newTodoObj.id;
	const span = document.createElement('span');
	const deleteBtn = document.createElement('button');

	span.innerText = newTodoObj.text;
	deleteBtn.innerText = '❌';
	li.appendChild(span);
	li.appendChild(deleteBtn);

	toDoList.appendChild(li);
	deleteBtn.addEventListener('click', deleteToDo);
}

function handleToDoSubmit(){
	event.preventDefault();
	const newTodo = toDoInput.value;
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();

	toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos){
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	console.log(parsedToDos);
	parsedToDos.forEach(paintToDo);

}