/**
 * DOM 렌더링 완료 후 init() 함수 실행 이벤트
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function () {
  init();
  //   _init();
});

const todoList = [
  {
    content: "빨래",
    check: true,
  },
  {
    content: "알고리즘 문제 해결",
    check: false,
  },
];

/**
 * 페이지가 로드 되었을 때 실행(localStorage 미사용 시)
 * 리스트 데이터를 불러와 화면에 그린다.
 * @returns {void}
 */
const init = () => {
  let parent = document.querySelector(".todo-list");
  let list = "";
  todoList.forEach((obj) => {
    list += `<li class="content">
        <div>
            <input type="checkBox" ${obj.check ? "checked" : ""} />
            <span>${obj.content}</span>
        </div>
        <button type="button">삭제</button>
    </li>`;
  });
  parent.innerHTML = list;
};

/**
 * 페이지가 로드 되었을 때 실행(localStorage 사용 시)
 * localStorage의 데이터를 화면에 그린다.
 * @returns {void}
 */
const _init = () => {
  let parent = document.querySelector(".todo-list");
  let list = "";
  const _todoList = JSON.parse(localStorage.getItem("array"));
  console.log(_todoList);
  _todoList.forEach((obj) => {
    list += `<li class="content">
        <div>
            <input type="checkBox" ${obj.check ? "checked" : ""} />
            <span>${obj.content}</span>
        </div>
        <button type="button">삭제</button>
    </li>`;
  });
  parent.innerHTML = list;
};
