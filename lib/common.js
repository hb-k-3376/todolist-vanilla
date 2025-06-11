/**
 * @file        lib/list.js
 * @description todo-list 객체를 생성 및 변경하는 함수들
 * @version     1.1.0
 */

/**
 * toDo 생성 함수
 * @param {string} text
 * @returns {object} todo객체 생성
 */
const createToDo = (text) => ({
  id: new Date().toISOString(), // 날짜를 초단위로 받아서 유니크한 값 생성
  text,
  date: appState.selectedDay, // 전역변수로 선택된 날짜
  time: new Date().toLocaleTimeString('ko-KR'), // 오후 5:01:21
  completed: false,
});

/**
 * 투두 리스트에 새 todo를 추가하는 함수
 * @param {array} toDos
 * @param {object} newToDo
 * @returns
 */
const addTodoList = (toDos, newToDo) => {
  if (!Object.keys(newToDo).includes('id')) {
    throw new TypeError('배열에 추가하는 todo는 object여야 합니다');
  }

  return [...toDos, newToDo];
};

/**
 * 배열에서 해당 id와 일치하는 항목을 제거 (순수 함수)
 * @param {array} toDos
 * @param {string} id
 * @returns {array} 새로운 toDos
 */
const removeItemArray = (toDos, id) => {
  if (typeof id !== 'string') {
    throw new TypeError('id는 문자열이여야 합니다.');
  }

  if (!Array.isArray(toDos)) {
    throw new TypeError('todoList는 배열이여야 합니다.');
  }
  return toDos.filter((item) => item.id !== id);
};

/**
 * todo list 배열에서 선택한 todo객체의 status 변경 (순수 함수)
 * @param {array} toDos
 * @param {string} id
 * @returns {array} 상태가 변경된 새로운 todoList
 */
const changeTodoStatus = (toDos, id) => {
  if (typeof id !== 'string') {
    throw new TypeError('id는 문자열이여야 합니다.');
  }

  if (!Array.isArray(toDos)) {
    throw new TypeError('todoList는 배열이여야 합니다.');
  }

  return toDos.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });
};

/**
 * 특정 날짜의 todo만 필터링하는 함수
 * @param {array} toDos
 * @param {string} selectedDay
 * @returns {array} 필터링된 todoList
 */
const filterTodosByDate = (toDos, selectedDay) => {
  if (!Array.isArray(toDos)) {
    return [];
  }

  if (!selectedDay) {
    return toDos;
  }

  return toDos.filter((todo) => todo.date === selectedDay);
};

/**
 * 완료된 todo의 개수를 계산하는 함수
 * @param {array} todoList
 * @returns {Object} {completed: number, total: number, percentage: number}
 */
const calculateProgress = (toDos) => {
  if (!Array.isArray(toDos)) {
    return { completed: 0, total: 0, percentage: 0 };
  }

  const completed = toDos.filter((todo) => todo.completed).length;
  const total = toDos.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return { completed, total, percentage };
};

/**
 * localStorage에서 받아온 toDos의 completed를 통계로 만들어 weekDates에 추가
 * @param {array} weekDates 오늘을 기준으로 -3 +3일 총 7일이 들어있는 날짜 배열
 * @param {array} toDos toDos
 * @returns
 */
const getDateAlarmStatus = (weekDates, toDos) => {
  return weekDates.map((date) => ({
    ...date,
    needsAlarm: toDos.some((toDo) => toDo.date === date.day.toString() && !toDo.completed),
  }));
};
