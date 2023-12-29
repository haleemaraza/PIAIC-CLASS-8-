"use strict";
let person = {
    name: "usman",
    age: 23,
    email: "usamn@gmail.com"
};
let person2 = {
    name: "tayyab",
    age: 44,
    email: "tayyab@gamil.com"
};
let father = {
    name: "usman",
    age: 23,
    email: "usman@gmail.com",
    children: {
        name: "faheem",
        age: 15
    }
};
console.log(father);
let boy = {
    name: "tayyab",
    age: 44,
    email: "tayyab@gamil.com"
};
console.log(boy);
// if someone is student but at the same time she is also a teacher
let both = {
    experience: 22,
    name: "hafiza",
    rollNumber: 12344
};
//        Any 
// we can put anything in any 
let a = 10;
let b = true;
a = b;
//   unknown
// if you are not aware of data type you can put unknown but you can't asign this unknown to any datatype like string, boolean ,array etc 
let f = "hello";
let j = true;
f = j;
// j=f
let myname = "zia ";
console.log(myname.toLowerCase());
myname;
let y = "arfa";
let u = 22;
y = u;
//    never
let h = "hi";
if (typeof h === "string") {
    console.log(h);
}
else {
    console.log(h);
}
// in this situation else is not able to run 
let meetingDay = "monday";
if (meetingDay === "sunday ") {
    console.log("no meeting ");
}
else if (meetingDay === "monday ") {
    console.log("meeting at 10 :00 am ");
}
// enum
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednsesday"] = 3] = "wednsesday";
    days[days["thursday"] = 4] = "thursday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
console.log(days.sunday);
// it give us index number in the console
let meetingDy = days.monday;
if (meetingDy === days.monday) {
    console.log("meeting at  10:00 am ");
}
else if (meetingDy === days.sunday) {
    console.log("no meeting ");
}
// enum github say ley na ha or const bhi
// array
let fruits = ["apple", "orange", "banana"];
let o = [
    {
        name: "haleema "
    },
    {
        name: "Arfa"
    },
    {
        name: 'aylin'
    }
];
console.log(o[1].name);
