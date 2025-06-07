const todoListArray = [];


/**
 * 새로운 할 일 항목을 문자열로 생성합니다.
 * @param {string} value - 할 일 내용
 * @param {string} id - 할 일의 고유 ID
 * @returns {string} 생성된 HTML 문자열
 */
const createItem = (value, id) => {
  return `<li data-id="${id}">${value}</li>`;
};

/**
 * 새로운 할 일을 배열에 객체 형태로 추가합니다.
 * @param {string} id - 할 일의 고유 ID
 * @param {string} value - 할 일 내용
 * @returns {void}
 */
const addItemArray = (id, value) => {
  todoListArray.push({ id, value });
};
