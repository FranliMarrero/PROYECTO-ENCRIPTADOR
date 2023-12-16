    document.getElementById("copy").addEventListener("click", function() {
    // Seleccionar el texto del textarea
    var textarea = document.getElementById("msgResult");
    textarea.select();
    
    // Copiar el texto al portapapeles
    document.execCommand('copy');
    
    // Desseleccionar el texto
    textarea.setSelectionRange(0, 0);

    // Mostrar un mensaje o realizar alguna acción adicional
    alert("Texto copiado al portapapeles: " + textarea.value);
});

function cifrarMensaje() {
  const mensaje = document.getElementById('mensaje').value;
  const clave = parseInt(document.getElementById('offset').value);
  const mensajeCifrado = cifrarCesar(mensaje, clave);
  alert('Mensaje cifrado: ' + mensajeCifrado);
}

function descifrarMensaje() {
  const mensaje = document.getElementById('mensaje').value;
  const clave = parseInt(document.getElementById('offset').value);
  const mensajeDescifrado = descifrarCesar(mensaje, clave);
  alert('Mensaje descifrado: ' + mensajeDescifrado);
}

function cifrarCesar(mensaje, desplazamiento) {
  mensaje = mensaje.toUpperCase();
  let mensajeCifrado = '';
  for (let i = 0; i < mensaje.length; i++) {
      let charCode = mensaje.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
          charCode = ((charCode - 65 + desplazamiento) % 26 + 26) % 26 + 65;
      }
      mensajeCifrado += String.fromCharCode(charCode);
  }
  return mensajeCifrado;
}

function descifrarCesar(mensajeCifrado, desplazamiento) {
  return cifrarCesar(mensajeCifrado, -desplazamiento);
}


// Función para cifrar un mensaje usando el cifrado César
/*function cifrarMensaje(mensaje, desplazamiento) {
  // Convertir el mensaje a mayúsculas para simplificar el cifrado
  mensaje = mensaje.toUpperCase();

  let mensajeCifrado = '';

  for (let i = 0; i < mensaje.length; i++) {
    let charCode = mensaje.charCodeAt(i);

    // Solo cifrar letras del alfabeto, ignorar espacios y otros caracteres
    if (charCode >= 65 && charCode <= 90) {
      // Aplicar el desplazamiento y asegurarse de estar en el rango de las letras mayúsculas
      charCode = ((charCode - 65 + desplazamiento) % 26 + 26) % 26 + 65;
    }

    mensajeCifrado += String.fromCharCode(charCode);
  }

  return mensajeCifrado;
}

// Función para descifrar un mensaje cifrado con el cifrado César
function cifrarMensaje(mensajeCifrado, desplazamiento) {
  // Llamar a la función de cifrado con un desplazamiento negativo para descifrar
  return cifrarCesar(mensajeCifrado, -desplazamiento);
}

// Ejemplo de uso
const mensajeOriginal = 'Hola, mundo!';
const desplazamiento = 3;

const mensajeCifrado = cifrarCesar(mensajeOriginal, desplazamiento);
console.log('Mensaje cifrado:', mensajeCifrado);

const mensajeDescifrado = decifrarMensaje(mensajeCifrado, desplazamiento);
console.log('Mensaje descifrado:', mensajeDescifrado);




/*function cifrar(texto, clave) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];
      if (caracter.match(/[a-z]/i)) {
        let codigo = texto.charCodeAt(i);
        let ascii_offset = caracter === caracter.toUpperCase() ? 65 : 97;
        resultado += String.fromCharCode((codigo - ascii_offset + clave) % 26 + ascii_offset);
      } else {
        resultado += caracter;
      }
    }
    return resultado;
  }
  
  function descifrar(texto, clave) {
    return cifrar(texto, -clave);
  }
  
  // Ejemplo de uso:
  /*let mensajeOriginal = "Hola, esto es un mensaje secreto!";
  let clave = 3;
  
  let mensajeCifrado = cifrar(mensajeOriginal, clave);
  console.log("Mensaje cifrado:", mensajeCifrado);
  
  let mensajeDescifrado = descifrar(mensajeCifrado, clave);
  console.log("Mensaje descifrado:", mensajeDescifrado);*/