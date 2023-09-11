const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verifica(x) {
  if (x % 400 === 0 || (x % 4 === 0 && x % 100 !== 0)) {
    return 1;
  } else {
    return 0;
  }
}

rl.question('Digite um ano: ', (input) => {
  const ano = parseInt(input);

  if (verifica(ano) === 1) {
    console.log(`${ano}, ano bissexto!`);
  } else {
    console.log(`${ano}, não é ano bissexto!`);
  }

  rl.close();
});