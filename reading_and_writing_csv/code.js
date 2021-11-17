// const csv = require("csv-parser");
// const fs = require("fs");

// fs.createReadStream("names.csv")
//   .pipe(csv())
//   .on("data", (row) => {
//     console.log(row);
//   })
//   .on("end", () => {
//     console.log("CSV file successfully processed");
//   });

/*
Here, we create a readStream using the fs module, pipe it into the csv object that will then fire the data event each time a new row from the CSV file is processed. The end event is triggered when all the rows from the CSV file are processed and we log a short message to the console to indicate that.

For demonstration purposes, we just console.log each processed row and after running the code, you'll see this output in your console:
*/

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



const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("out.csv");
fastcsv.write(data, { headers: true }).pipe(ws);









