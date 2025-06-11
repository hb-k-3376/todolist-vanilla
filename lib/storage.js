/**
 * @file        lib/storage.js
 * @description localStorage의 데이터를 관리하는 함수들
 * @version     1.0.0
 */

/**
 * localstorage에서 todo를 가져오는 함수.
 * @param {string} todo-list ID
 * @returns {array} todo-list array
 */
const getTodosListLocalStorage = () => {
  return JSON.parse(localStorage.getItem("Todos")) ?? [];
};

/**
 * localStorage에 todo를 넣는 함수.
 * @param {object} todo-list data
 * @returns {void}
 */
const setTodosListLocalStorage = () => {
  localStorage.setItem("Todos", JSON.stringify(list));
};

// 날짜 업데이트 시 데이터 filter 해서 날짜에 해당하는 데이터만 storage에 set, get 해야함
// 전역변수 사용 지양 -> todolist는 매개변수로 받아서 사용하고 이벤트 리스너에서 storage의 데이터를 받아 넘긴다.
// html 날짜 관리
// validation 따로 구분하기
// 토스트 팝업
// 나이트 모드
const filterTodoList = (toDoList, today) => {
  console.log(today);
  return toDoList.filter((obj) => obj.date === parseInt(today));
};
