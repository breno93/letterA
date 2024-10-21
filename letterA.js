function checkLetterA(string) {

  const stringLower = string.toLowerCase();

  const amount = (stringLower.match(/a/g) || []).length;

  if (amount > 0) {
    console.log(`A letra 'a' foi encontrada ${amount} vez(es) na string.`);
  } else {
    console.log("A letra 'a' não foi encontrada na string.");
  }
}

const texto = "Aqui estamos fazendo o teste do programa, vamos verificar o resultado!";
checkLetterA(texto);
