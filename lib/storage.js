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
  localStorage.setItem("Todos", JSON.stringify(toDoList));
};

/*날짜 업데이트 시 데이터 filter 해서 날짜에 해당하는 데이터만 storage에 set, get 해야함 */
