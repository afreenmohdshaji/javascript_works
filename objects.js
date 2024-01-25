var student={
    id:1001,
    name:"manu",
    course:"django",
    gender:"male",
}

student["email"]="manu@gmail.com"

console.log(student.name);
console.log(student["email"]);
console.log("name" in student);

