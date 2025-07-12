const passwordBox = document.getElementById("password");
const lenght =12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol ="!@#$%^&*()";
const alchar = uppercase+lowercase+number+symbol;
function createpassword(){
    let password ="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(lenght>password.length){
        password+=alchar[Math.floor(Math.random()*alchar.length)];
    }
passwordBox.value=password;
}
