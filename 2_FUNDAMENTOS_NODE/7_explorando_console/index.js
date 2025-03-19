// mais de um valor
const x = 10;
const y = "Pedro";
const z = [1, 2];

console.log(x, y, z);

// contagem de impressões
console.count(`O Valor de x é: ${x}, contagem`);
console.count(`O Valor de x é: ${x}, contagem`);
console.count(`O Valor de x é: ${x}, contagem`);
console.count(`O Valor de x é: ${x}, contagem`);

// variavel entre string
console.log("O nome dele é %s, e ele é desenvolvedor", y);

// limpar o console
setTimeout(() => {
  console.clear();
}, 2000);
