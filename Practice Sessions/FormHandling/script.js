const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const url = document.querySelector("#url")
const card = document.querySelector("#card")


form.addEventListener("submit", (param) => {
    param.preventDefault()
    let name = inp1.value;
    let email = inp2.value;
    let urlLink = url.value;

    card.innerHTML += `            <h3>${name}</h3>
            <p>${email}</p>
                        <img src="${urlLink}" alt="url image">`

                        form.reset();
})