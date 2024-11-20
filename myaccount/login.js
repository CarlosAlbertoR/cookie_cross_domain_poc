import Cookie from "./Cookie.js";

// Simular inicio de sesión
function login() {
    const tokenInput = document.querySelector("#tokenInput");
    const authToken = tokenInput ? tokenInput.value : "default-token-value";
    console.log('authToken', authToken);

    Cookie.set('authToken', authToken, 1);
    alert("User logged in and cookie set!");
}

// Añadir el event listener al botón de login
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector("button#loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", login);
    }
});