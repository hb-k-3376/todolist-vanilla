/**
 * @file        lib/dom.js
 * @description dom객체에 직접적으로 관여하는 함수들
 * @version     1.0.0
 */

const WEEK = 7;

/**
 * todo-list 전체 목록을 dom에 추가하는 함수
 * @param {object} todo
 * @returns {string}
 */
const createItem = (todo) => {
  const li = document.createElement("li");
  li.setAttribute("data-id", todo.id);
  li.className = "todo";
  li.innerHTML = /* html */ `
        <div class="todo-forward">
        ${
          todo.completed
            ? /* html */ `
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" onclick='handleChangeToDoStatus("${todo.id}")' style="cursor: pointer;">
                <path d="M6 11L9.75 14.75L16 7.25M1 17.0002V5.00025C1 3.60011 1 2.89953 1.27249 2.36475C1.51216 1.89434 1.89434 1.51216 2.36475 1.27249C2.89953 1 3.60011 1 5.00025 1H17.0002C18.4004 1 19.0995 1 19.6343 1.27249C20.1046 1.51216 20.4881 1.89434 20.7277 2.36475C21 2.899 21 3.59874 21 4.99614V17.0045C21 18.4019 21 19.1006 20.7277 19.6349C20.4881 20.1052 20.1046 20.4881 19.6343 20.7277C19.1 21 18.4013 21 17.0039 21H4.99614C3.59874 21 2.899 21 2.36475 20.7277C1.89434 20.4881 1.51216 20.1052 1.27249 19.6349C1 19.1001 1 18.4004 1 17.0002Z" stroke="#93CCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#E8F5F5"/>
                <path d="M6 11L9.75 14.75L16 7.25" stroke="#93CCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
            : /* html */ `
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" onclick='handleChangeToDoStatus("${todo.id}")' style="cursor: pointer;">
                <path d="M4.125 19.25C3.6625 19.25 3.26625 19.0706 2.936 18.7119C2.60669 18.3525 2.4375 17.9417 2.4375 17.4792V4.52083C2.4375 4.05833 2.60669 3.6475 2.936 3.28813C3.26625 2.929 3.6625 2.75 4.125 2.75H17.875C18.3375 2.75 18.7338 2.929 19.064 3.28813C19.3933 3.6475 19.5625 4.05833 19.5625 4.52083V17.4792C19.5625 17.9417 19.3933 18.3525 19.064 18.7119C18.7338 19.0706 18.3375 19.25 17.875 19.25H4.125ZM4.125 17.4792H17.875V4.52083H4.125V17.4792Z" fill="#93CCCC"/>
              </svg>
            `
        }
          <span class="todo-title">${todo.text}</span>
        </div>
        <div class="todo-rare">
          <span class="todo-time">${todo.time}</span>
          <button type="button" class="remove-todo" onclick='handleRemoveTodo("${
            todo.id
          }")'>
           <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M11.7692 10.6334C11.9607 10.8406 12.0646 11.1138 12.0592 11.3959C12.0537 11.678 11.9392 11.947 11.7398 12.1466C11.5404 12.3461 11.2714 12.4608 10.9894 12.4665C10.7073 12.4721 10.434 12.3684 10.2267 12.177L6.06231 8.01268L1.89795 12.177C1.79814 12.285 1.67755 12.3717 1.54341 12.4319C1.40928 12.4922 1.26436 12.5247 1.11735 12.5275C0.970344 12.5304 0.824272 12.5035 0.687897 12.4486C0.551522 12.3936 0.427653 12.3116 0.323718 12.2076C0.219783 12.1036 0.137924 11.9797 0.0830483 11.8833C0.0281731 11.7069 0.00141257 11.5608 0.00437154 11.4138C0.00733051 11.2668 0.039948 11.1219 0.100268 10.9878C0.160588 10.8537 0.247368 10.7332 0.355404 10.6334L4.51976 6.46907L0.355404 2.30683C0.247368 2.20709 0.160588 2.08656 0.100268 1.95247C0.039948 1.81838 0.00733051 1.67348 0.00437154 1.52647C0.00141257 1.37947 0.0281731 1.23338 0.0830483 1.09696C0.137924 0.960551 0.219783 0.836625 0.323718 0.732619C0.427653 0.628613 0.551522 0.546668 0.687897 0.491699C0.824272 0.436731 0.970344 0.40987 1.11735 0.412728C1.26436 0.415586 1.40928 0.448103 1.54341 0.508331C1.67755 0.568559 1.79814 0.655257 1.89795 0.763224L6.06231 4.92652L10.2267 0.762164C10.434 0.570784 10.7073 0.467065 10.9894 0.472743C11.2714 0.478421 11.5404 0.593054 11.7398 0.79262C11.9392 0.992186 12.0537 1.2612 12.0592 1.54327C12.0646 1.82535 11.9607 2.09861 11.7692 2.30577L7.60486 6.46907L11.7692 10.6334Z" fill="#FFC1C1"/>
            </svg>
          </button>
        </div>
      `;
  return li;
};

/**
 * todo-list 전체 목록을 dom에 추가하는 함수
 * @param {array} todoList
 * @returns {void}
 */
const renderList = (toDoList) => {
  const ul = document.querySelector(".todo-list");
  ul.innerHTML = "";
  toDoList.forEach((todo) => {
    const li = createItem(todo);
    ul.appendChild(li);
  });
};

/**
 * input에 입력한 값을 가져오는 함수
 * @param {void}
 * @returns {void}
 */
const getInputValue = () => {
  const input = document.querySelector(".input"); //현재 input 고유하다고 가정
  return input.value.trim();
};

/**
 * input태그의 값을 비우는 함수
 * @param {void}
 * @returns {void}
 */
const clearInput = () => {
  const input = document.querySelector(".input");
  input.value = "";
};

/**
 * todo-list의 완료한 건수와 전체건수의 퍼센트를 프로그래스바에 그린다.
 * @param {array} todoList
 * @returns {void}
 */
const calcProgress = (toDoList) => {
  const progress = document.querySelector(".progress");
  const round = 2 * Math.PI * 25;

  if (toDoList.length === 0) {
    progress.style.strokeDashoffset = round;
    countingPercent(0);
    return;
  }
  const count = toDoList.filter((obj) => obj.completed === true).length;
  const total = toDoList.length;

  progress.style.strokeDashoffset = round - (round * count) / total;
  countingPercent(Math.round((count / total) * 100));
};

/**
 * 퍼센트 카운팅 애니매이션 효과를 넣는다
 * @param {number} todo-list의 완료 퍼센트
 * @returns {void}
 */
const countingPercent = (percent) => {
  const element = document.querySelector(".wrap_txt");
  // 현재 퍼센테이지 가져오기
  const currentPercent = parseInt(element.innerHTML.replace("%", "")) || 0;

  let delay = 0;
  let start = currentPercent; // 시작 퍼센트
  let end = percent; // 목표 퍼센트
  let step = start > end ? -1 : 1; // 증 감

  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    setTimeout(() => {
      element.innerHTML = i + "%";
    }, 15 * delay);
    delay++;
  }
};

const setDate = () => {
  let first = -3;
  const date = new Date();
  const dateObject = {};
  const ul = document.querySelector(".calendar");
  ul.innerHTML = "";

  for (let i = 0; i < WEEK; i++) {
    let announce;
    filterTodoList(list, dateObject.date).forEach((item) => {
      announce &= item.completed;
    });

    dateObject.date = date.getDate() + first;
    const day =
      date.getDay() + first < 0
        ? date.getDay() + first + WEEK
        : date.getDay() + first;
    dateObject.day = getDay(day);
    const li = createDate(dateObject, date.getDate(), announce);
    ul.appendChild(li);
    first++;
  }
};

const getDay = (day) => {
  switch (day) {
    case 1:
      return "M";
    case 2:
      return "T";
    case 3:
      return "W";
    case 4:
      return "T";
    case 5:
      return "F";
    case 6:
      return "S";
    default:
      return "S";
  }
};

const createDate = (dateObject, today, announce) => {
  const li = document.createElement("li");

  li.addEventListener("click", (e) => handleDateStyle(e));
  li.className =
    today === dateObject.date ? "calender-item active" : "calender-item";
  li.innerHTML = `
      <svg class="announce" width="8" height="7" viewBox="0 0 8 7" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="3.5" r="3.5" fill="#F4551E"/>
      </svg>

      <p class="day">${dateObject.day}</p>
      <p class="date">${dateObject.date}</p>
    `;
  return li;
};

const handleDateStyle = (e) => {
  const list = document.querySelectorAll("li.calender-item");

  list.forEach((el) => el.classList.remove("active"));
  e.currentTarget.classList.toggle("active");

  // 로컬 스토리지에서 todo List 불러오기
  const selectedDate = e.currentTarget.lastElementChild.innerHTML;

  toDoList = filterTodoList(getTodosListLocalStorage(), selectedDate);
  // 초기 리스트 render
  renderList(toDoList);

  // 프로그레스 바
  calcProgress(toDoList);
};
