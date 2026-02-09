const accountID = 123456
let accountEmail = "olid@gmail.com"
var accountPaasword = "7654321"
accountCity = "Dhaka";



accountEmail = "afzal@gmail.com"
accountPaasword = "726378738"
accountCity = "Munshiganj"
// accountId = 2   // not allowed  
console.log(accountID);

/*
prefere not to use var
because of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountPaasword, accountCity])
