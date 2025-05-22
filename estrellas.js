
  const contenedor = document.getElementById("stars");

  const colores = ["#ffd700", "#ff69b4", "#f06292", "#ffb74d", "#ce93d8"];
  const tamanos = [120, 200, 100, 150, 150];

  function crearEstrella() {
    const estrella = document.createElement("div");
    estrella.classList.add("star");

    // Tamaño aleatorio
    const size = tamanos[Math.floor(Math.random() * tamanos.length)];
    estrella.style.width = size + "px";
    estrella.style.height = size + "px";

    // Color aleatorio
    estrella.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];

    // Posición aleatoria horizontal
    estrella.style.left = Math.random() * 100 + "vw";
    // Duración aleatoria
    estrella.style.animationDuration = (Math.random() * 3 + 4) + "s";

    contenedor.appendChild(estrella);

    // Remover estrella después de su animación
    setTimeout(() => estrella.remove(), 7000);
  }

  // Crear estrellas cada medio segundo
  setInterval(crearEstrella, 300);
