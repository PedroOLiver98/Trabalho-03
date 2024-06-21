alert("Bem-vindo!"); 
// Iniciar a contagem em 10 graus Celsius e finalizar em 100 graus Celsius, de 10 em 10 graus
let celsius = 10;
while (celsius <= 100) {
    // Calcular Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Exibir os valores de Celsius e Fahrenheit
    document.body.innerHTML += `<p> ${celsius} graus Celsius = ${fahrenheit.toFixed(2)} graus Fahrenheit </p>`;
    
    celsius += 10; // Incrementa o valor de Celsius
}
