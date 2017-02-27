function fibonacci(upperLimit) {
  var arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  var x = [];
    if(typeof upperLimit != 'number' || upperLimit < 0 ){
        return "Error";
    }
    for(var i = 0 ; i <upperLimit; i ++){
        x.push(arr[i]);
    } return x;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
