
// object
type Person ={
    name:string;
    age :number;
    email:string;
}

let person:Person = {
    name :"usman",
    age :23,
    email :"usamn@gmail.com"
}

let person2:Person ={
    name:"tayyab",
    age:44,
    email:"tayyab@gamil.com"
}



// nested object
type father ={
    name:string;
    age :number;
    email:string;
    children?:{
        name:string;
        age:number
    }
}

let father = {
    name :"usman",
    age: 23,
    email:"usman@gmail.com",
    children :{
        name:"faheem",
        age:15
    }
}
console.log(father)

let boy:father ={
    name:"tayyab",
    age:44,
    email:"tayyab@gamil.com"
}
console.log(boy)


// if we want to add both types in one statment
type student ={
    name:string 
    rollNumber:number
}
type teacher = {
    name:string
    experience:number
}
// if someone is student but at the same time she is also a teacher
let both:student& teacher={
    experience:22,
    name:"hafiza",
    rollNumber:12344
}



//        Any 
// we can put anything in any 
let a:any = 10 
let b :boolean =true
a=b



//   unknown
// if you are not aware of data type you can put unknown but you can't asign this unknown to any datatype like string, boolean ,array etc 
let f :unknown="hello"
let j :boolean=true
f=j
// j=f
let myname:unknown = "zia "
console.log ((myname as string).toLowerCase())
myname

let y :string = "arfa"
let u :unknown=22
y=u as string 



//    never
let h :string ="hi"
if(typeof h === "string"){
    console.log(h)
}else{
    console.log(h)
}
// in this situation else is not able to run 

let meetingDay :string ="monday"

if (meetingDay === "sunday "){
    console.log("no meeting ")
}else if (meetingDay === "monday "){
    console.log("meeting at 10 :00 am ")
}



// enum
enum days {
     sunday ,
     monday ,
     tuesday,
     wednsesday,
     thursday,
     friday,
     saturday
}
console.log(days.sunday)
// it give us index number in the console
let meetingDy : days= days.monday

if(meetingDy ===days.monday){
    console.log("meeting at  10:00 am ")
}else if (meetingDy === days.sunday ){
    console.log("no meeting ")
}





// array
let fruits:string[] =["apple","orange","banana"]
type person = {
    name:string
}
let o :person[]=[
    {
        name:"haleema "
    },
    {
        name:"Arfa"
    },
    {
        name:'aylin'
    }
]
console.log(o[1].name)