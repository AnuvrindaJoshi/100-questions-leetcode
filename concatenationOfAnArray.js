// day 2, question 3, https://leetcode.com/problems/concatenation-of-array/
var getConcatenation = function(nums) {
    let ans= nums.concat(nums);
    return ans;
};
console.log(getConcatenation([1,2,1]));
