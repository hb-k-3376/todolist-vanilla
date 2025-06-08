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
    // id: todoList.length,
    text,
    date: now.toLocaleDateString("ko-KR"),
    time: now.toLocaleTimeString("ko-KR"),
    completed: false,
  };
};
// const obj1 = createTodo(2222);
const obj2 = createTodo("2222어쩌구저쩌구");
const obj3 = createTodo("3333어쩌구저쩌구");

/**
 *배열에 todo객체 추가 함수
 * @param {object} todo
 * @param {Array} todoList
 * @returns {Array} todoList
 */
let todoList = [];
const addTodoList = (todo, todoList) => {
  if (!Object.keys(todo).includes("id")) {
    throw new TypeError("배열에 추가하는 todo는 object여야 합니다");
  }
  todoList.push(todo);
  return todoList;
};

// addTodoList([1, 23, 4, 5]);
addTodoList(obj2, todoList);
addTodoList(obj3, todoList);
console.log(todoList);

/**
 *todo list 배열에서 선택한 todo객체의 status 변경
 * @param {string} id
 * @param {Array} todoList
 * @returns {Array} 항목이 제거된 배열
 */
const changeTodoStatus = (id, todoList) => {
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
};

/**
 *배열에서 해당 id와 일치하는 항목을 제거
 * @param {string} id
 * @param {Array} todoList
 * @returns {Array} todoList
 */

const removeItemArray = (id, todoList) => {
  if (typeof id !== "string") {
    throw new TypeError("id는 문자열이여야 합니다.");
  }

  if (!Array.isArray(todoList)) {
    throw new TypeError("todoList는 배열이여야 합니다.");
  }

  todoList = todoList.filter((item) => item.id !== id);
  return todoList;
};
