// Class =  Characteristics + Behaviours
// Class = Data + Functions
// In class no need to write var,let,function
//We should write var,let,function outside class
var Student = /** @class */ (function () {
    // Behaviours
    function Student(N, M, A, C) {
        console.log("Inside Contructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of Student : " + this.Name);
        console.log("Marks of Student :  " + this.Marks);
        console.log("Age of student : " + this.Age);
        console.log("City of student : " + this.City);
    };
    return Student;
    
}());
var Obj307 = new Student("Akshada", 97, 23, "Pune");
Obj307.Display(); // Method call / Function call
var Obj308 = new Student("Dev", 98, 22, "Jalgaon");
Obj308.Display();
