const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;

const FileSystem = require("fs");

CSVToJSON()
  .fromFile("./source.csv")
  .then((source) => {
    console.log(source);
    source.push({
      sku: "56789",
      title: "Fortnite",
      hardware: "Nintendo Switch",
      price: "0.00",
    });
    const csv = JSONToCSV(source, {
      fields: ["sku", "title", "hardware", "price"]
    })
    FileSystem.writeFileSync("./destination.csv", csv)
  });
