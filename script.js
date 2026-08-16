const copiarResultado = document.getElementById("copiar");
const botonGenerar = document.getElementById("generar");
const mostrarResultado = document.getElementById("resultadoInput");

const longitudInput = document.getElementById("longitudInput");
const mayusculasCheckbox = document.getElementById("mayusculas");
const minusculasCheckbox = document.getElementById("minusculas");
const numerosCheckbox = document.getElementById("numeros");
const simbolosCheckbox = document.getElementById("simbolos");

const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = minusculas.toUpperCase();
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

botonGenerar.addEventListener("click", () => {
    const longitud = parseInt(longitudInput.value);
    const incluirMayusculas = mayusculasCheckbox.checked;
    const incluirMinusculas = minusculasCheckbox.checked;
    const incluirNumeros = numerosCheckbox.checked;
    const incluirSimbolos = simbolosCheckbox.checked;

    let caracteres="";
    let resultado="";
 
    if (incluirMayusculas) {
        caracteres += mayusculas;
    }
    if (incluirMinusculas) {
        caracteres += minusculas;
    }
    if(incluirNumeros){
        caracteres+=numeros;
    }
    if(incluirSimbolos){
        caracteres+=simbolos
    }
    for (let i = 1; i <= longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        resultado +=caracteres[indice];
    }
    console.log(resultado) 
    mostrarResultado.value = resultado;
});

