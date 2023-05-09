const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const resu = document.querySelector('.resu')


let cadeia

const nvalido = ['j',"w","k","y","ç","h",'q','/','(',')','&','$','%','#','@','!']
const vogais = ["a","e","i","o","u"]
const reservados = /(z|x)/i;
const consoantes = ["b","c","d","f","l","m","n","p","r","s","t","v","w","x","z"];

function checarValidos(cadeia) {
  cadeia = input.value;
  let valid = true;

  if(cadeia.length > 10) {
    console.log(`A Cadeia: ${cadeia} ultrapassou o limite de 10 caracteres`)
    valid = false;
    return valid;
  }
  else if(nvalido.some((letra) => cadeia.includes(letra))) {
    console.log('caracteres não permitidos na cadeia')
    valid = false;
    return valid;
  }
  else if(cadeia.match(reservados)) {
    console.log(`Palavra ${cadeia} contém letras reservadas (Z|X)`)
    valid = false;
    return valid;
  }

  else if(checaSeContemNumero(cadeia) && sequenciaConsoanteVogal(cadeia)) {
    valid = true;
    return valid
  }
   else {
    valid = false;
  }
  // if(checaSeContemNumero(cadeia));
  // if(sequenciaConsoanteVogal(cadeia));
  // if(checarPrimeiroDigitio(cadeia));
  // if(cadeia.startsWith('z') || cadeia.startsWith('x')) {
  //   console.log('Palavras não podem ser iniciadas com Z ou X')
  //   erro = true;  
  // }
//  return erro;

    return valid;
}


function sequenciaConsoanteVogal(frase) {
  let consoanteposi = false;
  for(let i =0; i < frase.length; i++) {
    const letra = frase[i].toLowerCase();
    if(consoanteposi && vogais.includes(letra)) {
      consoanteposi = false;
    } else if (!consoanteposi && consoantes.includes(letra)) {
      consoanteposi = true;
    } else {
      return false;
    }
  }
  return true;
}

// function checarPrimeiroDigitio(cadeia) {
//   let valid = true;
//   let digito = +cadeia[0]
//   if(!isNaN(digito)) {
//     console.log('Cadeia não aceita. não pode iniciar com numero')
//     valid = false;
//     return valid;
//   } else {
//     return valid;
//   }
//   return erro;
// }

  function contemNumero(n){
    return /\d/.test(n);
  }
  function checaSeContemNumero(cadeia){
    // let valid = true;
    let valid = true;
    let cadeiadiminuida = cadeia.slice(0,-1)
      if(contemNumero(cadeiadiminuida) === true) {
        console.log('Cadeia não aceita, não pode conter números no inicio e meio')
        valid = false;
      } else {
        valid = true;
      }
      return valid;
  }

  function eValido() {
    // let cadeia = input.value;
    if(checarValidos()) {
      resu.style.color = 'green'
      resu.innerHTML = `A Sequencia "${input.value}" foi aceita`
      return `Sequencia aceita`
    } else {
      resu.style.color = 'red'
      resu.innerHTML = `A Sequencia "${input.value}" não foi aceita`
      return `Sequencia não aceita`
    }
  }

btn.addEventListener('click', function(e){
  e.preventDefault();


  console.log(eValido())
})
