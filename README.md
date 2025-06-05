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

# 개발 서버 실행
npm start
```

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
