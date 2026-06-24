let quilometros = Number(prompt("quantos quilometros voce ira percorrer"));
let combustivel = Number(prompt("quantos quilometros seu carro faz por litro"));
let custo = Number(prompt("qual o preco da gasolina"));
let valor =(combustivel * quilometros) * custo;
console.log("voce gastara aproximadamente: " + valor + " reais na viagem");
