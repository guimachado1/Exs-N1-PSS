const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrays para armazenar as respostas dos leitores
const idades = [];
const cidades = [];
const opinioes = [];

// Função para ler as respostas de 16 leitores
function coletarRespostas(leitor) {
  rl.question(`Digite a idade do leitor ${leitor}: `, (idade) => {
    rl.question(`Digite a cidade do leitor ${leitor}: `, (cidade) => {
      rl.question(`Digite a opinião do leitor ${leitor} (3 - ótimo, 2 - bom, 1 - regular): `, (opiniao) => {
        idades.push(Number(idade));
        cidades.push(cidade);
        opinioes.push(Number(opiniao));
        
        if (leitor < 16) {
          coletarRespostas(leitor + 1);
        } else {
          // Feche o readline
          rl.close();
          calcularEExibirResultados();
        }
      });
    });
  });
}

// Função para calcular e exibir os resultados
function calcularEExibirResultados() {
  // Cálculo da média de idades dos leitores que responderam "ótimo"
  const totalOtimo = opinioes.filter(opiniao => opiniao === 3).length;
  const somaIdadesOtimo = idades.reduce((acc, idade, index) => {
    if (opinioes[index] === 3) {
      return acc + idade;
    }
    return acc;
  }, 0);
  const mediaIdadesOtimo = totalOtimo > 0 ? somaIdadesOtimo / totalOtimo : 0;

  // Contagem de leitores que responderam "regular"
  const totalRegular = opinioes.filter(opiniao => opiniao === 1).length;

  // Porcentagem de leitores que responderam "bom" entre todos os leitores
  const totalLeitores = opinioes.length;
  const totalBom = opinioes.filter(opiniao => opiniao === 2).length;
  const porcentagemBom = (totalBom / totalLeitores) * 100;

  // Porcentagem de leitores para cada cidade
  const cidadesUnicas = [...new Set(cidades)];
  const porcentagensPorCidade = cidadesUnicas.map(cidade => {
    const totalPorCidade = cidades.filter(c => c === cidade).length;
    const porcentagem = (totalPorCidade / totalLeitores) * 100;
    return `${cidade}: ${porcentagem.toFixed(2)}%`;
  });

  // Exibir os resultados
  console.log(`Média das idades dos leitores que responderam "ótimo": ${mediaIdadesOtimo.toFixed(2)}`);
  console.log(`Quantidade de leitores que responderam "regular": ${totalRegular}`);
  console.log(`Porcentagem de leitores que responderam "bom" entre todos os leitores: ${porcentagemBom.toFixed(2)}%`);
  console.log(`Porcentagem de leitores para cada cidade:`);
  porcentagensPorCidade.forEach(porcentagem => console.log(porcentagem));
}

// Iniciar a coleta de respostas
coletarRespostas(1);