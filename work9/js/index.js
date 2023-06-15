localStorage.setItem('username', 'fluffyPanda123');

let userData = [
    {"userName": "user1",
    "password": "123123"
    },
    {"userName": "user2",
    "password": "12312399998"
    },
    {"userName": "user3",
    "password": "12312334234"
    }
]

localStorage.setItem('userData', JSON.stringify(userData));

// let username = localStorage.getItem('username');

// // console.log(username);

// localStorage.removeItem("username"); // ეს შლის კონკრეტულ მონაცემეს მომხმარებლის მიერ მიწოდებული გასაღების მიხედვით

// localStorage.clear(); // ეს წმინდავს ყველანაირ ინფორმაციას

let usernameInput = prompt("Enter your username: ");
let passwordInput = prompt("Enter your password");

let userDataFromDB = localStorage.getItem("userData");

userDataFromDB = JSON.parse(userDataFromDB);

let isPassCorrect = false;

for (let userInfo of userDataFromDB) {
    if (userInfo.userName === usernameInput) {
        if (userInfo.password === passwordInput) {
            console.log('you have logged in')
            isPassCorrect = true
        }
        else {
            console.log('Incorrect password!')
        }
    }
}

if (!isPassCorrect) {
    console.log("username is incorrect!")
}

console.log(userDataFromDB);