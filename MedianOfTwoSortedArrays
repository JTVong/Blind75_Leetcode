var findMedianSortedArrays = function(nums1, nums2) {
    var mergedArray = nums1.concat(nums2).sort((a,b)=>(a-b));
    var length = mergedArray.length;
    return length % 2 === 0 
      ? (mergedArray[length / 2] + mergedArray[(length / 2) - 1]) / 2
      : mergedArray[Math.floor(length / 2)];
};
