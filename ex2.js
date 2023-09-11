const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a nota do exame I: ', (notaI) => {
  rl.question('Digite a nota do exame II: ', (notaII) => {
    rl.question('Digite a nota do exame III: ', (notaIII) => {
      rl.question('Digite a nota do exame IV: ', (notaIV) => {
        rl.question('Digite a nota do exame V: ', (notaV) => {
          const media = (parseFloat(notaI) + parseFloat(notaII) + parseFloat(notaIII) + parseFloat(notaIV) + parseFloat(notaV)) / 5;

          if (media >= 70) {
            if (notaI >= 70 && notaII >= 70 && notaIV >= 70) {
              console.log('Classificação: A - passou em todos os exames');
            } else if (notaI >= 70 && notaII >= 70 && (notaIII >= 70 || notaIV >= 70)) {
              console.log('Classificação: B - passou em I, II e IV, mas não em III ou V');
            } else if (notaI >= 70 && notaII >= 70 && (notaIII < 70 || notaIV < 70) && notaV < 70) {
              console.log('Classificação: C - passou em I e II, III ou IV, mas não em V');
            }
          } else {
            console.log('Classificação: Reprovado - outras situações');
          }

          rl.close();
        });
      });
    });
  });
});