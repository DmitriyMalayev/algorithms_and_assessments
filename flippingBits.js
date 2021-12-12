function flippingBits(n) {
  let lowBin = "";
  let highBin = "";
  let result = 0;

  /*
    Converting the input Decimal to Binary
    Perform the last operation when the value 1 is passed in.  
    The modulo operator, % extracts the remainder of n / 2 and assigns the value, the bit to rem
    rem is appended to the lowBin string, maintaining the binary sequence as a string. 
    A conditional value is used to adjust the value of n for the next iteration. 
    If rem is equal to 1, n is an odd value, so n is assigned the value you of n/2 rounded down with Math.floor() we always ensure it's a whole number is passed into the loop.                         
    */
  while (n >= 1) {
    const rem = n % 2;
    lowBin += rem;
    rem === 1 ? (n = Math.floor(n / 2)) : (n /= 2);
  }

  /*
  Adjust Binary to 32 Bits
  Without this we only get the bits necessary as to convert the decimal input. Remaining processes require a 32 bit values
  Because of the linear order of operation, the binary string is currently in reverse order.
  */
  while (lowBin.length < 32) {
    lowBin += 0;
  }
  /*
  Reverse and Invert Each Bit of Binary
  We use a decrementing for loop to iterate over the binary string held by lowBin—end to beginning—i = 31 -> i = 0.
  At each iteration, highBin is appended with the inverse of the current value(lowBin[i]), which is determined by a conditional operator: if 0, return 1; if 1, return 0.
  This process effectively reverses the binary string while inverting each bit.
  */
  for (let i = lowBin.length - 1; i >= 0; i--) {
    highBin += lowBin[i] === "0" ? "1" : "0";
  }
  /*
Convert Binary to Decimal
Instead of setting the limit condition to highBin.length - 1
we set it to highBin.length (32) so we can accommodate a
decrementing bit index all the way to 0 for the variable expo
highBin.length - 1 would end the formula at n * 2¹
if the last evaluated bit was 0 (0 * 2⁰ = 0), the last addend
could be ignored, however, this condition is necessary because
the last bit evaluated could be 1 (1 * 2⁰ = 1), impacting the
result with a final addend of 1.

expo is assigned a number which represents each bit's position
on the first iteration this would be: const expo = 32 - 1 - 0 = 31

if the first bit was 0 (highBin[i] = 0), then the first
addend of the conversion formula would be: 0 * 2³¹
on each iteration the addend value is summed into result
*/
  for (let i = 0; i < highBin.length; i++) {
    const expo = highBin.length - 1 - i;
    result += highBin[i] * 2 ** expo;
  }
  return result;
}

/*
lowBin  (string)
  Represents the binary in it's first state, low to high
highBin  (string)
  Assigned a reversed copy of lowbin.
result (number which is instantiated at 0)
  Assigned the decimal conversion of the value help by highBin 

Convert Input Decimal To Binary
  A decimal integer can be converted to binary by continually evenly dividing the integer by 2 (binary) until the value reaches 0, reserving the resultant remainders in sequence of bits.
*/
