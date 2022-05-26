//day 1. https://leetcode.com/problems/fizz-buzz/

let n =5;
let ar= [];
var fizzbuzz= function(n){
for(let i=1;i<=n;i++){

if(i%3==0 && i%5==0){
    ar.push('Fizzbuzz')
}else if(i%3==0 && i%5!=0){
ar.push('Fizz')
}else if (i%5==0 && i%3!=0){
    ar.push('Buzz')
}else{
    ar.push(''+i)
}

}
return ar;
}
console.log(fizzbuzz(15));

//day 2. question 1, https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
var numberOfSteps = function(num) {
    let i=0;
while(num>0){
    if(num%2==0){
        num= (num/2);
    }else{
        num=num-1;
    }
    i++;
}
    return i;
};
console.log(numberOfSteps(8));

//day 2., question 2,https://leetcode.com/problems/defanging-an-ip-address/
var defangIPaddr = function(address) {

    let arr= address.split('');
        
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes('.')){
            arr[i]='[.]'; 
        }
    }
     return arr.join('');
    }
console.log(defangIPaddr('255.100.50.0'))

// day 2, question 3, https://leetcode.com/problems/concatenation-of-array/
var getConcatenation = function(nums) {
    let ans= nums.concat(nums);
    return ans;
};
console.log(getConcatenation([1,2,1]));


