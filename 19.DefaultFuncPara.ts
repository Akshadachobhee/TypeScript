function Percentage(Marks : number=200 ,Outof : number=500) : number
{

     let Ans : number = 0

     Ans = (Marks/Outof)*100

    return Ans

}
var Per : number = 0
Per = Percentage(220,300)
console.log("Percentage is :"+Per) // 220/300 = 74.33

Per = Percentage(220)
console.log("Percentage is :"+Per) //220 / 500 = 44 

Per = Percentage()
console.log("Percentage is :"+Per) //200/500 = 40 