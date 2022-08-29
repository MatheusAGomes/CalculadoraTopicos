
let primeironumero;
let segundonumero;
let operacaoutilizada;
let estadoEtapa;

function onClickNumber(numero) {
   
    
    if( !isNaN(numero))
    {
        if(document.calc.tab.value == '0' || (operacaoutilizada != null &&  estado == true))
        {
            estado = false;
            document.calc.tab.value = numero;
        }
        else
        {
           
            document.calc.tab.value += numero;
        }
    }
    }

function onClickFunction(operacao) {
    

        switch (operacao) {
            
            case '<-':
                document.calc.tab.value = parseInt(document.calc.tab.value / 10)
                break;
            case '.':
                if (!verificarQuebrado(document.calc.tab.value)) {
                    document.calc.tab.value = document.calc.tab.value + '.'
                }
                
                    break;

            case 'ac':
                document.calc.tab.value = 0;
                primeironumero = null;
                segundonumero = null;
                break;
            
            
            case '=':
                if(operacaoutilizada == null)
                {

                }
                else
                {
                    segundonumero = + document.calc.tab.value;
                    document.calc.tab.value = operandoValores(primeironumero,segundonumero,operacaoutilizada);
                    operacaoutilizada = null;  
                }
                 
                break;
            
            case '+/-':
                
               
                    
                    document.calc.tab.value =  document.calc.tab.value * -1;
                
                break;
                    
            
            default:
                
                primeironumero = + document.calc.tab.value;
                operacaoutilizada = operacao;
                descolore();
                trocarCor(document.getElementById(operacao),"green")
                estado = true;
                

                
                break;
        }
    }
    function operandoValores(valor1,valor2,operacao){
        switch (operacao) {
            case '+':
                document.getElementById(operacao).style.backgroundColor = "white";
                return valor1 + valor2;
            case '-':
                document.getElementById(operacao).style.backgroundColor = "white";
                return valor1 - valor2;
            case 'x':
                document.getElementById(operacao).style.backgroundColor = "white";
                return valor1 * valor2;

            case '/':
                document.getElementById(operacao).style.backgroundColor = "white";
                return valor1 / valor2;
            default:
                break;
        }
        
    }
function verificarQuebrado(numero)
{
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] == '.') {
            return true;
            
        }
        
    }
    return false;
}
function trocarCor(elemento,cor) {
    
    elemento.style.backgroundColor = cor;
}
function descolore()
{
    document.getElementById("-").style.backgroundColor = "white";
    document.getElementById("+").style.backgroundColor = "white";
    document.getElementById("x").style.backgroundColor = "white";
    document.getElementById("/").style.backgroundColor = "white";
}