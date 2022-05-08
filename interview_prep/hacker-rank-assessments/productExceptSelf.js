function productExceptSelf(nums) {
  let leftProduct = [];
  let rightProduct = [];
  let solution = [];

  // populate left product
  for (let i = 0; i < nums.length; i++) {
    if (leftProduct.length === 0) {
      //checking if it's empty
      leftProduct.push(1);
    } else {
      // if it's not empty we push in the previous value that is multiplied.
      leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
    }
  }
  // populate right product
  // starting at the end and go backwards.
  for (let i = nums.length - 1; i > -1; i--) {
    if (rightProduct.length === 0) {
      rightProduct.push(1);
    } else {
      rightProduct.unshift(rightProduct[0] * nums[i + 1]); //i+1 is because we need to be ahead by 1
    }
  }
  // Populate Solution
  for (let i = 0; i < leftProduct.length; i++) {
    solution.push(leftProduct[i] * rightProduct[i]);
  }
  return solution;
}
/*
Input: number[] => nums
Output: number[] => Product of all multiplied elements excluding self.   
Condition: Must be O(2), Cannot use Division.  

nums = [1,2,3,4]

leftProduct = [1,1,2,6] => 1*nothing, 1*1, 1*2, 2*3,   
rightProduct = [24,12,4,1] => 1*nothing, 1*4, 4*3, 12*2
solutionsArray = [24, 12, 8, 6] 
*/

function productExceptSelf2(nums) {
  //so basically if we can calculate the prefix multiplication before the element and postfix multiplication after the element
  //and then multiply both of them we should get the product without self
  const res = [];

  let multiplier = 1;

  //first calculate prefix multiplication for all elements
  for (let i = 0; i < nums.length; i++) {
    res[i] = multiplier;
    multiplier *= nums[i];
  }

  multiplier = 1;
  //now calculate postfix multiplication and also multiply with the prefix multiplication present in res array with postfix multiplication

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= multiplier;
    multiplier *= nums[i];
  }

  return res;
}
