const modal = document.getElementById('modal')
const contentModal = document.getElementById('contentModal')
const closeBtn = document.getElementById('closeBtn')
const projects = document.querySelectorAll('.project')

// Fecha o modal
closeBtn.addEventListener('click', (e) => {
  modal.style.display = "none"
  contentModal.innerHTML = "" 
  window.addEventListener('click', (event) =>{
    if(event.target === modal){
        modal.style.display = "none"
    }
})
})
//abre o modal
projects.forEach(projeto => {
  projeto.addEventListener('click', () => {
    modal.style.display = "flex"

    const iframe = document.createElement('iframe')
    iframe.src = projeto.dataset.url
    contentModal.appendChild(iframe)
  })
})

// Toggle Theme Button - Alterna entre Light e Dark Mode
const toggleTheme = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const html = document.documentElement;

// Função para aplicar o tema

function applyTheme(isDark) {
  if (isDark) {
    html.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}


// Carrega o tema salvo ou usa o padrão do sistema
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    applyTheme(savedTheme === 'dark');
  } else {
    applyTheme(prefersDark);
  }
}

// Aplica o tema ao carregar a página
loadTheme();

// Event listener para o botão toggle
if (toggleTheme && sunIcon && moonIcon) {
  toggleTheme.addEventListener('click', function(e) {
    const isDark = html.classList.contains('dark');
    
    // Alterna o tema
    applyTheme(!isDark);
    
    // Adiciona animação de rotação ao ícone ativo
    const activeIcon = !isDark ? moonIcon : sunIcon;
    activeIcon.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      activeIcon.style.transform = 'rotate(0deg)';
    }, 100);
  });
}

const imagem = document.querySelectorAll('.project');

const projetos = document.querySelectorAll('.project');

projetos.forEach(projeto => {
  const nameProject = projeto.querySelector('.name-work'); // pega só o título dentro desse projeto

  projeto.addEventListener('mouseenter', () => {
    if (nameProject) {
      nameProject.style.bottom = '0';
    }
  });

  projeto.addEventListener('mouseleave', () => {
    if (nameProject) {
      nameProject.style.bottom = '-200px';
    }
  });

  // cookies

  const banner = document.getElementById("cookie-banner"); 
  const closeBtn = document.getElementById("close-banner");
 
  if(localStorage.getItem("CookieAccepted" === "true")){
    banner.style.display = "none"
  }

  closeBtn.addEventListener('click', () =>{
    localStorage.setItem("cookieAccepted", "true")
    banner.style.display = "none"
  })
 
  AOS.init();

});

