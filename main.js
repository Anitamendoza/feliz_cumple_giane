onload = () =>{
    document.body.classList.remove("container");
};

function agregarTulipan() {
  const campo = document.getElementById("campoTulipanes");
  const tulipan = document.createElement("div");
  tulipan.classList.add("tulipan");
  tulipan.style.left = Math.random() * 90 + "%";

  const flor = document.createElement("div");
  flor.classList.add("flor");

  const tallo = document.createElement("div");
  tallo.classList.add("tallo");

  tulipan.appendChild(flor);
  tulipan.appendChild(tallo);
  campo.appendChild(tulipan);
}
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');

    // Esperar a la primera interacción del usuario
    const activarAudio = () => {
      audio.muted = false;
      audio.play();
      document.removeEventListener('click', activarAudio);
    };

    document.addEventListener('click', activarAudio);
  });