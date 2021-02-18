(function () {
    var password = document.getElementById('pswrd');
    var confPassword = document.getElementById('confpswrd');
    var errmsg = document.getElementById('err');
    var elButton = document.getElementById('change');

    confPassword.addEventListener('blur', cPassword, false);
    function cPassword() { //confirma que el valor de ambas contraseñas sean iguales
        if (password.value !== confPassword.value) { //si sus valores son diferentes
            errmsg.innerHTML = 'Passwords don\'t match'; // muestra el mensaje de error
        } else {
            errmsg.innerHTML = ''; // si no, no muestres nada
        }
    }

    elButton.addEventListener('click');
    function (e) {
        e.preven
    }
}());