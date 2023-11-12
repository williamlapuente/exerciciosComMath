const numero = Number(prompt('Informe um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p> A raiz quadrada de ${numero} é: ${Math.sqrt(numero)} </p><br>`;
texto.innerHTML += `<p> Este número arredondado pra cima é: ${Math.floor(numero)}</p><br>`;
texto.innerHTML += `<p>Este número arredondado pra baixo é: ${Math.ceil(numero)} </p><br>`;
texto.innerHTML += `<p>É inteiro: ${Number.isInteger(numero)}</p><br>`;
texto.innerHTML += `<p> Com duas casas decimais: ${(numero.toFixed(2))}</p><br>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}`;