const yargs = require("yargs");

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

const argv = yargs
  .command("lyr", "Tells whether a year is leap or not", {
    year: {
      description: "The year to check for",
      alias: "y",
      type: "number",
    },
  })
  .option("time", {
    alias: "t",
    description: "Tell the present time",
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;
if (argv.time) {
  console.log("The current time is: ", new Date().toLocaleTimeString());
}

if (argv._.includes("lyr")) {
  const year = argv.year || new Date().getFullYear();
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is NOT a leap year`);
  }
}
console.log(argv); 


/*
console.log(argv); 
  Provides the ability to view how yards handles your arguments. 
argv.$0
  Contains the name of the script file which is executed
  Example:  "$0": "my app.js"
argv._
  An array containing each element not attached to an option or flag. 
  These elements are referred to as commands in yargs. 
Note
  Individual options or flags become properties of argv
  Such as with argv.h and argv.time
Note
  Non single letter flags must be passed in as --flag 
  Such as node myapp.js --time 

SUMMARY


*/