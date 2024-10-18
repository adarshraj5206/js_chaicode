const accountID = 1456375
let accountEmail = "adarsh@gogle.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 24 // not allowed

accountEmail = "raj@gmail.com"
accountPassword = "78945"
accountCity = "mumbai"

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
