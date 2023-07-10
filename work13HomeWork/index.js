function  localStrg(){
    let UserData =
    {
        "Name": document.getElementById("Name").value,
        "LastName": document.getElementById("LastName").value,
        "UserName": document.getElementById("UserName").value,
        "Email": document.getElementById("Email").value,
        "password": document.getElementById("password").value,
    }
    localStorage.setItem('User information', JSON.stringify(UserData));
}

function sessionStrg(){
    let SessionData =
     {
        "UserEmail":document.getElementById("UserEmail").value,
        "UserPassword":document.getElementById("UserPassword").value
    }
    sessionStorage.setItem('RegisterInfo', JSON.stringify(SessionData));
}