window.onload = pageLoad;
function pageLoad(){
    let clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;
}

function validateForm() {
    let passMain = document.forms["myForm"]["passMain"].value;
    let passReCheck = document.forms["myForm"]["passReCheck"].value;

    if (passReCheck != passMain){
        document.getElementById('errormsg').innerHTML = "Recheck password";
        return false;
    }
    else
    {
        alert("Register Successfull.");
    }
}