window.onload = loginLoad;
function loginLoad(){
    let clickButton = document.getElementById("myLogin");
    clickButton.onsubmit = checkLogin;
}

function checkLogin(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password = urlParams.get('password');

    let id = document.forms["myLogin"]["username"].value;
    let pass = document.forms["myLogin"]["password"].value;
    
    if(id == username && pass == password){
        alert("Login Sucessful.");
    }
    else {
        alert("Your Username or password incorrected.");
        return false;
    }
}
 