/**
 * @file        lib/list.js
 * @description todo-list 객체를 생성 및 변경하는 함수들
 * @version     1.0.0
 */

/*todo-list 데이터를 변수 */
let toDoList = [];

/**
 *객체 생성 함수
 * @param {string} text
 * @returns {object} todo객체 생성
 */
const createTodo = (text) => {
  let now = new Date();

  if (typeof text !== "string") {
    throw new TypeError("문자열을 입력해 주세요!");
  }
  return {
    id: now.toISOString(),
    text,
    date: now.toLocaleDateString("ko-KR"), // date : 2025. 6. 8.
    time: now.toLocaleTimeString("ko-KR"), // 오후 5:01:21
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
  if (!Object.keys(todo).includes("id")) {
    throw new TypeError("배열에 추가하는 todo는 object여야 합니다");
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
  if (typeof id !== "string") {
    throw new TypeError("id는 문자열이여야 합니다.");
  }

  if (!Array.isArray(toDoList)) {
    throw new TypeError("todoList는 배열이여야 합니다.");
  }

  toDoList = toDoList.filter((item) => item.id !== id);
  return toDoList;
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

  if (!Array.isArray(toDoList)) {
    throw new TypeError("todoList는 배열이여야 합니다.");
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
