function LongestWord(sen) { 

  // code goes here  
  
  //0 - 31	Control characters (see below)
  //	32	space
  
    var i =0;
    var res = "";
    var c=0;
    var myMap = new Map();
 
    for(i=0; i<sen.length; i++){
      //  console.log(sen.charAt(i));
        if (sen.charCodeAt(i)>97){
            res+=sen.charAt(i);
                myMap.set(c,res);    
            c++;
            myMap.set(c,res);
        }else{
            if( (res !== " ") ){
                
                res = "";
            }
            
            }
        }
   
   var strVec = [];
   var vecM =  [];
   var s=0;
   for (var [key, value] of myMap) {
     vecM[s] = value;
     s++;
     
    }
   var y;
   var may="";
    may = vecM[0];
   for(y =0; y<vecM.length; y++){
      
       if(may < vecM[y])
            may =vecM[y];
        
      
   }
   sen = may;
    return sen;
}
   
// keep this function call here 
LongestWord("fun&!! time");                            
