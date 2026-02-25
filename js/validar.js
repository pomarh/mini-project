let formInfo = document.querySelector("#formInfo")
let sendform = document.querySelector("#send")
let nameInfo = document.querySelector("#nameform")
let emailInfo = document.querySelector("#emailForm")
let textInfo = document.querySelector("#textForm")

formInfo.addEventListener('submit', function(e) {
    e.preventDefault();
    let name1 = nameInfo.value
    let email1 = emailInfo.value
    let text1 = textInfo.value

    if (name1 === "" || email1 === "" || text1 === "") {
        alert("debes de llenar todos los campos");
        return;
    }

    nameInfo.value = ""
    emailInfo.value = ""
    textInfo.value = ""

} )