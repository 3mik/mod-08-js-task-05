var a = 0,
    b = 0,
    value = 0;    

a = prompt('Podaj liczbę'); 
b = prompt('Podaj drugą liczbę');
value = (a * a) - (2 * a * b) + (b * b);
console.log ('(a * a) - (2 * a * b) + (b * b) równa się: ' + value);

//example 1

console.log('Using "if else" statement');

if (value == 0) {
    console.log('Wynik działania jest równy zero')
} else if (value > 0) {
    console.log('Wynik dodatni')
} else if (value < 0) {
    console.log('Wynik ujemny')
} else console.log('Otrzymany wynik nie jest liczbą');

//example 2

console.log('Using "switch case" statement');

switch (true) {
    case (value < 0):
        console.log('Wynik ujemny')
        break;
    case (value > 0):
        console.log('Wynik dodatni')
        break;
    case (value == 0):
        console.log('Wynik działania jest równy zero')
        break;
    default: 
        console.log('Otrzymany wynik nie jest liczbą')    
}

