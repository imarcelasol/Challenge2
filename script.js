var screen = document.querySelector('#screen'); 

var btn = document.querySelectorAll('.btn'); 

//Obtiene el valor del botón, usando un bucle for 
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText; 

        // Si el texto del botón es '×', lo reemplaza con '*'
        if (btntext == '×') {
            btntext = '*';
        }

        // Si el texto del botón es '÷', lo reemplaza con '/'
        if (btntext == '÷') {
            btntext = '/';
        }

        screen.value += btntext; 
    });
}

// Calcula el valor en pantalla elevado al cuadrado
function pow() {
    screen.value = Math.pow(screen.value, 2); 
}
// Calcula la raíz cuadrada del valor en pantalla
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2); 
}

function log() {
    screen.value = Math.log(screen.value); // Calcula el logaritmo natural del valor en pantalla
}


function fact() {
    var i, num, f;
    f = 1
    num = screen.value;

    // Calcula el factorial del valor en pantalla usando un bucle for
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f; 
}
// Borra el último carácter en la pantalla
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1); 
}
