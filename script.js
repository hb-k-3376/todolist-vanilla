/**
 * DOM 렌더링 완료 후 init() 함수 실행 이벤트
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function () {
  //init();
  _init();
});

/**
 * 페이지가 로드 되었을 때 실행(localStorage 사용 시)
 * localStorage의 데이터를 화면에 그린다.
 * @returns {void}
 */
const _init = () => {
  let parent = document.querySelector(".todo-list");
  let list = "";
  const id = "202506080340";

  const _todoList = getTodosListLocalStorage(id);

  if (!_todoList) {
    return;
  }
  _todoList.forEach((obj, index) => {
    list += `<li class="content li${index}">
        <div>
            <input type="checkBox" ${obj.checked ? "checked" : ""} />
            <span>${obj.text}</span>
        </div>
        <button type="button">삭제</button>
    </li>`;
  });
  parent.innerHTML = list;
  const count = _todoList.filter((obj) => obj.checked === true).length;
  calcProgress(count, _todoList.length);
};

/**
 * todo-list의 완료한 건수와 전체건수의 퍼센트를 프로그래스바에 그린다.
 * @param {number,number} todo-list의 완료한 건수와 전체 건수
 * @returns {void}
 */
const calcProgress = (complete, total) => {
  const progress = document.querySelector(".progress");
  const round = 2 * Math.PI * 25;
  progress.style.strokeDashoffset = round - (round * complete) / total;
  countingPercent(Math.round((complete / total) * 100));
};

/**
 * 퍼센트 카운팅 애니매이션 효과를 넣는다
 * @param {number} todo-list의 완료 퍼센트
 * @returns {void}
 */
const countingPercent = (percent) => {
  const element = document.querySelector(".wrap_txt");
  if (percent == 0) {
    element.innerHTML = "0%";
  } else {
    let time = 0;

    for (let i = 0; i <= percent; i++) {
      setTimeout(() => {
        element.innerHTML = i + "%";
      }, 20 * time);
      time++;
    }
  }
};

/**
 * 기존의 on class를 제거한다.
 * 클릭한 data의 클래스받아 on클래스를 추가한다
 * @param {string} 선택한 날짜 class값
 * @returns {void}
 */
const selectedDate = (clickedDate) => {
  const date = document.querySelectorAll("li");
  date.forEach((el) => el.classList.remove("on"));

  const target = document.querySelector(`.${clickedDate}`);

  target.classList.add("on");
};

/**
 * localstoage에 todo를 넣는 함수.
 * @param {object} todo-list data
 * @returns {void}
 */
const setTodosListLocalStorage = (todosList) => {
  const _todoList = JSON.parse(localStorage.getItem("Todos")) ?? [];

  _todoList.push(todosList);
  localStorage.setItem("Todos", JSON.stringify(_todoList));
};

/**
 * localstorage에서 todo를 가져오는 함수.
 * @param {string} todo-list ID
 * @returns {array} todo-list array
 */
const getTodosListLocalStorage = (todosId) => {
  const _todoList = JSON.parse(localStorage.getItem("Todos")) ?? [];
  return _todoList.filter((todos) => todos.id === todosId);
};
