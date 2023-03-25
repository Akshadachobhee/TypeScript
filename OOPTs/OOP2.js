// Creating POP.ts file into OOP form
// Kaay karaych aahe? (Method) -> Addition & Substraction
// Te karayla kay kay lagnare -> 2 numbers
var Arithmetic = /** @class */ (function () {
    // To initilize data create constructor
    function Arithmetic(A, B) {
        //charactristics
        this.No1 = 0;
        this.No2 = 0;
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        return this.No1 + this.No2;
        var obj1 = new Arithmetic(11, 90);
        var Ret = obj1.Addition();
        console.log(" Addition : " + Ret);
    };
    Arithmetic.prototype.Substraction = function () {
        return this.No1 - this.No2;
    };
    return Arithmetic;
}());
//var obj1 = new Arithmetic(11,90)
var obj2 = new Arithmetic(67, 9);
//var Ret  : number = 0
//Ret= obj1.Addition()
//console.log(" Addition : "+Ret)
/*Ret = obj1.Substraction()
console.log(" Substraction : "+Ret)
Ret = obj2.Addition()
console.log(" Addition : "+Ret)
Ret = obj2.Substraction()
console.log(" Substraction : "+Ret)*/ 
