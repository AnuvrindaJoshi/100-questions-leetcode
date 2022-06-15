let findMedianSortedArrays = function(nums1, nums2) {
    let nums3= nums1.concat(nums2)
    let final=nums3.sort();
        let n=final.length;
        console.log(final)

        
        let medianOfArray=0;
        let ind=Math.floor( n/2)
        let ind2= ind+1;
        for(let i=0;i<n;i++){
            if(n%2!==0){
                medianOfArray= final[Math.floor( n/2)];
            }
            else if(n===0){
                medianOfArray = 0;
            }
            else{
               medianOfArray= (final[Math.floor( n/2)] + final[n/2-1])/2
            }
                   
        }
        
        return medianOfArray;
        
    };

    console.log(findMedianSortedArrays([1,2],[3,4]));