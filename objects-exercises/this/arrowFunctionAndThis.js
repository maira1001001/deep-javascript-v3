/** @format */

/**
 * arrow function scope: it is lexical scope.
 * `workshop` is an object. The scope is global.
 * Where does `ask` look for `teacher`? at global scope, and at this point, there is no `teacher` variable
 */

var workshop = {
  teacher: 'Kyle',
  ask: (question) => console.log(this.teacher, question),
};

workshop.ask('What happend to `this`?');
// undefined 'What happend to `this`?'

workshop.call(workshop, 'Still no `this`?');
// undefined 'Still no `this`?'
