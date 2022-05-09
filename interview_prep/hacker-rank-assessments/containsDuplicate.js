var containsDuplicate = function (nums) {
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = "not found";
    } else {
      return true;
    }
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]);
