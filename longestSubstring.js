//https://leetcode.com/problems/longest-substring-without-repeating-characters/
let lengthOfLongestSubstring = function(s) {
    let left=0;
    let right=0;
    let maxLength=0;
    let set = new Set();

while(right<s.length){
    if(!set.has(s.charAt(right))){
        set.add(s.charAt(right));
        maxLength= Math.max(maxLength,set.size);
        right++;
    }else{
        set.delete(s.charAt(left));
        left++;
    }
}
    return maxLength;
};
console.log(lengthOfLongestSubstring('abcabcbb'));