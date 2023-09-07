
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name.length < 2) {
        alert("El nombre debe tener más de 2 caracteres");
        return false;
    }
    if (!email.includes("@")) {
        alert("El correo electrónico debe contener una @");
        return false;
    }
    alert("Formulario enviado correctamente");
});
            