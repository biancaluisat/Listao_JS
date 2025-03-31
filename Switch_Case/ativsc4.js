let nota = 4;

switch (nota){
    case 9:
    case 10:
        console.log('Nota A!');
        break;
    case 7: 
    case 8:
        console.log('Nota B!');
        break;
    case 5:
    case 6:
        console.log('Nota C.');
        break;
    case 3:
    case 4:
        console.log('Nota D.');
        break;
    case 0:
    case 1:
    case 2:
        console.log('Nota E.');
        break;
    default:
        console.log('Nota inválida.');
}