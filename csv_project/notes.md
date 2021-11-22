```js
const yargs = require("yargs");

console.log(process.argv);
```

In Node.js all command line arguments received by the shell are given to the process in an array called argv("argument values")
Node.js exposes this array for every running process in the form of process.argv

dmitriymalayev@Dmitriys-Mini reading_and_writing_csv % node argv.js one two three four five

```js
[
  "/Users/dmitriymalayev/.nvm/versions/node/v15.10.0/bin/node", //node
  "/Users/dmitriymalayev/Downloads/Desktop/Assessments/reading_and_writing_csv/argv.js", //path to your script
  "one",
  "two",
  "three",
  "four",
  "five",
];

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
```

`console.log(argv)`
Provides the ability to view how yargs handles your arguments.
`argv.$0`
Contains the name of the script file which is executed
Example: "$0": "my app.js"
`argv._`
An array containing each element not attached to an option or flag.
These elements are referred to as commands in yargs.
`Note`
Individual options or flags become properties of argv
Such as with argv.h and argv.time
`Note`
Non single letter flags must be passed in as --flag
Such as node myapp.js --time

# SUMMARY OF ELEMENT USED IN THE PROGRAM

`argv`
This is the modified process.argv which we have configured with yargs
`command()`
Used to add commands, their descriptions and options which are specific to these commands only
For example, in the above code "lyr" is the command and "-y" is lyr specific option
node myapp.js lyr -y 2016
`option()`
Used to add global options (flags) which can be accessed by all commands without any command.
`help()`
Used to display a help dialogue when --help option is encountered
Contains a description of all commands and options available.
`alias()`
Provides an alias name to an option
--help and -h triggers the help dialogue

`npm init -y`
generates an empty npm project without going through an interactive process.
-y (means yes)

`npm install csvtojson`
`npm install json2csv --save`

```js
const csv = require("csv-parser");
const fs = require("fs");

fs.createReadStream("names.csv")
  .pipe(csv())
  .on("data", (row) => {
    console.log(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });
```

Here, we create a readStream using the fs module, pipe it into the csv object that will then fire the data event each time a new row from the CSV file is processed. The end event is triggered when all the rows from the CSV file are processed and we log a short message to the console to indicate that.

For demonstration purposes, we just console.log each processed row and after running the code, you'll see this output in your console:

```js
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "out.csv",
  header: [
    { id: "name", title: "Name" },
    { id: "surname", title: "Surname" },
    { id: "age", title: "Age" },
    { id: "gender", title: "Gender" },
  ],
});

const data = [
  {
    name: "John",
    surname: "Snow",
    age: 26,
    gender: "M",
  },
  {
    name: "Clair",
    surname: "White",
    age: 33,
    gender: "F",
  },
  {
    name: "Fancy",
    surname: "Brown",
    age: 78,
    gender: "F",
  },
];

csvWriter
  .writeRecords(data)
  .then(() => console.log("The CSV file was written successfully"));

//Alternative
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("out.csv");
fastcsv.write(data, { headers: true }).pipe(ws);

const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("out.csv");
fastcsv.write(names.csv, { headers: true }).pipe(ws);

Name, Surname, Age, Gender;
John, Snow, 26, M;
Clair, White, 33, F;
Fancy, Brown, 78, F;

name, surname, age, gender;
John, Snow, 26, M;
Clair, White, 33, F;
Fancy, Brown, 78, F;

const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv")(async () => {
  const names = await csv().fromFile("names.csv");
  console.log(names);
  // names[0].names = "Dmitriy";
})();
```
