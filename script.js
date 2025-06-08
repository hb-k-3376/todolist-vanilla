/**
 *객체 생성 함수
 * @param {string} text
 * @returns {object} todo객체 생성
 */

function createTodo(text) {
  let now = new Date();

  if (typeof text !== "string") {
    throw new TypeError("문자열을 입력해 주세요!");
  }
  return {
    id: now.toISOString(),
    text,
    date: now.toLocaleDateString("ko-KR"),
    time: now.toLocaleTimeString("ko-KR"),
    completed: false,
  };
}

/**
 *배열에 todo객체 추가 함수
 * @param {object} todo
 * @param {Array} todoList
 * @returns {Array} todoList
 */
let todoList = [];
function addTodoList(todo, todoList) {
  if (!Object.keys(todo).includes("id")) {
    throw new TypeError("배열에 추가하는 todo는 object여야 합니다");
  }
  todoList.push(todo);
  return todoList;
}

/**
 *todo list 배열에서 선택한 todo객체의 status 변경
 * @param {string} id
 * @param {Array} todoList
 * @returns {Array} 항목이 제거된 배열
 */

function changeTodoStatus(id, todoList) {
  if (typeof id !== "string") {
    throw new TypeError("id는 문자열이여야 합니다.");
  }

  if (!Array.isArray(todoList)) {
    throw new TypeError("todoList는 배열이여야 합니다.");
  }

  todoList = todoList.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });

  return todoList;
}

/**
 *배열에서 해당 id와 일치하는 항목을 제거
 * @param {string} id
 * @param {Array} todoList
 * @returns {Array} todoList
 */

function removeItemArray(id, todoList) {
  if (typeof id !== "string") {
    throw new TypeError("id는 문자열이여야 합니다.");
  }

  if (!Array.isArray(todoList)) {
    throw new TypeError("todoList는 배열이여야 합니다.");
  }

  todoList = todoList.filter((item) => item.id !== id);
  return todoList;
}
