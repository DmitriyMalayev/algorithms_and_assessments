function flippingBits(n) {
  let lowBin = n.toString(2); //converts number to String with a specific base 2 means binary
  let highBin = "";

  // Number.toString() produced a binary string in high order to low order, we're prepending 0's from the left.
  while (lowBin.length < 32) {
    lowBin = 0 + lowBin;
  }
  // We only flip bits, no need to reverse the sequence.
  for (let i = 0; i < lowBin.length; i++) {
    highBin += lowBin[i] === "0" ? "1" : "0";
  }
  //converts String to a Number with a specific base
  return parseInt(highBin, 2);
}
