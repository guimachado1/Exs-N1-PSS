const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("1- File Duplo\n2- Alcatra\n3- Picanha\n");

rl.question("Digite o tipo: ", (tipo) => {
  rl.question("Digite a quantidade comprada em kg: ", (quantidade) => {
    rl.question("A compra será realizada com cartão Tabajara? 1p/ SIM - 2p/ NAO: ", (resposta) => {
      let nome, preco, r, total;

      tipo = parseInt(tipo);
      quantidade = parseInt(quantidade);
      resposta = parseInt(resposta);

      if (tipo === 1) {
        nome = "File Duplo";
        if (quantidade <= 5) {
          preco = quantidade * 24,90;
        } else {
          preco = quantidade * 25.80;
        }
      }

      if (tipo === 2) {
        nome = "Alcatra";
        if (quantidade <= 5) {
          preco = quantidade * 25.90;
        } else {
          preco = quantidade * 26.80;
        }
      }

      if (tipo === 3) {
        nome = "Picanha";
        if (quantidade <= 5) {
          preco = quantidade * 36.90;
        } else {
          preco = quantidade * 37.80;
        }
      }

      if (resposta === 1) {
        r = "SIM";
        desconto = (preco * 5) / 100;
        total = preco - desconto;
      } else {
        r = "NAO";
        total = preco;
      }

      console.log("\n***************************CUPOM FISCAL**************************************");
      console.log("* Carne.......................................................... %s ", nome);
      console.log("* Quantidade..................................................... %d KG ", quantidade);
      console.log("* Preço.........................................................  R$ ", preco);
      console.log("* Cartao Tabajara................................................ %s ", r);
      console.log("* Total com desconto............................................  R$ ", total);
      console.log("******************************************************************************");

      rl.close();
    });
  });
});