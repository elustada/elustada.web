const users = [];

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    /* var userExists = users.some(function(user) {
        return user.username === username && user.password === password;
    }); */

    const name = "Admin";
    const pass = "Lavalle1947"

    if (username === name && password === pass){
        window.location.href = "admin.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    }

    /* if (userExists) {
        window.location.href = "admin.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    } */
}

/* function registerUser() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    var userExists = users.some(function(user) {
        return user.username === newUsername;
    });

    if (!userExists) {
        // Agregar el nuevo usuario al array
        users.push({
            username: newUsername,
            password: newPassword
        });

        // Limpiar los campos de registro
        document.getElementById("newUsername").value = "";
        document.getElementById("newPassword").value = "";

        alert("Registro exitoso. Ahora puedes iniciar sesión con tu nuevo usuario.");
    } else {
        alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
    }
} */