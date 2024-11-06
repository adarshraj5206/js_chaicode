// syntax of switch

// switch (expression) {
//     case value1:
//         // code to execute if expression matches value1
//         break;
//     case value2:
//         // code to execute if expression matches value2
//         break;
//     default:
//         // code to execute if expression does not match any case
// }

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
        break;
}
