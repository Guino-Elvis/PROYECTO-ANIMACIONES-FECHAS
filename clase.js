const frases = [
  "hola de nuevo",
  "bienvenido",
  "esto es magia",
  "texto aleatorio",
  "apareciendo...",
  "desapareciendo..."
];

let imagenes = [];

// 🔄 Carga automática de imágenes desde la carpeta ./img/
async function cargarImagenes() {
  try {
    const resp = await fetch("./img/");
    const text = await resp.text();
    // Extrae los archivos válidos por su extensión
    const archivos = Array.from(
      text.matchAll(/href="([^"]+\.(png|jpg|jpeg|gif|svg))"/gi),
      m => m[1]
    );
    imagenes = archivos;
  } catch (err) {
    console.warn("No se pudo cargar imágenes automáticamente", err);
  }
}

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
  const usarImagen = imagenes.length && Math.random() < 0.3; // 30% imagen, 70% texto
  let el;

  if (usarImagen) {
    const src = imagenes[Math.floor(Math.random() * imagenes.length)];
    el = document.createElement("img");
    el.src = `./img/${src}`;
    el.style.width = `${Math.floor(Math.random() * 40) + 30}px`;
    el.style.height = "auto";
    el.style.filter = "drop-shadow(0 0 15px white)";
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
async function iniciarAnimacion() {
  await cargarImagenes();
  setInterval(crearElementoAnimado, 150);
}

window.addEventListener("DOMContentLoaded", iniciarAnimacion);
