let btnEncriptografar = document.getElementById("btn-criptografar");
let btnDesencriptografar = document.getElementById("btn-desencriptografar");
let divResult = document.getElementById("result");
let texto = document.getElementById("input");
let alert = document.getElementById('alert')

function encriptografar() {
  console.log(texto.value);

  if (texto.value != "") {
    let text = texto.value.split("");

    for (let i = 0; i < text.length; i++) {
      switch (text[i]) {
        case "e":
          text[i] = "enter";
          break;
        case "i":
          text[i] = "imes";
          break;
        case "a":
          text[i] = "ai";
          break;
        case "o":
          text[i] = "ober";
          break;
        case "u":
          text[i] = "ufat";
          break;
      }
    }
    alteraResultado(text.join(""));
  }

  exibeAlerta('Digite alguma coisa...', 'warning')
}

function desencriptografar() {
  let text = texto.value.split("");

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "enter":
        text[i] = "e";
        break;
      case "imes":
        text[i] = "i";
        break;
      case "ai":
        text[i] = "a";
        break;
      case "ober":
        text[i] = "o";
        break;
      case "ufat":
        text[i] = "u";
        break;
    }
  }

  alteraResultado(text.join(""));
}

function alteraResultado(msg) {
  let result = `
    <p>
      ${msg}
    </p>
    <button id="btn-copiar">Copiar</button>`;

  divResult.innerHTML = result;
}

function exibeAlerta(message, type){
    alert.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
    <p>${message}</p>
    </div>`

    setTimeout(() => {
        alert.innerHTML = ''; 
    }, 3000);
}
