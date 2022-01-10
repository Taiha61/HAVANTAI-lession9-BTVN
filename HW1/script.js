// HW1
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

function checkAge(age) {
    return (age > 18) ? true : `Did parents allow you?`;
}
console.log(checkAge(20));

// HW2 tìm số nhỏ nhất
function checkMin(a, b) {
    return (a < b && a !== b) ? a : b;
}
console.log(checkMin(25, 15));
// HW3

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);
//HW4 
let userName = prompt("Nhập tên đăng nhập");
let passWords;

function checkDangNhap(userName) {
    if (userName === "Admin") {
        passWords = prompt("nhập mật khẩu");
        enterPassWords(passWords);
    } else if (userName === ``) {
        alert("Canceled");
    } else {
        alert("Tôi không biết bạn")
    }
}

function enterPassWords(passWords) {
    if (passWords === "cafedev") {
        alert("Chào Mừng!")
    } else if (passWords === ``) {
        alert("Đã hủy")
    } else {
        alert("Mật khẩu sai")
    }
}
checkDangNhap(userName);