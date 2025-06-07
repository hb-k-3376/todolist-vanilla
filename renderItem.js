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
  li.innerHTML = `
    <span class="todo-text">${todo.text}</span>
    <span class="todo-status">
      ${todo.completed ? ' 완료' : '진행중'}
    </span>
    <span class="todo-date">
      ${todo.createdAt}
    </span>
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

/**
 * renderTodo 으로 생성된 element 태그 todo-list에 마지막에 붙이기
 * @param {element} element
 */
const appendToList = document.querySelector('.todo-list').appendChild(element);

/**
 * 추가 버튼 클릭시 이벤트
 * @param {event} e submit button 이벤트 객체
 */
const handleCreateTodo = (e) => {};
