var threeSum = function (nums) {
  let [solution, left, right] = [[], 0, nums.length - 1];

  if (nums.length < 3) {
    //If there are less than three values, return empty array. Edge case.
    return solution;
  }
  nums.sort((a, b) => {
    return a - b;
  }); //lowest to highest number

  for (let [index, number] of nums.entries()) {
    if (number > 0) {
      //can't add positive numbers to have a negative number
      return solution;
    }
    if (number === nums[index - 1]) {
      //continue because duplicate allowed but triplets aren't
      continue;
    }
    //current number example -4

    left = index + 1; //-1
    right = nums.length - 1; //2
    let temp = 0; //used to make sure the two numbers equal 0
    


    while (left < right) {
      temp = number + nums[left] + nums[right];
      if (temp === 0) {
        solution.push([number, nums[left], nums[right]]);
        left++; //increment and decrement because we want to account for the values used
        right--;

        //The while statements check for duplicates. If present we move.
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else if (temp < 0) {
        left++;
      }
    }
  }
  return solution;
};

threeSum([-4, -1, -1, 0, 1, 2]);

/*
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. 
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (let element of arrayEntries) {
  console.log(element);
}

[0, 'a']
[1, 'b']
[2, 'c']

*/
