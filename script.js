// input value 값 가져오기
const getInputValue = () => {
  const input = document.querySelector('.input'); //현재 input 고유하다고 가정
  return input.value.trim();
};

const clearInput = () => {
  const input = document.querySelector('.input');
  input.value = '';
};

/**
 *객체 생성 함수
 * @param {string} text
 * @returns {object} todo객체 생성
 */
const createTodo = (text) => {
  let now = new Date();

  if (typeof text !== 'string') {
    throw new TypeError('문자열을 입력해 주세요!');
  }
  return {
    id: now.toISOString(),
    // id: todoList.length,
    text,
    date: now.toLocaleDateString('ko-KR'), // date : 2025. 6. 8.
    time: now.toLocaleTimeString('ko-KR'), // 오후 5:01:21
    completed: false,
  };
};

/**
 *배열에 todo객체 추가 함수
 * @param {object} todo
 * @param {Array} todoList
 * @returns {Array} todoList
 */
const addTodoList = (todo, toDoList) => {
  if (!Object.keys(todo).includes('id')) {
    throw new TypeError('배열에 추가하는 todo는 object여야 합니다');
  }
  toDoList.push(todo);
  return toDoList;
};

/**
 *배열에서 해당 id와 일치하는 항목을 제거
 * @param {string} id
 * @param {Array} toDoList
 * @returns {Array} toDoList
 */
const removeItemArray = (id) => {
  if (typeof id !== 'string') {
    throw new TypeError('id는 문자열이여야 합니다.');
  }

  if (!Array.isArray(toDoList)) {
    throw new TypeError('todoList는 배열이여야 합니다.');
  }

  toDoList = toDoList.filter((item) => item.id !== id);
  return toDoList;
};

let toDoList = [];

/**
 * todo-list의 완료한 건수와 전체건수의 퍼센트를 프로그래스바에 그린다.
 * @param {array} todoList
 * @returns {void}
 */
const calcProgress = (toDoList) => {
  const count = toDoList.filter((obj) => obj.completed === true).length;
  const total = toDoList.length;
  const progress = document.querySelector('.progress');
  const round = 2 * Math.PI * 25;
  progress.style.strokeDashoffset = round - (round * count) / total;
  countingPercent(Math.round((count / total) * 100));
};

/**
 *todo list 배열에서 선택한 todo객체의 status 변경
 * @param {string} id
 * @param {Array} toDoList
 * @returns {Array} 항목이 제거된 배열
 */
const changeTodoStatus = (id) => {
  if (typeof id !== 'string') {
    throw new TypeError('id는 문자열이여야 합니다.');
  }

  if (!Array.isArray(toDoList)) {
    throw new TypeError('todoList는 배열이여야 합니다.');
  }

  toDoList = toDoList.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });

  return toDoList;
};

/**
 * 퍼센트 카운팅 애니매이션 효과를 넣는다
 * @param {number} todo-list의 완료 퍼센트
 * @returns {void}
 */
const countingPercent = (percent) => {
  const element = document.querySelector('.wrap_txt');
  if (percent == 0) {
    element.innerHTML = '0%';
  } else {
    let time = 0;

    for (let i = 0; i <= percent; i++) {
      setTimeout(() => {
        element.innerHTML = i + '%';
      }, 20 * time);
      time++;
    }
  }
};
const handleRemoveTodo = (id) => {
  removeItemArray(id);
  setTodosListLocalStorage();
  init();
};

// // li 삭제하기
// function removeItem(id){
//     const li = document.querySelector(`li[data-id]="${id}"`)
//     li.remove();
// }

// li 추가하기
function createItem(todo) {
  const li = document.createElement('li');
  li.setAttribute('data-id', todo.id); // `<li data-id="${id}">${value}</li>`;
  li.className = 'todo';
  li.innerHTML =
    `<div class="todo-forward">
                  <input id="${todo.id}" type="checkbox" value="${todo.completed}" onchange='handleChangeToDoStatus("${todo.id}", "${todo.completed}")' />
                    <span class="todo-title">${todo.text}</span>
                  </div>` +
    `<div class="todo-rare">
                    <span class="todo-time">${todo.time}</span>
                    <button type="button" class="remove-todo" onclick='handleRemoveTodo("${todo.id}")'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M11.7692 10.6334C11.9607 10.8406 12.0646 11.1138 12.0592 11.3959C12.0537 11.678 11.9392 11.947 11.7398 12.1466C11.5404 12.3461 11.2714 12.4608 10.9894 12.4665C10.7073 12.4721 10.434 12.3684 10.2267 12.177L6.06231 8.01268L1.89795 12.177C1.79814 12.285 1.67755 12.3717 1.54341 12.4319C1.40928 12.4922 1.26436 12.5247 1.11735 12.5275C0.970344 12.5304 0.824272 12.5035 0.687897 12.4486C0.551522 12.3936 0.427653 12.3116 0.323718 12.2076C0.219783 12.1036 0.137924 11.9797 0.0830483 11.8833C0.0281731 11.7069 0.00141257 11.5608 0.00437154 11.4138C0.00733051 11.2668 0.039948 11.1219 0.100268 10.9878C0.160588 10.8537 0.247368 10.7332 0.355404 10.6334L4.51976 6.46907L0.355404 2.30683C0.247368 2.20709 0.160588 2.08656 0.100268 1.95247C0.039948 1.81838 0.00733051 1.67348 0.00437154 1.52647C0.00141257 1.37947 0.0281731 1.23338 0.0830483 1.09696C0.137924 0.960551 0.219783 0.836625 0.323718 0.732619C0.427653 0.628613 0.551522 0.546668 0.687897 0.491699C0.824272 0.436731 0.970344 0.40987 1.11735 0.412728C1.26436 0.415586 1.40928 0.448103 1.54341 0.508331C1.67755 0.568559 1.79814 0.655257 1.89795 0.763224L6.06231 4.92652L10.2267 0.762164C10.434 0.570784 10.7073 0.467065 10.9894 0.472743C11.2714 0.478421 11.5404 0.593054 11.7398 0.79262C11.9392 0.992186 12.0537 1.2612 12.0592 1.54327C12.0646 1.82535 11.9607 2.09861 11.7692 2.30577L7.60486 6.46907L11.7692 10.6334Z" fill="#FFC1C1"/>
                      </svg>
                    </button>
                  </div>`;

  return li;
}

// list 그리기
function renderList(toDoList) {
  const ul = document.querySelector('.todo-list');
  ul.innerHTML = '';
  toDoList.forEach((todo) => {
    const li = createItem(todo);
    ul.appendChild(li);
  });
}

// /**
//  * localstorage에서 todo를 가져오는 함수.
//  * @param {string} todo-list ID
//  * @returns {array} todo-list array
//  */
// const getTodosListLocalStorage = (todosId) => {
//   const _todoList = JSON.parse(localStorage.getItem('Todos')) ?? [];
//   return _todoList.filter((todos) => todos.id === todosId);
// };
/**
 * localstorage에서 todo를 가져오는 함수.
 * @param {string} todo-list ID
 * @returns {array} todo-list array
 */
const getTodosListLocalStorage = () => {
  return JSON.parse(localStorage.getItem('Todos')) ?? [];
};

/**
 * localstoage에 todo를 넣는 함수.
 * @param {object} todo-list data
 * @returns {void}
 */
const setTodosListLocalStorage = () => {
  // const _todoList = JSON.parse(localStorage.getItem('Todos')) ?? [];
  // _todoList.push(todo);
  localStorage.setItem('Todos', JSON.stringify(toDoList));
};

const init = () => {
  // 로컬 스토리지에서 todo List 불러오기
  toDoList = getTodosListLocalStorage();

  // 초기 리스트 render
  renderList(toDoList);

  // 프로그레스 바
  calcProgress(toDoList);
};

const handleAddTodo = (e) => {
  e.preventDefault();
  const value = getInputValue();
  const todo = createTodo(value);

  addTodoList(todo, toDoList);

  setTodosListLocalStorage(toDoList);

  createItem(todo);
  clearInput();
  init();
};

const handleChangeToDoStatus = (id, completed) => {
  console.log(completed);
  changeTodoStatus(id);

  const el = document.getElementById(id);

  setTodosListLocalStorage();
  init();
};

document.addEventListener('DOMContentLoaded', init);
const form = document.querySelector('.input-section');
form.addEventListener('submit', handleAddTodo);
