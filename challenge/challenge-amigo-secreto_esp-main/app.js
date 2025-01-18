// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
  // Capturamos el valor del campo de texto
  const nombre = document.getElementById("amigo").value.trim();

  // Validamos si el campo no está vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // No hacemos nada si el campo está vacío
  }

  // Agregamos el nombre al array
  amigos.push(nombre);

  // Limpiamos el campo de entrada
  document.getElementById("amigo").value = "";

  // Actualizamos la lista de amigos en el HTML
  mostrarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function mostrarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiamos la lista existente
  listaAmigos.innerHTML = "";

  // Iteramos sobre el array amigos y creamos elementos <li> para cada uno
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i]; // Asignamos el nombre del amigo al elemento <li>
    listaAmigos.appendChild(li); // Añadimos el <li> a la lista
  }
}

// Función para realizar el sorteo y seleccionar un amigo aleatorio
function sortearAmigo() {
  // Validamos que haya al menos un amigo en la lista
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Generamos un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtenemos el nombre del amigo sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostramos el nombre sorteado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li><strong>El amigo secreto sorteado es:</strong> ${amigoSorteado}</li>`;
}
