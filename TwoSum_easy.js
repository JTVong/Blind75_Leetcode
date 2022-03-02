//https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
  /*
  INPUT: array of number
  OUTPUT: array of pair
  CONSTRAINTS: cannot be repeate same num, sum is target
  EDGE CASES: array less than length of two
  */
    const allNums = {};
    // create tracker obj to capture each element saving look up time later
    // loop over each num
    for (let i = 0; i < nums.length; i++) {
      // check if the res num is in the obj
      let pair = target - nums[i];
      if( pair in allNums) return [i, allNums[pair]]
        allNums[nums[i]] = i;
      // if not add this num in obj
      // if yes return
    } return []

    // loop end return []
};

