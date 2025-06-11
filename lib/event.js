/**
 * @file        lib/event.js
 * @description 이벤트 핸들러를 정의한 js파일
 * @version     1.0.0
 */

/**
 * 화면 렌더링 시 호출하는 함수
 * @param {void}
 * @returns {void}
 */
const init = () => {
  // 로컬 스토리지에서 todo List 불러오기
  toDoList = getTodosListLocalStorage();

  // 캘린더 생성
  renderCalender();

  // 초기 리스트 render
  renderList(toDoList);

  // 프로그레스 바
  calcProgress(toDoList);
};

/**
 * todolist에 항목을 추가하는 이벤트 핸들러
 * @param {evnet}
 * @returns {void}
 */
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

/**
 * todolist에 상태를 변경하는 이벤트 핸들러
 * @param {string} id
 * @returns {void}
 */
const handleChangeToDoStatus = (id) => {
  changeTodoStatus(id);
  setTodosListLocalStorage();
  init();
};

/**
 * todolist에 항목을 제거하는 이벤트 핸들러
 * @param {string} id
 * @returns {void}
 */
const handleRemoveTodo = (id) => {
  removeItemArray(id);
  setTodosListLocalStorage();
  init();
};

/**
 * calender에서 날짜별로 toDoList를 필터링하는 핸들러
 * @param {string} date
 * @returns {void}
 */

const handleCalenderTodo = (date) => {
  const clickedTodoList = compareTodoDate(date, toDoList);
  clickedTodoList.length === 0 ? withoutToDoList : renderList(clickedTodoList);
};

document.addEventListener("DOMContentLoaded", init);

const form = document.querySelector(".input-section");

form.addEventListener("submit", handleAddTodo);
