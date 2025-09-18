// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres ingresados
const listaNombres = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validaciones
    if (nombre === '') {
        alert("Por favor, escribe un nombre.");
        return;
    }

    listaNombres.push(nombre);
    actualizarLista();
    input.value = '';
    input.focus();
}

// Función para actualizar la lista visual en la interfaz
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaNombres.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });

    // Limpiar resultado anterior si se actualiza la lista
    document.getElementById('resultado').innerHTML = '';
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (listaNombres.length === 0) {
        alert("Debes agregar al menos un nombre.");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * listaNombres.length);
    const ganador = listaNombres[indiceGanador];

    resultado.innerHTML = `<li> El amigo sorteado es: <strong>${ganador}</strong></li>`;
    // Esperar 5 segundos y reiniciar
    setTimeout(() => {
        // Vaciar el arreglo original
        listaNombres.length = 0;

        // Limpiar lista en pantalla
        document.getElementById('listaAmigos').innerHTML = '';

        // Limpiar resultado
        resultado.innerHTML = '';

        // Limpiar input
        document.getElementById('amigo').value = '';
    }, 10000); // Espera de 10 segundos
}