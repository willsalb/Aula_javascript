//Estruturas condicionais

/*var jogador1 = 0
var jogador2 = 0
var placar;

//If ternário
    jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
    console.log('jogadores Invalidos');

    // Usando if
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('jogador1 marcou ponto!');
        placar = jogador1 > jogador2;
    } 
    // Usando else if
    else if (jogador2 > 0 && jogador1 == 0) {
        console.log('jogador2 marcou ponto!');
        plcar = jogador2 > jogador1;
    } 
    // Usando else
    else{
        console.log('ninguem marcou ponto');
    }

    switch(placar){
        case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou!')
        break;
        case placar = jogador2 > jogador1:
            console.log('jogador2 ganhou!')
            break;
            default:
                console.log('ninguém ganhou')
    }*/

    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

    //for - executa uma função até que seja falsa
    /*for (let indice = 0; indice < array.length; indice++){
        console.log(indice);
    }*/

    //for/in - executa repetição a partir de uma propredade
    //com array
    /*for(let i in array){
        console.log(i);
    }
    //Com object
    for(i in object){
        console.log(i);
    }*/

    //for/of - executa uma repetição a partir de um valor
    //com array
    /*for(i of array){
        console.log(i);
    }
    //com object - mas tem que passar a propriedade dentro da condição
    for(i of object.propriedade1){
        console.log(i);
    }*/

    //while 

    var a = 0
    while (a < 10){
        a++
        console.log(a);
    }
    //do/while
    do {
        a++;
        console.log(a)
    } while (a < 10);
