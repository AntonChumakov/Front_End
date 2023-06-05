let students = [];

students.push({ name: "Anton", age: 20, krus: "FE" });
students.push({ name: "Bob", age: 30, krus: "BE" });
students.push({ name: "Rob", age: 40, krus: "QA" });

let selectStudents = students[1];
// console.log(selectStudents);

selectStudents.age = 18;
// console.log(selectStudents.age);

selectStudents.city = "Dusseldorf";
// console.log(selectStudents);

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
