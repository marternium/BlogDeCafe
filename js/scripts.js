const data = {
    name: "",
    email: "",
    message: ""
}

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
// const submitButton = document.querySelector(".button--primary");
const form = document.querySelector(".form");

name.addEventListener("input", readText);
email.addEventListener("input", readText);
message.addEventListener("input", readText);
// submitButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.table(data);
// })
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.table(data);
    const { name, email, message } = data;
    if (name === "" || email === "" || message === "") {
        showError("Todos los campos son obligatorios");
        return;
    }
    form.reset();
    Object.keys(data).forEach(key => data[key] = "");
    const error = getErrorElement();
    if (error) {
        error.remove();
    }
})

function readText(e) {
    data[e.target.id] = e.target.value;
}

const getErrorElement = () => document.querySelector(".error");

function showError(message) {
    const error = getErrorElement();
    if (error) {
        error.textContent = message;
    } else {
        const newError = document.createElement("P");
        newError.style.color = "red";
        newError.style.fontWeight = "bold";
        newError.style.textAlign = "center";
        newError.textContent = message;
        newError.classList.add("error");
        form.appendChild(newError);
    }
}
