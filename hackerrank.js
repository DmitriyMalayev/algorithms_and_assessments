/*
function miniMaxSum(arr) {
  let minSlice = arr
    .sort((a, b) => {
      return a - b;
    })
    .slice(1);
  let min = minSlice.reduce((val, newValue) => val + newValue, 0);
  let maxSort = arr.sort((a, b) => {
    return a - b;
  });
  let max = maxSort
    .reverse()
    .slice(1)
    .reduce((val, newValue) => val + newValue, 0);

  console.log(max, min);
}

miniMaxSum([7, 69, 2, 221, 8974]);

*/

console.log("07:05:45");

/*
Time Conversion
Minutes and Seconds are always the same
Converting Hours and Remove AM or PM for Military Time

Cases
  12 AM => 00
  1 AM - 12 PM => No conversion neccessary 
  1 PM - 11 PM => Original Hour + 12
*/

function timeConversion(s) {
  let amPM = s.charAt(8); //12:00:00AM or PM checks first letter
  let militaryHour = "";
  if (amPM === "A") {
    if (s.substring(0, 2) == "12") {
      //substring takes two arguments start and end but not including
      militaryHour = "00";
    } else {
      militaryHour = s.substring(0, 2); //1:00 AM - 11:00 AM
    }
  } else { // P
    if (s.substring(0, 2) == "12") {   // 12:00 PM
      militaryHour = s.substring(0, 2);
    } else {
      militaryHour = parseInt(s.substring(0, 2), 10) + 12;
    }
  }
  return militaryHour + s.substring(2, 8);
}
