function validacion () {
    var re_nombre= val_nombre();
    var re_email= val_email();
    var re_paw= val_pag();
    var re_check= val_check();
    var re_pasw= val_contraseña();
    var re_direc= val_direc();
    var re_phone= val_telefono();
    var re_comuna= val_comuna();
    var re_aficion= val_aficion();
    return re_nombre && re_email && re_check && re_paw && re_pasw && re_direc && re_phone && re_comuna && re_aficion;
}

function val_nombre () {
    var nombre= document.getElementById("nombre").value;
    var div= document.getElementById("err_nombre");
    if (nombre == "") {
        div.innerHTML= "Debe completar este campo";
        div.className= "text-danger";
        return false;
    } else {
        if (nombre.length > 10) {
            div.innerText= "El nombre de usuario no puede tener mas de 10 caracteres";
            div.className= "text-danger";
            return false;
        } else {
            div.innerText= "";
            return true;
        }
    }
}

function val_email () {
    var email= document.getElementById("email").value;
    var div= document.getElementById("err_correo");
    var arroba= email.indexOf("@");
    var punto= email.lastIndexOf(".");

    if (email == "") {
        div.innerHTML= "Debe completar este campo";
        div.className= "text-danger";
        return false;
    } else {
        if (arroba < 1) {
            div.innerHTML= "Debe considerar el @";
            div.className= "text-danger";
            return false;
        } else {
            if (arroba < 2) {
                div.innerHTML= "El nombre del correo no es valido";
                div.className= "text-danger";
                return false;
            } else {
                if ( arroba + 3 > punto || punto + 1 >= email.length - 1) {
                    div.innerHTML= "Nombre de dominio no valido";
                    div.className= "text-danger";
                    return false;
                } else {
                    div.innerText= "";
                    return true;
                }
            }
        }
    }
}

function val_contraseña() {
    var pawsd= document.getElementById("password").value;
    var cpawsd= document.getElementById("cpassword").value;
    var div2= document.getElementById("err_cpassword");
    var div= document.getElementById("err_password");
    
    if (pawsd == "") {
        div.innerHTML= 'Debe completar este campo';
        div.className= 'text-danger';
        return false;
    } else if (pawsd.length < 3 || pawsd.length > 6) {
        div.innerHTML= 'La contraseña debe tener de 3 a 6 caracteres';
        div.className= 'text-danger';
        return false;
    } else if (!/\d/.test(pawsd)) {
        div.innerHTML= 'La contraseña debe contener al menos un dígito';
        div.className= 'text-danger';
        return false;
    } else if (!/[a-zA-Z]/.test(pawsd)) {
        div.innerHTML= 'La contraseña debe contener al menos una letra';
        div.className= 'text-danger';
        return false;
    } else if (cpawsd == "") {
        div2.innerHTML= 'Debe completar este campo';
        div2.className= 'text-danger';
        return false;
    } else if (pawsd !== cpawsd) {
        div2.innerHTML= 'Ambas contraseñas deben coincidir';
        div2.className= 'text-danger';
        return false;
    }
    div.innerText= '';
    div2.innerText= '';
    return true;
}

function val_direc() {
    var direc= document.getElementById("direccion").value;
    var div= document.getElementById("err_dir");

    if (direc == "") {
        div.innerHTML= "Debe completar este campo";
        div.className= "text-danger";
        return false;
    } else {
        div.innerText= "";
        return true;
    }
}

function val_comuna() {
    var comuna= document.getElementById("Comuna");
    var div= document.getElementById("err_comuna");

    if (comuna == "") {
        div.innerHTML= "Debe seleccionar una comuna";
        div.className= "text-danger";
        return false;
    } else {
        div.innerText= "";
        return true;
    }
}

function val_telefono() {
    var phone= document.getElementById("telefono").value;
    var div= document.getElementById("err_telefono");

    if (phone == "") {
        div.innerHTML= "Debe completar este campo";
        div.className= "text-danger";
        return false;
    } else {
        if (!validarPhone(phone)) {
            div.innerHTML= "Formato de telefono no válido";
            div.className= "text-danger";
            return false;
        } else {
            div.innerText= "";
            return true;
        }
    }
}

function validarPhone(phone) {
    return phone.length === 9 && ["9"].includes(phone.charAt(0));
}

function val_pag() {
    var URL= document.getElementById("pag_web").value;
    var div= document.getElementById("err_pag");

    if (URL == "") {
        div.innerHTML= "Debe completar este campo";
        div.className= "text-danger";
        return false;
    } else {
        if (!validarURL(URL)){
            div.innerHTML= "URL inválida";
            div.className= "text-danger";
            return false;
        } else {
            div.innerText= "";
            return true;
        }
    }
}

function validarURL(URL) {
    return URL.startsWith("http://") || URL.startsWith("https://");
}

function val_aficion() {
    var aficion= document.getElementById("aficiones").value;
    var div= document.getElementById("err_af");
    const aficionArray= aficion.split(",").map((aficion) => aficion.trim());

    if (aficion == "") {
        div.innerHTML= "Debe completar este campo";
        div.className= "text-danger";
        return false;
    } else {
        if (aficionArray.length < 2) {
            div.innerHTML= "Debe ingresar al menos dos aficiones mediante coma";
            div.className= "text-danger";
            return false;
        } else {
            div.innerText= "";
            return true;
        }
    }
}

function val_check() {
    var check= document.getElementById("gridcheck");
    var div= document.getElementById("err_acepto");
     if (!check.checked) {
        div.innerHTML= "Debe aceptar las condiciones";
        div.className= "text-danger";
        return false;
    } else {
        div.innerText= "";
        return true;
    }
}