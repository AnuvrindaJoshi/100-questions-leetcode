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