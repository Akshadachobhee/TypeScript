function Addition(No1 : number , No2 : number) : number // WILL COME AFTER === 5
{
    let Ans: number = 0 // === 6
    Ans = No1 + No2 // === 7
    return Ans //=== 8
}
 
function Substraction(No1 : number , No2 : number) : number // === 12 
{
    let Ans: number = 0 // === 13
    Ans = No1 - No2 // === 14
    return Ans /// === 15
}
 
var A : number = 11 // START EXECUTION === 1 
var B : number = 10 // === 2
var Ret : number = 0 // === 3

Ret = Addition(A,B) // === 4 (Call the function Addition) ||=== 9 (Will catch value Ans = Ret)
console.log("Addition is : "+Ret) // === 10

Ret = Substraction(A,B) // === 11 || === 16 (Will catch value Ans = Ret)
console.log("Substraction is : "+Ret) // === 17

