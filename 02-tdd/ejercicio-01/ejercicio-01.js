function suma (sum1,sum2) {

    
    

    if(sum1 == undefined || sum2 == undefined){
       return "Error";
   }
    var a1 = parseInt(sum1);
    var b1 = parseInt(sum2);

    if (typeof a1 != 'string' && typeof a2!= 'string') {
      return a1 + b1;
  }
    
  
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.suma = suma;
}
