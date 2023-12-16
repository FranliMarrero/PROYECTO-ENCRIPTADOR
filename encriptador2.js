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