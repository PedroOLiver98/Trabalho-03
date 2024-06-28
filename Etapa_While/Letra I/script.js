/* Escreva um programa que apresente a série de Fibonacci até o décimo quinto
termo. A série de Fibonacci é formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34,
... etc. Esta série se caracteriza pela soma de um termo posterior com o seu
anterior subseqüente.
*/
document.body.innerHTML += `Bem-vindo! <br>`; 
 
let i = 1;
let anterior = 0;
let posterior = 1;
let resultado = 1; 

// Calculamos e imprimimos os próximos termos da série usando um loop while
while (i < 16) {
    document.body.innerHTML+= `<span>${resultado}, <span>`
	resultado = (posterior + anterior );
	anterior = posterior;
	posterior = resultado;
    i++;
}