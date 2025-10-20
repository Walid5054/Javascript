const bottle = {
  brand: "apple",
  price: 45,
  color: "white",
  isClean: false,
};
const subject = {
  name: "biology",
  teacher: "rasheda maam",
  examDate: "30 feb",
  chapters: ["first ", "second", "third"],
  exams: {
    name: "final exam",
    marks: 100,
  },
};
// dot notation and bracket notation can be changed and upgrade with both
console.log(subject.name);
console.log(bottle["brand"]);
console.log(Object.keys(subject));
console.log(Object.values(subject));
console.log(subject.exams.name);
