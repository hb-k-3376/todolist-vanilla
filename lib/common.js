/**
 * @file        lib/list.js
 * @description todo-list 객체를 생성 및 변경하는 함수들
 * @version     1.0.0
 */

let list = [];

/**
 *객체 생성 함수
 * @param {string} text
 * @returns {object} todo객체 생성
 */
const createTodo = (text, today) => {
  let now = new Date();

  if (typeof text !== "string") {
    throw new TypeError("문자열을 입력해 주세요!");
  }
  return {
    id: now.toISOString(),
    text,
    date: parseInt(today) ?? now.getDate(), // date : 일수만 표기
    time: now.toLocaleTimeString("ko-KR"), // 오후 5:01:21
    completed: false,
  };
};

/**
 *배열에 todo객체 추가 함수
 * @param {object} todo
 * @returns {void}
 */
const addTodoList = (todo) => {
  if (!Object.keys(todo).includes("id")) {
    throw new TypeError("배열에 추가하는 todo는 object여야 합니다");
  }
  list.push(todo);
};

/**
 *배열에서 해당 id와 일치하는 항목을 제거
 * @param {string} id
 * @returns {void}
 */
const removeItemArray = (id) => {
  if (typeof id !== "string") {
    throw new TypeError("id는 문자열이여야 합니다.");
  }

  if (!Array.isArray(list)) {
    throw new TypeError("todoList는 배열이여야 합니다.");
  }

  list = list.filter((item) => item.id !== id);
};

/**
 *todo list 배열에서 선택한 todo객체의 status 변경
 * @param {string} id
 * @param {Array} toDoList
 * @returns {Array} 항목이 제거된 배열
 */
const changeTodoStatus = (id) => {
  if (typeof id !== "string") {
    throw new TypeError("id는 문자열이여야 합니다.");
  }

  if (!Array.isArray(list)) {
    throw new TypeError("todoList는 배열이여야 합니다.");
  }

  list = list.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });
};
