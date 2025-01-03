const accountId = 144453 
let accountEmail = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState 
//accountId = 2 // not allowed 
console.log(accountId);
// prefer to use let instead of var due to  issue 
// in block scope and functional scope
accountEmail = "hc@gmail.com"
accountCity = "Banglore"
accountPassword = "2232133"
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])