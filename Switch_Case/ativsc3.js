let operação = '*'
let numr = 2;
let numr2 = 8;

switch (operação){
    case '-':
        console.log(numr - numr2);
        break;
    case '+':
        console.log(numr + numr2);
        break;
    case '*':
        console.log(numr * numr2);
        break;
    case '/':
        console.log(numr / numr2);
        break;
    default:
        console.log('Operação inválida');
}