// 1st Approach  -->  by usign object to capture each exist num to save look up time
var containsDuplicate = function(nums) {
    /*
    input: array of nums
    output: boolean
    constraints: -
    edge cases : input array length less than 2
   */
 const allNums = {};
 for (let i = 0; i < nums.length; i++) {
  if(nums[i] in allNums) return true;
  allNums[nums[i]] = true;
 }
 return false;

};

// 2nd Approach -->  using Set to compare the length
var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length
};

// 3rd Approach
var containsDuplicate = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  const allNums = {};
  while (left < right) {
    if(nums[left] === nums[right] || nums[left] in allNums || nums[right] in allNums) return true;
    allNums[nums[left]] = true;
    allNums[nums[right]] = true;
    left ++;
    right --
  }
  return nums.length % 2 === 0 ? false : nums[left] in allNums ? true : false;

};