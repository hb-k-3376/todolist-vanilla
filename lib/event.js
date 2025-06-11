/**
 * @file        lib/event.js
 * @description 이벤트 핸들러를 정의한 js파일
 * @version     1.1.0
 */

// 상태 관리 객체
let appState = {
  toDos: [],
  selectedDay: new Date().getDate().toString(),
};

/**
 * 전체 화면을 다시 렌더링하는 함수
 * @returns {void}
 */
const renderApp = () => {
  const filteredTodos = filterTodosByDate(appState.toDos, appState.selectedDay);
  const progressInfo = calculateProgress(filteredTodos);
  const weekDates = getWeekDates();

  // 객체를 배열로 변환
  const alarmStatus = getDateAlarmStatus(weekDates, appState.toDos);

  renderList(filteredTodos);
  renderDate(alarmStatus, appState.selectedDay);
  updateProgressBar(progressInfo);
};

/**
 * 상태를 업데이트하고 저장하는 함수
 * @param {Object} newState - 새로운 상태
 * @returns {void}
 */
const updateAppState = (newState) => {
  appState = { ...appState, ...newState };

  // 로컬스토리지에 저장
  setTodosListLocalStorage(appState.toDos);

  // 화면 다시 렌더링
  renderApp();
};

/**
 * 애플리케이션 초기화 함수
 * @returns {void}
 */
const init = () => {
  // 로컬스토리지에서 상태 복원
  const savedTodos = getTodosListLocalStorage();

  // 전역 변수 업데이트
  appState = {
    ...appState,
    toDos: savedTodos,
  };

  // 초기 렌더링
  renderApp();
};

/**
 * todo 추가 이벤트 핸들러
 * @param {Event} e - 폼 제출 이벤트
 * @returns {void}
 */
const handleAddTodo = (e) => {
  e.preventDefault();

  const inputValue = getInputValue();
  if (!inputValue) {
    return; // 빈 값이면 추가하지 않음
  }

  const newTodDo = createToDo(inputValue, appState.selectedDay);

  if (!newTodDo) {
    console.error('새로운 toDo 생성에 실패하였습니다.');
    return;
  }

  const updatedTodoList = addTodoList(appState.toDos, newTodDo);

  updateAppState({ toDos: updatedTodoList });
  clearInput();
};

/**
 * todo 상태 변경 이벤트 핸들러
 * @param {string} id - todo ID
 * @returns {void}
 */
const handleChangeToDoStatus = (id) => {
  const updatedTodos = changeTodoStatus(appState.toDos, id);
  updateAppState({ toDos: updatedTodos });
};

/**
 * todo 제거 이벤트 핸들러
 * @param {string} id - todo ID
 * @returns {void}
 */
const handleRemoveTodo = (id) => {
  const updatedTodos = removeItemArray(appState.toDos, id);
  updateAppState({ toDos: updatedTodos });
};

/**
 * 날짜 클릭 이벤트 핸들러
 * @param {Event} e - 클릭 이벤트
 * @returns {void}
 */
const handleDateClick = (e) => {
  const clickedItem = e.target.closest('.calender-item');
  if (!clickedItem) {
    return;
  }

  const selectedDay = clickedItem.id;
  updateAppState({ selectedDay });
};

/**
 * 토글 모드 변경 핸들러
 */
const handleToggleMode = () => {
  const html = document.querySelector('html');
  const themeValue = html.getAttribute('data-theme');

  if (themeValue === 'dark') {
    html.setAttribute('data-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
};

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', init);

// 폼 제출 이벤트
const form = document.querySelector('.input-section');
if (form) {
  form.addEventListener('submit', handleAddTodo);
}

// 달력 클릭 이벤트
const calendar = document.querySelector('.calendar');
if (calendar) {
  calendar.addEventListener('click', handleDateClick);
}

// 모드 변경 클릭 이벤트
document.querySelector('.mode').addEventListener('click', handleToggleMode);

// 전역 함수로 노출 (onclick 이벤트에서 사용)
window.handleChangeToDoStatus = handleChangeToDoStatus;
window.handleRemoveTodo = handleRemoveTodo;
