/**
 * @file        lib/storage.js
 * @description localStorage의 데이터를 관리하는 순수 함수들
 * @version     1.1.0
 */

// 상수 정의
const STORAGE_KEYS = {
  TODOS: 'Todos',
  SELECTED_DAY: 'SelectedDay',
};

/**
 * localStorage에서 todos를 가져오는 함수
 * @returns {array} todo 배열
 */
const getTodosListLocalStorage = () => {
  const data = localStorage.getItem(STORAGE_KEYS.TODOS);
  return data ? JSON.parse(data) : [];
};

/**
 * localStorage에 todos를 저장하는 함수
 * @param {array} toDos - 저장할 todo 배열
 * @returns {boolean} 저장 성공 여부
 */
const setTodosListLocalStorage = (toDos) => {
  if (!Array.isArray(toDos)) {
    throw new TypeError('todoList는 배열이어야 합니다.');
  }
  localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(toDos));
  return true;
};
