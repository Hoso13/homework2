let todoDescEl = document.querySelector('.form__desc')
let todoSubmitBtn = document.querySelector('.form__btn')
let todoList = document.querySelector('.list')

function createTodo() {
	let todo = document.createElement('li')
	todo.className = 'list-item'

	let todoDesc = document.createElement('h2')
	todoDesc.classList = 'list-item__title'
	todoDesc.innerText = todoDescEl.value

	let todoCheck = document.createElement('input')
	todoCheck.classList = 'list-item__check'
	todoCheck.type = 'checkbox'

	todoList.appendChild(todo)
	todo.appendChild(todoCheck)
	todo.appendChild(todoDesc)

	todoDescEl.value = ''

	todoCheck.addEventListener("change", (e)=>{
		if(e.target.checked){
			todoDesc.style.textDecoration = 'line-through'
		} else{
			todoDesc.style.textDecoration = 'none'
		}
	})
}

todoSubmitBtn.addEventListener('click', e => {
	e.preventDefault()
	createTodo()
})

todoDescEl.addEventListener('input', () => {
	if (!todoDescEl.value.trim()) {
		todoSubmitBtn.setAttribute('disabled', '')
	} else {
		todoSubmitBtn.removeAttribute('disabled', '')
	}
})
