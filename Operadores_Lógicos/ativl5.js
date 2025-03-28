let numr = 11;

if ((numr % 2 === 0) && numr >10){
    console.log('É par e número grandão!');
}else if ((numr % 2 === 0) && numr <=10){
    console.log('É par e número pequeno.');
}else if ((numr % 2 != 0) && numr >10){
    console.log('É número impar e grandão.')
}else {
    console.log('É número pequeno e impar');
}
