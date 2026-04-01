// Efecto Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// Smooth scroll para todos los links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Typewriter Effect para Terminal
const terminalTexts = [
  "Iniciando entornos virtuales...",
  "Optimizando modelos RAG...",
  "Desplegando infraestructura Cloud...",
  "Afinando LLMs...",
  "Analizando Big Data..."
];
let termIndex = 0;
let charIndex = 0;
let isDeleting = false;
const termTarget = document.getElementById('typewriter-text');

function typeTerminal() {
  if (!termTarget) return;
  const currentText = terminalTexts[termIndex];
  
  if (isDeleting) {
    termTarget.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    termTarget.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 30 : 80;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 1500; // pausa con la frase completa
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    termIndex++;
    if (termIndex === terminalTexts.length) {
      termIndex = 0;
    }
    typeSpeed = 500; // pausa antes de la siguiente iteracion
  }

  setTimeout(typeTerminal, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeTerminal);


// Datos de Proyectos para Modal (Casos de Estudio)
const projectData = {
  tfg: {
    title: "Optimización de Carteras (TFG)",
    overline: "Machine Learning & Finanzas",
    problem: "Las criptomonedas y mercados modernos presentan una altísima volatilidad, lo que a menudo invalida los modelos clásicos de optimización de carteras (como Markowitz). Se necesitaba un enfoque robusto y adaptativo a entornos de incertidumbre masiva.",
    solution: "Se diseñó un framework híbrido en Python. Combinó resolución de problemas cuadráticos complejos con <strong>N-BEATS</strong>, un algoritmo predictivo avanzado basado en deep learning para el pronóstico de series temporales. La arquitectura procesaba eficientemente feeds de datos del mercado.",
    results: "Logré construir carteras con un <strong>ratio Sharpe un 30% superior</strong> a los benchmarks tradicionales en periodos de extrema volatilidad. El desarrollo fue galardonado con una Calificación de Sobresaliente."
  },
  crypto: {
    title: "Plataforma Backtesting Cripto",
    overline: "Ingesta & Data Science",
    problem: "Realizar pruebas retroactivas (backtesting) de estrategias de trading complejas requiere procesar velozmente millones de velas (candlesticks) históricas sin bloqueos, cuellos de botella ni fugas de memoria en la ingesta.",
    solution: "Desarrollé un <strong>motor multihilo en Python</strong> altamemente optimizado. Integré múltiples heurísticas e indicadores matemáticos (RSI, Bollinger) junto con un modelo predictor basado en Random Forest para la generación dinámica de señales. Agregué un generador de reportes visuales automatizados.",
    results: "La plataforma alcanzó tiempos de procesamiento de más de <strong>5 años de datos históricos en menos de 2 minutos</strong>. Demostró empíricamente que las estrategias basadas en ML superan el 'Buy & Hold' en mercados bajistas."
  }
};

// Lógica de Ventanas Modales
const modal = document.getElementById('case-study-modal');
const modalCloseBtn = document.getElementById('modal-close');

document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.getAttribute('data-project');
    const data = projectData[projectId];
    if (data) {
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-overline').textContent = data.overline;
      document.getElementById('modal-problem').innerHTML = data.problem;
      document.getElementById('modal-solution').innerHTML = data.solution;
      document.getElementById('modal-results').innerHTML = data.results;
      
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Evita el scroll del body
    }
  });
});

const closeModal = () => {
  if(modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

if(modal) {
  modal.addEventListener('click', (e) => {
    if(e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
