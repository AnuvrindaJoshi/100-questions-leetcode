//https://leetcode.com/problems/jewels-and-stones/
function anu(jewel,stone){
    let count=0;
for(let i=0;i<jewel.length;i++){
    for(let j=0;j<stone.length;j++){
        if(jewel[i]==stone[j]){
            count= count+1;}
    }
}
return count;
    }
console.log(anu('aA','aaaA'));
