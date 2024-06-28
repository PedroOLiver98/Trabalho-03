/*Elaborar um programa que apresente os valores de conversão de graus Celsius
em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e
finalizando em 100 graus Celsius. O programa deverá apresentar os valores das
duas temperaturas.
*/
document.body.innerHTML += `Bem-vindo! <br>`; 
// Iniciar a contagem em 10 graus Celsius e finalizar em 100 graus Celsius, de 10 em 10 graus
let celsius = 10;
while (celsius <= 100) {
    // Calcular Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Exibir os valores de Celsius e Fahrenheit
    document.body.innerHTML += `${celsius} graus Celsius = ${fahrenheit.toFixed(2)} graus Fahrenheit <br>`;
    
    celsius += 10; // Incrementa o valor de Celsius
}
