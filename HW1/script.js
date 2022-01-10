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
function Min(a, b) {
    if (a < b) {
        let min = a;
    } else {
        let min = b;
    }
    return min;
}
// HW3