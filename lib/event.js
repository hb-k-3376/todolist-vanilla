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
  list = getTodosListLocalStorage();
  // 로컬 스토리지에서 오늘 날짜로 filtering한 todo List 불러오기
  const toDoList = filterTodoList(
    getTodosListLocalStorage(),
    new Date().getDate()
  );

  //상단 날짜 셋팅
  setDate();

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

  //선택한 날짜 불러오기
  const date = document.querySelector(".active").lastElementChild.getHTML();

  const todo = createTodo(value, date);

  addTodoList(todo);

  setTodosListLocalStorage();

  createItem(todo);

  clearInput();

  // 로컬 스토리지에서 todo List 불러오기
  toDoList = filterTodoList(getTodosListLocalStorage(), date);

  // 초기 리스트 render
  renderList(toDoList);

  // 프로그레스 바
  calcProgress(toDoList);
};

/**
 * todolist에 상태를 변경하는 이벤트 핸들러
 * @param {string} id
 * @returns {void}
 */
const handleChangeToDoStatus = (id) => {
  const date = document.querySelector(".active").lastElementChild.getHTML();

  changeTodoStatus(id);

  setTodosListLocalStorage();
  //선택한 날짜 불러오기

  // 로컬 스토리지에서 오늘 날짜로 filtering한 todo List 불러오기
  const toDoList = filterTodoList(getTodosListLocalStorage(), date);

  // 초기 리스트 render
  renderList(toDoList);

  // 프로그레스 바
  calcProgress(toDoList);
};

/**
 * todolist에 항목을 제거하는 이벤트 핸들러
 * @param {string} id
 * @returns {void}
 */
const handleRemoveTodo = (id) => {
  const date = document.querySelector(".active").lastElementChild.getHTML();

  removeItemArray(id);

  setTodosListLocalStorage();

  // 로컬 스토리지에서 오늘 날짜로 filtering한 todo List 불러오기
  const toDoList = filterTodoList(getTodosListLocalStorage(), date);

  // 초기 리스트 render
  renderList(toDoList);

  // 프로그레스 바
  calcProgress(toDoList);
};

const handleDarkMode = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};
document.addEventListener("DOMContentLoaded", init);

const form = document.querySelector(".input-section");

form.addEventListener("submit", handleAddTodo);

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

light.addEventListener("click", handleDarkMode);
dark.addEventListener("click", handleDarkMode);
