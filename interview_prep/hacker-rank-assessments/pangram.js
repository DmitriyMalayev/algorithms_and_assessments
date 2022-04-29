function pangrams(s) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let str = s.toLowerCase();
  for (let i = 0; i < alpha.length; i++) {
    if (str.indexOf(alpha.charAt(i)) === -1) {
      return "not pangram";
    }
  }
  return "pangram";
}

pangrams("We promptly judged antique ivory buckles for the next prize");

/* indexOf - JS method to get index of array element.
 Returns -1 if not found
 str.indexOf("a") =>  19
 alpha.charAt(i) => ("a")
*/


