document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const addTodoBtn = document.getElementById("add-todo-btn");
    const todoList = document.getElementById("todo-list");

    // 로컬 스토리지에서 할 일 목록 불러오기
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todoList.innerHTML = ""; // 기존 목록 초기화
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${todo}
                <button class="delete-btn" data-index="${index}">삭제</button>
            `;
            todoList.appendChild(li);
        });
    }

    // 할 일 목록 추가
    addTodoBtn.addEventListener("click", function () {
        const newTodo = todoInput.value.trim();
        if (newTodo) {
            // 기존 할 일 목록 가져오기
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            todos.push(newTodo);
            // 로컬 스토리지에 저장
            localStorage.setItem("todos", JSON.stringify(todos));
            todoInput.value = ""; // 입력 필드 비우기
            loadTodos(); // 목록 새로고침
        } else {
            alert("할 일을 입력하세요!");
        }
    });

    // 할 일 삭제
    todoList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const index = event.target.getAttribute("data-index");
            const todos = JSON.parse(localStorage.getItem("todos"));
            todos.splice(index, 1); // 해당 할 일 삭제
            localStorage.setItem("todos", JSON.stringify(todos)); // 로컬 스토리지에 저장
            loadTodos(); // 목록 새로고침
        }
    });

    // 페이지 로드 시 할 일 목록 불러오기
    loadTodos();
});

