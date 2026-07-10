const themeBtn = document.querySelector("#themeToggle");
const form = document.querySelector("form");
const title = document.querySelector("#taskTitle");
const category = document.querySelector("#category");
const addBtn = document.querySelector("#addTask");
const taskList = document.querySelector(".task-list");

document.body.dataset.theme = "light";

themeBtn.addEventListener("click", ()=> {
    if(document.body.dataset.theme === "light"){
        document.body.dataset.theme = "dark";
document.body.classList.add("dark-theme");

    } 
    else{
        document.body.dataset.theme = "light"
document.body.classList.remove("dark-theme");

    };
    
})


let editingTask = null;

let tasks = [];

function createTask(task){
    const article = document.createElement("article");

    article.dataset.id = task.id;
    article.dataset.status = task.status;
    article.dataset.category = task.category;



    const heading = document.createElement("h3");
    const paragraph = document.createElement("p");

    const text = document.createTextNode(task.title);
    const para = document.createTextNode(task.category);
    heading.appendChild(text);
    article.appendChild(heading);
    paragraph.appendChild(para);
    article.appendChild(paragraph);

    const btnContainer = document.createElement("div");
    const editBtn = document.createElement("button");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    const editText = document.createTextNode("Edit");
    const deleteText = document.createTextNode("Delete");
    const completeText = document.createTextNode("Complete");



    btnContainer.classList.add("btn-container");
    editBtn.classList.add("edit-btn");
    completeBtn.classList.add("complete-btn");
    deleteBtn.classList.add("delete-btn");


    editBtn.appendChild(editText);
    completeBtn.appendChild(completeText);
    deleteBtn.appendChild(deleteText);

    btnContainer.append(editBtn, completeBtn, deleteBtn);
    article.appendChild(btnContainer);

    taskList.appendChild(article);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if(!tasks) return

    tasks.forEach((task) => {
        createTask(task);
    })
}

function updateTask(taskTitle, taskCategory){
    const heading = editingTask.querySelector("h3");
    const paragraph = editingTask.querySelector("p");

    heading.textContent = taskTitle;
    paragraph.textContent = taskCategory;

    editingTask.dataset.category = taskCategory;

    const taskId = Number(editingTask.dataset.id);
    const task = tasks.find(task => task.id === taskId);
    task.title = taskTitle;
    task.category = taskCategory;
    saveTasks()

    editingTask = null;

    form.reset();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskTitle = title.value;
    const taskCategory = category.value;

    if (taskTitle.trim() === "" || taskCategory.trim() === "") {
        return;
    }
if(editingTask){
updateTask(taskTitle, taskCategory);
    return;
}
const task = ({
    id:Date.now(),
    title: taskTitle,
    category: taskCategory,
    status: "pending"
})
tasks.push(task);
saveTasks();

createTask(task);
    form.reset();
})

taskList.addEventListener("click", (e) => {
    const taskCard = e.target.closest("article");
     if (!taskCard) return;
     
    if (e.target.classList.contains("delete-btn")) {

        const taskId = Number(taskCard.dataset.id);
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        taskCard.remove();
    }
    if(e.target.classList.contains("complete-btn")){
        const taskId = Number(taskCard.dataset.id);
        const task = tasks.find(task => task.id === taskId);
        if(taskCard.dataset.status === "pending") {
            taskCard.dataset.status = "completed";
            taskCard.classList.add("completed");
            task.status = "completed";
            
        } else {
            taskCard.dataset.status = "pending";
            taskCard.classList.remove("completed");
          task.status = "pending";
        }
        saveTasks();
    }
    if(e.target.classList.contains("edit-btn")) {
        const heading = taskCard.querySelector("h3");
        const paragraph = taskCard.querySelector("p");
        title.value = heading.textContent;
        category.value = paragraph.textContent;
        editingTask = taskCard;
    }

})


loadTasks()



