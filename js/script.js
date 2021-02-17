(function () {
    var password = document.getElementById('pswrd');
    var confPassword = document.getElementById('confpswrd');
    var form = document.getElementById('form');

    confPassword.addEventListener('blur', cPassword, false);
    function cPassword() { //confirma que el valor de ambas contraseñas sean iguales
        if (password.value !== confPassword.value) { //si sus valores son diferentes
            var msg = document.createElement('p'); // crea un elemento p
            msg.innerHTML = 'Passwords don\'t match'; // guarda el mensaje de error en el elemento
            form.appendChild(msg); // adjunta el mensaje al final del elemento form
        } else {
            msg.remove();
        }
    }
}())