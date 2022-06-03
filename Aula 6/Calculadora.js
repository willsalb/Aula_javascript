//Forma de pegar entradas de usuario
function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1 - soma(+)\n 2 - Subtração (-)\n 3 - Mutiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)'));
    
    //Para verificar se a operação e valida
    if (!operacao || operacao >= 7){
        alert('Error - Operação invalida!')
        calculadora();
    } else {
        //Definindo variaveis, o "Number" converte o valor de string para o tipo number
        let n1 = Number(prompt('insira o primeiro valor'));
        let n2 = Number(prompt('insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Error - Parâmetros invalidos!')
            calculadora();
        } else {
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperação();
            }
            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperação();
            }
            function mutiplicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperação();
            }
            function DivisaoReal(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperação();
            }
            function DivisaoInteira(){
                resultado = n1 % n2
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperação();
            }
            function Potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperação();
            }
        
            /*Criei uma nova função perguntando se quer voltar para calculadora ou não, para não ter que ficar 
            recarregando a pagina*/
            function novaOperação() {
                let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim\n 2 - Não');
                
                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Vaza!')
                } else{
                    alert('digite uma opção valida');
                    novaOperação();
                }
            }
        }
    
        /*if (operacao == 1){
           soma();
        } else if (operacao == 2){
           subtracao();
        } else if (operacao == 3){
           mutiplicacao();
        } else if (operacao == 4){
           DivisaoReal();
        } else if (operacao == 5){
           DivisaoInteira();
        } else if (operacao == 6){
            Potenciacao();
        }*/

        switch (operacao) {
            case 1:
                soma();
                break;
                case 2:
                    subtracao();
                    break;
                    case 3:
                        mutiplicacao();
                        break;
                        case 4: 
                        DivisaoReal();
                        break;
                        case 5:
                            DivisaoInteira();
                            break;
                            case 6:
                                Potenciacao();
                                break;
        }
    }
    
}

calculadora();