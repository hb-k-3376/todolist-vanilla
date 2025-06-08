/**
 * 특정 data-id를 가진 아이템을 화면DOM에서만 제거하는 함수
 *
 * @param {string|number} id
 * @returns {boolean}
 */
const removeItem = (id) => {
  const targetElement = document.querySelector(`li[data-id="${id}"]`);

  if (targetElement) {
    targetElement.remove();
    console.log(`data-id ${id}이 제거되었습니다.`);
    return true;
  }

  console.log(`data-id ${id}을 찾을 수 없습니다.`);
  return false;
};

/**
 * <ul> 내부의 목록 아이템<li>을 클릭하면 삭제 실행
 *
 * @param {Event} e
 * @returns {void} 없음
 */
const handleRemove = (e) => {
  // 클릭된 요소 특정
  const listItem = e.target.closest("li[data-id]");

  if (listItem) {
    const itemId = listItem.dataset.id; //data-id의 경우 dataset 사용

    // 배열에서 삭제
    const originalLength = todos.length;
    todos = todos.filter((todo) => todo.id != itemId);

    if (todos.length < originalLength) {
      // DOM에서 제거
      removeItem(itemId);

      console.log(`${itemId}이 제거되었습니다.`);
    } else {
      console.log(`${itemId}을 찾을 수 없습니다.`);
    }
  }
};

// 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector("ul");
  if (todoList) {
    todoList.addEventListener("click", handleRemove);
  }
});


git config --global user.name "SEOKJU"
git config --global user.email "sbbt@naver.com"
