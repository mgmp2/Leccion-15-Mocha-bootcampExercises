function fibonacci(upperLimit) {
  var x = [0, 1];

    if(typeof upperLimit != 'number' || upperLimit < 0 ){
        return "Error";
    }
    for(var i = 2 ; i <upperLimit; i ++){
        x.push((i-2)+(i-1));
    } return x;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
