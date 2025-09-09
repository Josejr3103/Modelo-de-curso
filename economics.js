function toggleModulo(elemento) {
elemento.classList.toggle('active');
}

// Adicionar animação de entrada
document.addEventListener('DOMContentLoaded', function() {
const modulos = document.querySelectorAll('.modulo');
modulos.forEach((modulo, index) => {
modulo.style.opacity = '0';
modulo.style.transform = 'translateY(20px)';

setTimeout(() => {
    modulo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    modulo.style.opacity = '1';
    modulo.style.transform = 'translateY(0)';
}, index * 50);
});

// Contador animado para estatísticas
const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
const target = parseInt(stat.textContent);
let current = 0;
const increment = target / 30;
const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
        current = target;
        clearInterval(timer);
    }
    stat.textContent = Math.floor(current);
}, 50);
});
});

// Função para expandir/contrair todos os módulos
function toggleAll() {
const modulos = document.querySelectorAll('.modulo');
const anyExpanded = Array.from(modulos).some(m => m.classList.contains('active'));

modulos.forEach(modulo => {
if (anyExpanded) {
    modulo.classList.remove('active');
} else {
    modulo.classList.add('active');
}
});
}

// Adicionar botão para expandir/contrair tudo
document.addEventListener('DOMContentLoaded', function() {
const button = document.createElement('button');
button.innerHTML = '📋 Expandir/Contrair Tudo';
button.style.cssText = `
position: fixed;
bottom: 30px;
right: 30px;
background: linear-gradient(45deg, #667eea, #764ba2);
color: white;
border: none;
padding: 15px 25px;
border-radius: 50px;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
box-shadow: 0 10px 30px rgba(0,0,0,0.3);
transition: all 0.3s ease;
z-index: 1000;
font-family: inherit;
`;

button.onmouseover = () => {
button.style.transform = 'translateY(-5px)';
button.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
};

button.onmouseout = () => {
button.style.transform = 'translateY(0)';
button.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
};

button.onclick = toggleAll;
document.body.appendChild(button);
});