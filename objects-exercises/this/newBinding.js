/** @format */

// Explicit binding
// Set the context

function ask(question) {
  console.log(this.teacher, question);
}

workshop1 = {
  teacher: 'Mai',
};

workshop2 = {
  teacher: 'Kyle',
};

ask.call(workshop1, 'Can I explicitly set the context?');
ask.call(workshop2, 'Can I explicitly set the context?');
