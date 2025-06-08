/**
 * input 태그에서 text value 가져오는 함수
 * @returns {string} text value
 */
const getInputText = () => document.querySelector('.input').value.trim();

/**
 * 성공적으로 todo 추가 시 input clear
 * @returns
 */
const clearInput = () => {
  document.querySelector('.input').value = '';
};

/**
 * todo를 추가할 때, 사용하는 createTodo 함수
 * Input으로 투두를 추가할때 사용한다.
 * @param {string} text input에서 받아오는 text 값
 * @returns {object} 객체
 */
const createTodo = (text) => ({
  id: Date.now(),
  text: text.trim(),
  completed: false,
  createdAt: new Date().toISOString(),
});

/**
 * ToDo를 새로 만들면 기존 todo에 저장할때 사용하는 함수
 * @param {object[]} todos 기존 todo list
 * @param {object} newTodo  추가할 새로 생성된 투두
 * @returns {object[]}
 */
const addToDoArray = (todos, newTodo) => [...todos, newTodo];

/**
 *  todo list의 todo 상태를 체크하는 함수
 * @param {object[]} todos 저장된 todo list
 * @returns todo list 상태 check
 */
const checkToDoStatus = (todos) => ({
  total: todos.length,
  active: todos.filter(({ completed }) => !completed).length,
  completed: todos.filter(({ completed }) => !completed).length,
});

/**
 * 새로운 todo가 추가 되면 ui에 rendering 하는 함수
 * @param {object} todo
 * @returns {element} 생성된 li 태그
 */
const renderTodo = (todo) => {
  const li = document.createElement('li');
  li.className = 'todo';

  li.innerHTML = `
    <div class="todo-foward">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
        <path d="M6.75 15L10.5 18.75L16.75 11.25M1.75 21.0002V9.00025C1.75 7.60011 1.75 6.89953 2.02249 6.36475C2.26216 5.89434 2.64434 5.51216 3.11475 5.27249C3.64953 5 4.35011 5 5.75025 5H17.7502C19.1504 5 19.8495 5 20.3843 5.27249C20.8546 5.51216 21.2381 5.89434 21.4777 6.36475C21.75 6.899 21.75 7.59874 21.75 8.99614V21.0045C21.75 22.4019 21.75 23.1006 21.4777 23.6349C21.2381 24.1052 20.8546 24.4881 20.3843 24.7277C19.85 25 19.1513 25 17.7539 25H5.74614C4.34874 25 3.649 25 3.11475 24.7277C2.64434 24.4881 2.26216 24.1052 2.02249 23.6349C1.75 23.1001 1.75 22.4004 1.75 21.0002Z" stroke="#93CCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="todo-title">${todo.text}</span>
    </div>
    <div class="todo-rare">
      <span class="todo-time">${new Date(todo.createdAt).toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      })}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M11.7692 10.6334C11.9607 10.8406 12.0646 11.1138 12.0592 11.3959C12.0537 11.678 11.9392 11.947 11.7398 12.1466C11.5404 12.3461 11.2714 12.4608 10.9894 12.4665C10.7073 12.4721 10.434 12.3684 10.2267 12.177L6.06231 8.01268L1.89795 12.177C1.79814 12.285 1.67755 12.3717 1.54341 12.4319C1.40928 12.4922 1.26436 12.5247 1.11735 12.5275C0.970344 12.5304 0.824272 12.5035 0.687897 12.4486C0.551522 12.3936 0.427653 12.3116 0.323718 12.2076C0.219783 12.1036 0.137924 11.9797 0.0830483 11.8833C0.0281731 11.7069 0.00141257 11.5608 0.00437154 11.4138C0.00733051 11.2668 0.039948 11.1219 0.100268 10.9878C0.160588 10.8537 0.247368 10.7332 0.355404 10.6334L4.51976 6.46907L0.355404 2.30683C0.247368 2.20709 0.160588 2.08656 0.100268 1.95247C0.039948 1.81838 0.00733051 1.67348 0.00437154 1.52647C0.00141257 1.37947 0.0281731 1.23338 0.0830483 1.09696C0.137924 0.960551 0.219783 0.836625 0.323718 0.732619C0.427653 0.628613 0.551522 0.546668 0.687897 0.491699C0.824272 0.436731 0.970344 0.40987 1.11735 0.412728C1.26436 0.415586 1.40928 0.448103 1.54341 0.508331C1.67755 0.568559 1.79814 0.655257 1.89795 0.763224L6.06231 4.92652L10.2267 0.762164C10.434 0.570784 10.7073 0.467065 10.9894 0.472743C11.2714 0.478421 11.5404 0.593054 11.7398 0.79262C11.9392 0.992186 12.0537 1.2612 12.0592 1.54327C12.0646 1.82535 11.9607 2.09861 11.7692 2.30577L7.60486 6.46907L11.7692 10.6334Z" fill="#FFC1C1"/>
      </svg>
    </div>
  `;

  return li;
};

/**
 * 로컬 저장소에 저장
 * @param {object[]} todos
 * @returns
 */
const saveToStorage = (todos) => localStorage.setItem('todos', JSON.stringify(todos));

/**
 * LocalStorage에서 todo 가져오기
 * @returns {object[]} todos
 */
const getToDoFromStorage = () => {
  const todosString = localStorage.getItem('todos');
  // 저장된 데이터가 없으면 빈 배열 반환
  if (!todosString) {
    return [];
  }
  // JSON 파싱해서 배열로 변환
  const todos = JSON.parse(todosString);
  // 배열이 아니면 빈 배열 반환 (안전장치)
  return Array.isArray(todos) ? todos : [];
};

// 전역 변수
let todos = getToDoFromStorage();

/**
 * renderTodo 으로 생성된 element 태그 todo-list에 마지막에 붙이기
 * @param {element} element
 */
const appendToList = (element) => document.querySelector('.todo-list').appendChild(element);

/**
 * 추가 버튼 클릭시 이벤트
 * @param {event} e submit button 이벤트 객체
 */
const handleCreateTodo = (e) => {
  e.preventDefault();

  // 입력값 가져오기
  const text = getInputText();
  if (!text) {
    alert('할 일을 입력해주세요!');
    return;
  }

  // 새 todo 생성
  const newTodo = createTodo(text);

  // 기존 배열에 추가
  todos = addToDoArray(todos, newTodo);

  // 로컬스토리지에 저장
  saveToStorage(todos);

  // 화면에 렌더링
  const todoElement = renderTodo(newTodo);
  appendToList(todoElement);

  // 입력창 비우기
  clearInput();

  console.log('새 todo 추가됨:', newTodo);
};

const init = () => {
  // 로컬스토리지에서 기존 todo들 가져오기
  const savedTodos = getToDoFromStorage();

  // 각 todo를 화면에 렌더링
  savedTodos.forEach((todo) => {
    const todoElement = renderTodo(todo);
    document.querySelector('.todo-list').appendChild(todoElement);
  });
};

// 이벤트 리스너 연결
document.addEventListener('DOMContentLoaded', () => {
  // 페이지 로드시 기존 todo들 표시
  init();

  // 추가 버튼 이벤트
  document.querySelector('.add').addEventListener('click', handleCreateTodo);

  // 엔터키로도 추가 가능
  document.querySelector('.input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleCreateTodo(e);
    }
  });
});
