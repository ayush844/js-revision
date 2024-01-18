const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //this way is possible to assign memory but it is not recommended


let accountState; //when we only declare variable and don't define it its value becomes undefined


// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
when we declare variable with var it don't lie inside a particular scopre and becomes global variable
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


//┌─────────┬─────────────┐
//│ (index) │   Values    │
//├─────────┼─────────────┤
//│    0    │   144553    │
//│    1    │ 'hc@hc.com' │
//│    2    │ '21212121'  │
//│    3    │ 'Bengaluru' │
//│    4    │  undefined  │
//└─────────┴─────────────┘
