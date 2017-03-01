function busquedaLinear(array,itemToSearch) {
  var r = 0 ;

    if( typeof array !=  'string'){
       if (array == undefined){
        return "Error";
      }
      if (itemToSearch == undefined){
          return "Error";
      }
      for (var i = 0 ; i < array.length; i++){
        if(array[i] == itemToSearch){
          r = i;
          break;
        }

      } return r ; 
    }
    else{
        return "Error de dato";
    }
  
}


   


//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
