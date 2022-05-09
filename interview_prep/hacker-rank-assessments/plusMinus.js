function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      zeros++;
    }
  }
  console.log(
    positives / arr.length + "\n",
    negatives / arr.length + "\n",
    zeros / arr.length + "\n"
  );
  //    console.log(negatives/arr.length)
  //    console.log(zeros/arr.length)
}

plusMinus([-4, 3, -9, 0, 4, 1]);
