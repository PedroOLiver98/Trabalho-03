alert("Bem-vindo!"); 

let i = 0;
while (i <= 15) {
    document.body.innerHTML += `<p> 3^${i} = ${Math.pow(3, i)} </p>`;
    i++;
}