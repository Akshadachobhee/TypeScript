// Rest paramaeter : Variable number of arguments
//function Addtion(Arr : number[]) : number
function Addition() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Sum = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        Sum = Sum + Arr[Cnt];
    }
    return Sum;
}
var Ret = 0;
var Mydata = [10, 20, 30, 40];
// Ret = Addition(Mydata)
console.log("Result is : " + Ret);
Ret = Addition(10, 20, 30, 40);
