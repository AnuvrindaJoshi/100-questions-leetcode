//https://leetcode.com/problems/implement-strstr/

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
console.log(strStr('hello','ll'));

/*
var twoSum = function(nums, target) {
  
    for(let i=0;i<nums.length;i++){
        
        let sum= [(nums[i]),(nums[i+1])]
        if(nums[i]+nums[i+1]==target){
            let a=nums.indexOf(nums[i]);
            let b =nums.indexOf(nums[i+1])
            let c=[a,b]
            return c;
        }
    }
 };

 console.log(twoSum([2,7,11,15],9));
 */