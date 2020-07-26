/** @format */

// one function, but invoke in two different contexts

function ask(question) {
  console.log(this.teacher, question);
}

workshop1 = {
  teacher: 'Mai',
  ask,
};

workshop2 = {
  teacher: 'Kyle',
  ask,
};

workshop1.ask('How do I share a method?');

workshop2.ask('How do I share a method?');
