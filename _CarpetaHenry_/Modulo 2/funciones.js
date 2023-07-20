function sumaTres(x) {
console.log(x + 3);
}

sumaTres(9);


// Formas de declarar funciones

//PRIMERO   
function sumaTres(x) {
    return x + 3;
}
  sumaTres(9)
//SEGUNDO
var sumaTres = function (x) {
    return x + 3;
}
sumaTres(9)
//TERCERO
var sumaTres = (x) => {
    return x + 3;
}
sumaTres(9)
