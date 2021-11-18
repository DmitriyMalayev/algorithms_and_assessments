const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv")(async () => {
  const names = await csv().fromFile("names.csv");
  console.log(names);
  // names[0].names = "Dmitriy";
})();
