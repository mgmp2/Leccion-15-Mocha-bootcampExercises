function resta(numero1,numero2) {
    if(numero1 == undefined || numero2 == undefined){
       return "Error";
   }
    var a1 = parseInt(numero1);
    var b1 = parseInt(numero2);

    if (!isNaN(a1) && !isNaN(b1)) {
      return a1 - b1;
  }
}


//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.resta = resta;
}
