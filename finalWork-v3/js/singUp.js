function userReg() {
    let user = 
    {
        "email": document.getElementById("UserEmail"),
        "password": document.getElementById("UserPassword")
    }
    localStorage.setItem(user,JSON.stringify(user));
}
function  chowPass(){
    let i = document.getElementById("UserPassword")
    if (i.type == "password"){
        i.type = "text";
    } else{
        i.type = "password";
    }
}
