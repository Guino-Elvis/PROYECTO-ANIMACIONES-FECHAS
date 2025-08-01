const frases = [
  "Feliz Día de la Novia, Mery 💖",
  "Gino y Mery por 100Pre 💍",
  "Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección, Mery. ⭐",
  "Un mundo nace cuando dos se besan... y yo nací contigo, Mery. ⭐",
  "Estar contigo o no estar contigo es la medida de mi tiempo, Mery. ❤️",
  "El amor no tiene cura, pero tú eres mi medicina, Mery. ⭐",
  "Si sé lo que es el amor, es gracias a ti ⭐",
  "Cada instante contigo es un tesoro ❤️",
];


const imagenes = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg"
];

// 🎨 Color neón brillante
function generarColorNeon() {
  const colores = ["#ff4d4d", "#ffffff", "#ff66cc", "#ff9999"];
  return colores[Math.floor(Math.random() * colores.length)];
}

// 🅰️ Fuente aleatoria
function generarFuenteAleatoria() {
  const fuentes = [
    "Arial, sans-serif",
    "'Times New Roman', serif",
    "'Courier New', monospace",
    "Georgia, serif",
    "Verdana, sans-serif",
    "Impact, sans-serif",
    "'Comic Sans MS', cursive"
  ];
  return fuentes[Math.floor(Math.random() * fuentes.length)];
}

// 📍 Posición aleatoria cerca del centro
function generarPosicionCentrada() {
  const offsetX = (Math.random() - 0.5) * window.innerWidth * 0.2;
  const offsetY = (Math.random() - 0.5) * window.innerHeight * 0.2;
  return {
    left: `calc(50% + ${offsetX}px)`,
    top: `calc(50% + ${offsetY}px)`
  };
}

// 📈 Movimiento y escala aleatoria para animación final
function generarDestinoAleatorio() {
  const dx = (Math.random() - 0.5) * 200;
  const dy = (Math.random() - 0.5) * 200;
  const scale = 4 + Math.random() * 2;
  return `translate(${dx}vw, ${dy}vh) scale(${scale})`;
}

// 🌟 Crea un elemento animado: texto o imagen
function crearElementoAnimado() {
  const usarImagen = imagenes.length && Math.random() < 0.1; // 10% imagen, 90% texto
  let el;

  if (usarImagen) {
    const src = imagenes[Math.floor(Math.random() * imagenes.length)];
    el = document.createElement("img");
    el.src = `./img/${src}`;
    el.style.width = `${Math.floor(Math.random() * 40) + 60}px`; // tamaño un poco mayor
    el.style.height = "auto";
    el.style.border = "2px solid white"; // solo para testeo
  } else {
    el = document.createElement("div");
    el.textContent = frases[Math.floor(Math.random() * frases.length)];
    el.style.fontSize = `${Math.floor(Math.random() * 20) + 14}px`;
    el.style.color = generarColorNeon();
    el.style.fontFamily = generarFuenteAleatoria();
  }

  el.classList.add("texto-flotante");
  const posicion = generarPosicionCentrada();
  el.style.left = posicion.left;
  el.style.top = posicion.top;
  el.style.setProperty("--anim-final", generarDestinoAleatorio());

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

// 🚀 Iniciar todo al cargar
function iniciarAnimacion() {
  setInterval(crearElementoAnimado, 180);
}

window.addEventListener("DOMContentLoaded", iniciarAnimacion);
