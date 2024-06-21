alert("Bem-vindo!");

// Usando um laço for para iterar de 1 até 199
for (let i = 1; i < 200; i++) {
    // Verificando se o número é divisível por 4
    if (i % 4 === 0) {
        // Mostrando o número divisível por 4
        document.body.innerHTML += `<p> O n° ${i} é divisivel por 4 </p>`;
    }
} 
