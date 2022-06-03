//Vetores ou arrays

//declarando um array
/*let array = ['string', 1, true];
console.log(array);*/

//pode guarda vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array[0]);

//Manipulando arrays, ForEach
//Recebe uma função como parametro, dentro da função ele recebe uma instrução
array.forEach(function(item, index){console.log(item, index)});

//Adiciona um item no final do array
/*array.push(1);
console.log(array);*/

//Remove um item no final do array
/*array.pop();
console.log(array);*/

//Remove um item no inicio do array
/*array.shift();
console.log(array);*/

/*array.unshift('novo item no incio');
console.log(array);*/

//Retorna o índice de algum valor
/*console.log(array.indexOf[true]);*/

//Remove ou substitui um item pelo índice
/*array.splice(0, 3)
console.log(array);*/

//Retorna uma parte de um array já existente
/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objectInterno'}}
console.log(object.objectInterno);

//desestruturação do object
/*var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);*/

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);


