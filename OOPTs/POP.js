function Addition(No1, No2) {
    var Ans = 0; // === 3
    Ans = No1 + No2; // === 4
    return Ans; //=== 5
}
function Substraction(No1, No2) {
    var Ans = 0; // === 9
    Ans = No1 - No2; // === 10
    return Ans; /// === 11
}
var A = 11; // START EXECUTION === 1 
var B = 10;
var Ret = 0;
Ret = Addition(A, B); // after 1 then === 6 || (Will catch value Ans = Ret)
console.log("Addition is : " + Ret); // === 7
Ret = Substraction(A, B); // === 8 || === 12 (Will catch value Ans = Ret)
console.log("Substraction is : " + Ret); // === 13
