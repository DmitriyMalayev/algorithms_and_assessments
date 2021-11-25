/* 
Generators simplify iterator authoring using function* and yield
A function declared as function* returns a Generator Instance. 
  Generators are subtypes of iterators which include additional next and throw.
These enable values to flow back into the generator, so yield is an expression form which returns a value or returns throws. 

Note
  Generators also can be used to enable "await" like async programming. 
*/

function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers(); //returns a generator object. It has the ability to step through the generator function with the "next" method
generator; // {}
generator.next(); //{"value": 2, "done": false}
generator.next(); //{"value": null, "done": true}
generator.next(10); //{"value": 30, "done": true}  the value 10 replaces (yield result)

function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();
// generator.next(); // {"value": 1, "done": false}
// generator.next(); // {"value": 2, "done": false}
// generator.next(); // {"value": 3, "done": false}
// generator.next(); // {"value": 4, "done": false}
// generator.next(); // {"value": 5, "done": false}
// generator.next(); // {"done": true}

const newNumbers = [];
for (let value of list()) {
  newNumbers.push(value);
} // 5
newNumbers; // [1,2,3,4,5]

function* newList() {
  yield 1;
  yield 2;
  yield* newList2(); //passing in a new generator
  yield 6;
  yield 7;
}

function* newList2() {
  yield 3;
  yield 4;
  yield 5;
}

const newGenerator = newList();

const newValues = [];
for (let value of newGenerator) {
  values.push(value);
} // 7

newValues; // [1,2,3,4,5,6,7]
