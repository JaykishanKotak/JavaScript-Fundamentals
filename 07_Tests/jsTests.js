const student = {
    age : 21,
    name : {
        firstName : "Chuck",
        secondName : "Norris"
    },
};

student.age=20;
console.log(student);
Object.freeze(student); //It freez and Don't allow to change the values of student object.
student.age=18;
console.log(student);
student.name.firstName = "Superior Chuck"; // Quirky Behaviour of JS.
console.log(student);
