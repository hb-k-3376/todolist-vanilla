// input value 값 가져오기
const getInputValue = () =>{
    const input =  document.querySelector('.todo-form input[type="text"]')//현재 input 고유하다고 가정
    return input.value.trim();
}

// li 추가하기
function createItem(value, id) {
  const li = document.createElement('li');
  li.textContent = value;
  li.setAttribute('data-id', id); // `<li data-id="${id}">${value}</li>`;
  return li;
}

// li 삭제하기
function removeItem(id){
    const li = document.querySelector(`li[data-id]="${id}"`)
    li.remove();
}

// list 그리기
function renderList(){
    const ul = document.getElementById('todoList')
    ul.innerHTML='';
    todoList.forEach(todo=>{
        const li = createItem(todo.text, todo.id)
        ul.appendChild(li);
    })
}
// 초기 렌더링
document.addEventListener('DOMContentLoaded', renderList);


// localStorage에서 가져오기
let todoList = JSON.parse(localStorage.getItem("todos")) || [];
