console.log(process.argv);
// In Node.js all command line arguments received by the shelll are given to the process in an array called  argv("argument values")
// Node.js exposes this array for every running process in the form of process.argv

/*
dmitriymalayev@Dmitriys-Mini reading_and_writing_csv % node argv.js one two three four five        
[
  '/Users/dmitriymalayev/.nvm/versions/node/v15.10.0/bin/node',    //node
  '/Users/dmitriymalayev/Downloads/Desktop/Assessments/reading_and_writing_csv/argv.js',   //path to your script
  'one',
  'two',
  'three',
  'four',
  'five'
]
*/

var myArgs = process.argv.slice(2);
console.log("MyArgs: ", myArgs);
// MyArgs:  [ 'one', 'two', 'three', 'four', 'five' ]

switch (myArgs[0]) {
  case "insult":
    console.log(myArgs[1], "smells quite badly.");
    break; //We have to break after each case to prevent running other case
  case "compliment":
    console.log(myArgs[1], "is really cool");
    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
}
