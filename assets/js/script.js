const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const resu = document.querySelector('.resu')

let cadeia = input.value
let msg = "";

const nvalido = ['j',"w","k","y","ç","h",'q','/','(',')','&','$','%','#','@','!']
const vogais = ["a","e","i","o","u"]
const reservados = /(z|x)/i;
const consoantes = ["b","c","d","f","g","l","m","n","p","r","s","t","v","w","x","z"];

function checarValidos(cadeia) {
  cadeia = input.value;
  let valid = true;

  //VERIFICA O TAMANHO DA CADEIA
  // if(cadeia.length > 10) {
  //   // cadeia = cadeia.slice(0,9)
  //   // msg = `A Cadeia: ${cadeianova} foi aceita e, o resto das letras ignorado`
  //   valid = true;
  //   console.log(cadeia)
  //   return valid;
  // }
  //VERIFICA SE CONTÉM LETRAS PROIBIDAS
   if(nvalido.some((letra) => cadeia.includes(letra))) {
    msg = 'caracteres não permitidos na cadeia'
    valid = false;
    return valid;
  }
  //VERIFICA SE CONTEM LETRAS RESERVADAS Z e X
  else if(cadeia.match(reservados)) {
    msg = `Palavra ${cadeia} contém letras reservadas (Z|X)`
    valid = false;
    return valid;
  }
  //ELE CHAMA DUAS FUNÇÕES, UMA CHECA SE CONTÉM NÚMEROS E A OUTRA CHECA A SEQUENCIA
  //CONSOANTE VOGAL
  else if(checaSeContemNumero(cadeia) && sequenciaConsoanteVogal(cadeia)) {
    valid = true;
    return valid
  }
   else {
    valid = false;
  }
    return valid;
}

//FUNÇÃO PARA VERIFICAR A SEQUENCIA CONSOANTE VOGAL
function sequenciaConsoanteVogal(frase) {
  let consoanteposi = false;
  let n = 0;
  for(let i =0; i < frase.length; i++) {
    const letra = frase[i].toLowerCase();
    if(consoanteposi && vogais.includes(letra)) {
      consoanteposi = false;
    } else if (!consoanteposi && consoantes.includes(letra)) {
      consoanteposi = true;
    } else if(i === frase.length -1 && !isNaN(parseInt(letra)) && n === 0) {
      n++
    } 
    else {
      msg = 'Sequencia não segue ordem consoante/vogal'
      return false;
    }
  }
  return true;
}

  //FUNÇÃO PARA TESTA SE CONTEM NÚMERO
  function contemNumero(n){
    return /\d/.test(n);
  }
  //VERIFICA SE NA CADEIA CONTÉM NÚMERO, EXCLUINDO EVENTUAIS NÚMEROS NO ULTIMO ÍNDICE
  function checaSeContemNumero(cadeia){
    // let valid = true;
    let valid = true;
    let cadeiadiminuida = cadeia.slice(0,-1)
      if(contemNumero(cadeiadiminuida) === true) {
        msg = 'Cadeia não aceita, não pode conter números no inicio e meio';
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
        resu.innerHTML = `A Sequencia "${input.value.slice(0,10)}" foi aceita`
        console.log(cadeia)
        return `Sequencia aceita`
      
    } else {
      resu.style.color = 'red'
      resu.innerHTML = msg
      return `Sequencia não aceita`
    }
  }


btn.addEventListener('click', function(e){
  e.preventDefault();


  console.log(eValido())
})
