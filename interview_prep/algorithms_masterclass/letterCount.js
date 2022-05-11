function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    console.log(str[i])
    console.log(char)

    console.log(result[char])
    console.log(result[str][i])

    
    // console.log(result)
   
    // if (result[char]>0){
    //   result[char]++
    // } else {
    //   result[char] = 1
    // }
    // if (letters[str][i] > 0) {
    //   console.log(letters[str][i] = 1)
    //   letters[str][i]++;
    // } else {
    //   letters[str][i] = 1;
    // }
  }
  return result;
}

charCount("Hello my name is Dmitriy");
