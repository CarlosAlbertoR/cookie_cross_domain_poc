import Cookie from "./Cookie.js";

// Recuperar el token de autenticación
function checkAuth() {
    const authToken = Cookie.get("authToken");
    if (authToken) {
        alert("Authenticated user token: " + authToken);
    } else {
        alert("User not authenticated");
    }
}

// Añadir el event listener al botón de checkAuth
document.addEventListener("DOMContentLoaded", () => {
    const checkAuthButton = document.querySelector("button#checkAuthButton");

    // Asegurarse de que el botón esté disponible antes de añadir el listener
    setTimeout(() => {
        if (checkAuthButton) {
            checkAuthButton.addEventListener("click", checkAuth);
        } else {
            console.error("Check Auth button not found.");
        }
    }, 1000);
});