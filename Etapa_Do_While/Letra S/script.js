/*Elaborar um programa que apresente o resultado inteiro da divisão de dois
números quaisquer. Para a elaboração do programa, não utilizou em hipótese
alguma o conceito do operador aritmético ” / ”. A solução deve ser alcançada
com a utilização de looping. Ou seja, o programa deve apresentar como
resultado (quociente) quantas vezes o divisor cabe no dividendo.
*/
document.body.innerHTML += `Bem-vindo! <br>`; 

let dividendo = parseInt(prompt('Informe um valor:'));
let divisor = parseInt(prompt('Informe o divisor'));

if (divisor === 0) {
	document.body.innerHTML += `Erro: divisão por zero`;
} else {
	let quociente = 0;
	while (dividendo >= divisor) {
		dividendo -= divisor;
		quociente++;
	}
	document.body.innerHTML += `${quociente} <br>`;
}

/* Exemplos de uso
(10, 3)); // Saída esperada: 3
(15, 4)); // Saída esperada: 3
(20, 7)); // Saída esperada: 2
(7, 2)); // Saída esperada: 3
(0, 5)); // Saída esperada: 0
(10, 0)); // Saída esperada: "Erro: divisão por zero."
*/

