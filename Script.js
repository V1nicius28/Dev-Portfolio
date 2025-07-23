// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

// Adiciona evento de clique para cada link
menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remove a classe 'active' de todos os links
        menuLinks.forEach(item => item.classList.remove("active"));

        // Adiciona a classe 'active' apenas no link clicado
        this.classList.add("active");
    });
});

// Evento de rolagem para ativar o link correspondente à seção visível
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - window.innerHeight * 0.3; // Ajuste para detectar corretamente
        let sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove a classe 'active' de todos os links
            menuLinks.forEach(item => item.classList.remove("active"));

            // Adiciona 'active' no link correspondente à seção visível
            let activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

// Função que adiciona ou remove a classe 'visible' ao entrar ou sair da tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe 'visible' quando a section entra na tela
        entry.target.classList.add('visible');
      } else {
        // Remove a classe 'visible' quando a section sai da tela
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.3 }); // A section será considerada visível quando 30% dela entrar na tela
  
  // Selecione todas as sections e comece a observar
  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});
  
function copyEmail() {
    const email = "viniciusgarcezmachado@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("E-mail copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar e-mail: ", err);
    });
}

// tsParticles Configuração
function loadParticles() {
    let particlesConfig = {
        particles: {
            number: { 
                value: window.innerWidth <= 768 ? 20 : 200 // Reduz para 20 partículas em telas menores
            },
            size: { value: 1 },
            move: { 
                enable: true,
                speed: 2 
            },
            color: { value: "#303030" },
            line_linked: { 
                enable: true,
                color: "#303030", 
                opacity: 0.4
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.4,
                        color: "#303030"
                    }
                }
            }
        }
    };

    tsParticles.load("tsparticles", particlesConfig);
}
// Carregar as partículas ao iniciar
loadParticles();

// Atualizar ao redimensionar a tela
window.addEventListener("resize", loadParticles);


document.querySelector(".btnbarra").addEventListener("click", function(event) {
    document.querySelector("nav ul").classList.toggle("show");
    event.stopPropagation(); // Impede que o clique se propague para o document
});

document.addEventListener("click", function(event) {
    let menu = document.querySelector("nav ul");
    let botao = document.querySelector(".btnbarra");

    // Verifica se o clique foi fora do menu e do botão
    if (!menu.contains(event.target) && !botao.contains(event.target)) {
        menu.classList.remove("show"); // Fecha o menu
    }
});




