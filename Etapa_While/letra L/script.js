/*Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no
final apresente o total do somatório da fatorial de cada valor lido.
*/
document.body.innerHTML += `Bem-vindo! <br>`; 

let i = 0, somatorio = 0;
while (i < 15) {
	let valor = parseInt(prompt('Informe um valor;'));
	let fatorial = 1
while (valor > 0){
	fatorial = fatorial * valor
	valor --;
}
somatorio = somatorio + fatorial
i++
}

// Exibe o resultado
document.body.innerHTML += `Total do somatório dos fatoriais: ${somatorio} <br>`;
