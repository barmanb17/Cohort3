const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");
const det = document.querySelector(".btn del");



btn.addEventListener("click", () => {
    const value = inp.value;

    if (value.trim() === "") return;
    todoBox.innerHTML += `<div class="li">
                <h2>${value}</h2>
                <div>
                    <button class="btn edit">Edit</button>
                    <button class="btn del">Delete</button>
                </div>


            </div>`
            
    inp.value = "";
})

det.addEventListener("click", ()=> {
    todoBox.innerHTML = " ";
})