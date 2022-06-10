//https://leetcode.com/problems/richest-customer-wealth/
var maximumWealth = function(accounts) {
    let max=0;
        for(let i=0;i<accounts.length;i++){
            let interval=accounts[i];
            let sum=0;
            for(let j=0;j<interval.length;j++){
                sum=sum+interval[j];
            }
            if(sum>max){
                max=sum;
            }
        }
        return max;
    };
    
console.log(maximumWealth([[1,2,3],[9,2,1]]));