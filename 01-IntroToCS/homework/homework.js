'use strict';

function BinarioADecimal(num) {
   // 1 0 0 1 0
   // 0 1 2 3 4
   var str = num.toString ();
   var sum = 0;
   for (var i=0; i < str.length; i++){
      sum += str[i] * 2 ** (str.length -1 -i)
   }

   return sum;

}

function DecimalABinario(num) {
   var bin = [];
   var newBin = [];
      
   // 2 8 1
   // 0 1 2 

      while (num >= 2){
      if (num % 2 === 0){
         bin.push ("0");
         num = num / 2;
      }

      else {
        bin.push ("1");
         num = num / 2;
      }
      }   
      bin.reverse();
      var newBin = bin.join ("");
      
     return 1 + newBin;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
