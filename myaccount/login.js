import Cookie from "./Cookie.js";

// Simular inicio de sesión
function login() {
    const authToken = "user-authentication-token";
    Cookie.set('authToken', authToken, 1);
    alert("User logged in and cookie set!");
}

// Añadir el event listener al botón de login
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector("button#loginButton");

    // Asegurarse de que el botón esté disponible antes de añadir el listener
    setTimeout(() => {
        if (loginButton) {
            loginButton.addEventListener("click", login);
        } else {
            console.error("Login button not found.");
        }
    }, 1000);
});