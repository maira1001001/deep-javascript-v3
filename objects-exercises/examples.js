/** @format */

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

myTeacher = new Workshop('Kyle');

myTeacher.ask('Is this class ok?');
// 'Kyle' 'Is this class ok?'

setTimeout(myTeacher.ask, 2000, 'Is this class ok?');
// undefined 'Is this class ok?'

// how is this binding working? The `this` binding is lose. There is no auto-binding.
// how would you fix it?
// with lexical scope:
// 1. define the method inside the constructor
// 2. use arrow function to declare the function

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = (question) => console.log(this.teacher, question);
  }
}

otherTeacher = new Workshop('Will');
otherTeacher.ask('This class is working!');
setTimeout(otherTeacher.ask, 2000, 'Lexical scoping with arrow functions');

setTimeout(
  otherTeacher.ask,
  4000,
  'Instead of defining the method on the prototype, we defined it in the constructor, and we use the hard-binding'
);

setTimeout(
  otherTeacher.ask,
  6000,
  'you betrade the idea of the methods exists on the prototype.'
);

setTimeout(
  otherTeacher.ask,
  8000,
  'you betrade the idea of the methods exists on the prototype.'
);

setTimeout(
  otherTeacher.ask,
  10000,
  'Now, ask method exists on the instance X__X'
);

setTimeout(
  otherTeacher.ask,
  12000,
  'And you repeat ask function at every single instance!'
);

setTimeout(
  otherTeacher.ask,
  14000,
  'You brake the rue: DRY (dont repeat yourself)'
);

setTimeout(otherTeacher.ask, 16000, 'Copy are a bad mental model');
