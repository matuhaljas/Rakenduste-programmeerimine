let login = true;
let age = 15

function message () {
    if (age >= 18) {
        if (login == true) {
            console.log("Hello user!")
        }
        else {
            console.log("Hello visitor, make an account!")
        }
    }
    else {
        console.log("You are underage and connot access contents!")
    }
}

message();