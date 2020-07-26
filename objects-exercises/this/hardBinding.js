/** @format */

// Hard binding

workshop = {
  teacher: 'Kyle',
  ask: function ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask.bind(workshop), 2000, 'Hard bound this?');

setTimeout(workshop.ask, 4000, 'Lost this?');
