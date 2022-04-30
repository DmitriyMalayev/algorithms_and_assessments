var twoSum = function (nums, target) {
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];  //currentNumber
    const neededValue = target - currentNumber;  //needed value to reach target
    const index2 = previousValues[neededValue] //second index value

    if (index2 != null) {
      return [index2, i]
    } else {
      previousValues[currentNumber] = i
    }
  }
};

twoSum([2, 5, 8, 11, 7, 15], 9);
