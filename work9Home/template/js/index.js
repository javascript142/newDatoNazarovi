function logIn() {
        let userData = 
            {
            "Name":document.getElementById("Name").value,
            "lastsName": document.getElementById("lastsName").value,
            "location":document.getElementById("location").value,
            "userName":document.getElementById("userName").value,
            "password":document.getElementById("password").value,
            };
  
        localStorage.setItem('userData', JSON.stringify(userData))
}