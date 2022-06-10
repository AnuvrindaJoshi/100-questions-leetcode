var mostWordsFound = function(sentences) {
    let count=0;
   for(let i=0;i<sentences.length;i++){
       let words=sentences[i].split(' ');
   let newVal =words;
       if(newVal.length>count){
           count=newVal.length;
       }
   }
      return count;
      
  };
  console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));