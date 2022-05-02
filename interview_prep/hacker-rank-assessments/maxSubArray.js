var maxSubArray = function (nums) {
  if (nums.length === 1) {
    //edge case
    return nums[0];
  }
  let maxValue = nums[0];
  let accNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let calc = Math.max(nums[i], accNum + nums[i]); //returns which is bigger
    if (calc > maxValue) {
      maxValue = calc;
    }
    accNum = calc;
  }
  return maxValue;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
/*
Keep track of
  maxValue
  AccumulatedValue

Iterate through each number and check
  If the current number is big
  or should you take the previous accumulated number and use that instead
If AccumulatedValue > MaxValue
  Replace It
AccumulatedValue = CalculatedValue 
  
Decide whether you start accumulating or start at the value you are at


*/
