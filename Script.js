// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        menuLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");
    });
});

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - window.innerHeight * 0.3; 
        let sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            menuLinks.forEach(item => item.classList.remove("active"));

            let activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 }); 
  
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

function loadParticles() {
    let particlesConfig = {
        particles: {
            number: {
                value: window.innerWidth <= 768 ? 20 : 100
            },
            size: {
                value: 6,
                random: true
            },
            move: {
                enable: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
            },
            color: {
                value: "#303030"
            },
            opacity: {
                value: 0.4,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                }
            },
            modes: {
                bubble: {
                    distance: 150,
                    size: 10,
                    duration: 2,
                    opacity: 0.8,
                    color: "#303030" 
                }
            }
        },
        detectRetina: true
    };

    tsParticles.load("tsparticles", particlesConfig);
}

loadParticles();


window.addEventListener("resize", loadParticles);

document.querySelector(".btnbarra").addEventListener("click", function(event) {
    document.querySelector("nav ul").classList.toggle("show");
    event.stopPropagation(); 
});

document.addEventListener("click", function(event) {
    let menu = document.querySelector("nav ul");
    let botao = document.querySelector(".btnbarra");

    if (!menu.contains(event.target) && !botao.contains(event.target)) {
        menu.classList.remove("show"); 
    }
});




