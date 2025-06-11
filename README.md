# Simple Todo List

바닐라 JavaScript로 만든 간단한 todo list 프로젝트입니다.

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone https://github.com/hb-k-3376/todolist-vanilla.git
cd todolist-vanilla
```

### 2. 라이브서버 설치

```

# 의존성 설치
npm install

# 개발 서버 실행 실행 포트 : 5500
npm start
```


### 4. 사용 가이드
![스크린샷 2025-06-12 오전 8 27 36](https://github.com/user-attachments/assets/b5622088-5b09-4339-9ce8-4b8c2fc3640e)
처음 들어가면 오늘을 기준으로 -3 일 +3일 달력이 보여지며 각각의 날짜에 todo를 설정할수 있습니다.

![스크린샷 2025-06-12 오전 8 27 41](https://github.com/user-attachments/assets/307565aa-dfe3-4667-9db4-0ebaf36ba826)
상단에 프로그레스바가 있어 각각의 날짜 마다 달성률을 보여주며, 달성률이 100%이 아닌 날짜에는 달력에 알림 표시가 뜹니다.

![스크린샷 2025-06-12 오전 8 27 46](https://github.com/user-attachments/assets/a04aafcb-dc49-4a7e-aa37-ca6631803b91)


## 📖 JSDoc 가이드

#### 모든 함수에는 JSDoc을 작성해야 합니다.

```
# 기본 형식

/**
 * 새로운 할 일을 추가합니다
 * @param {string} text - 추가할 할 일 내용
 * @returns {void}
 */
function addTodo(text) {
    // 함수 내용
}

# 반환값이 있는 함수

/**
 * 할 일의 완료 상태를 토글합니다
 * @param {number} id - 할 일 ID
 * @returns {boolean} 변경된 완료 상태
 */
function toggleTodo(id) {
    // 함수 내용
    return true;
}

```

