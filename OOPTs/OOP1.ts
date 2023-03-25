
// Class =  Characteristics + Behaviours
// Class = Data + Functions
// In class no need to write var,let,function
//We should write var,let,function outside class
class Student 
{
    //Charactristics
  Name : string
  Marks : number
  Age : Number
  City : string
// Behaviours
  constructor(N : string, M : number, A : number, C : string) // keyword in typescript // Ekaveli ek constructor // Call after allocated memory eg , object
  {
    console.log("Inside Contructor")
     this.Name = N
     this.Marks = M
     this.Age = A
     this.City = C 
  }

  Display() : void
  {
    console.log("Name of Student : "+this.Name)
    console.log("Marks of Student :  "+this.Marks)
    console.log("Age of student : "+this.Age)
    console.log("City of student : "+this.City)

  } 
}

var Obj307 = new Student("Akshada",97,23,"Pune") //Memory gets allocated 
Obj307.Display() // Method call / Function call
var Obj308 = new Student("Dev",98,22,"Jalgaon")


Obj308.Display()