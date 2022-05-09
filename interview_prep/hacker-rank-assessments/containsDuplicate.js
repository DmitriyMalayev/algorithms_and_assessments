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

/*
Block
i: 3
Local
this: Window
memory: {1: 'not found', 2: 'not found', 3: 'not found', 4 will return true} 
nums: (4) [1, 2, 3, 1]
*/ 