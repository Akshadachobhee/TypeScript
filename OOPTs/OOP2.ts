// Creating POP.ts file into OOP form

// Kaay karaych aahe? (Method) -> Addition & Substraction

// Te karayla kay kay lagnare -> 2 numbers
class Arithmetic
{
    //charactristics
No1 : number = 0
No2 : number = 0

// To initilize data create constructor
constructor(A : number , B : number)
{
   this.No1 = A
   this.No2 = B

}

Addition() : number
{
return this.No1+this.No2
}

Substraction() : number
{
    return this.No1-this.No2
}

}

var obj1 = new Arithmetic(11,90)
var obj2 = new Arithmetic(67,9)

var Ret  : number = 0
Ret= obj1.Addition()
console.log(" Addition : "+Ret)
Ret = obj1.Substraction()
console.log(" Substraction : "+Ret)
Ret = obj2.Addition()
console.log(" Addition : "+Ret)
Ret = obj2.Substraction()
console.log(" Substraction : "+Ret)