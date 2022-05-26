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

