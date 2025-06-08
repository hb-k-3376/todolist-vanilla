/**
 *배열에서 해당 id와 일치하는 항목을 제거
 * @param {number} id
 * @returns {Array} 항목이 제거된 배열
 */

let array = [
  {
    id: 1,
    data: "1111ddd",
  },
  {
    id: 2,
    data: "2222ddd",
  },
  {
    id: 3,
    data: "3333ddd",
  },
];

function removeItemArray(id) {
  let result;
  result = array.filter((item) => item.id !== id);
  return result;
}

console.log(removeItemArray(2));
