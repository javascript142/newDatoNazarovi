function userReg() {
    let user = 
    {
        "email": document.getElementById("UserEmail"),
        "password": document.getElementById("UserPassword")
    }
    let oldData = localStorage.getItem('userInfo')
    oldData = JSON.parse(oldData)
    if (oldData == null){
       localStorage.setItem("userInf", JSON.stringify([user]));
    } else {
       oldData.push(userInf);
       localStorage.setItem("userInf" , JSON.stringify(oldData));
    }
}
function  chowPass(){
    let i = document.getElementById("UserPassword")
    if (i.type == "password"){
        i.type = "text";
    } else{
        i.type = "password";
    }
}
