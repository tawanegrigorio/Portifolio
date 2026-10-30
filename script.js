const texto = document.querySelector(".sobreTexto");
const foto = document.querySelector(".segundaFoto");
const sobre = document.querySelector(".sobre");

texto.style.opacity = "0";
texto.style.transform = "translateY(80px)";
texto.style.transition = "all 1.0s ease 0.4s";

foto.style.opacity = "0";
foto.style.transform = "translateY(-80px)";
foto.style.transition = "all 1.0s ease 0.4s";

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            texto.style.opacity = "1";
            texto.style.transform = "translateY(0)";

            foto.style.opacity = "1";
            foto.style.transform = "translateY(0)";
        } else {
            texto.style.opacity = "0";
            texto.style.transform = "translateY(80px)";

            foto.style.opacity = "0";
            foto.style.transform = "translateY(-80px)";
        }
    });
}, {
    threshold: 0.1
});

observador.observe(sobre);

const video = document.querySelector(".proj1");
video.autoplay = true;
video.loop = true;
video.controls = false;

video.play();

gsap.to(".subtitulo", {
    backgroundPosition: "-150% 0",
    duration: 5,
    ease: "none",
    repeat: -1
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".etiqueta", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#habilidades",
        start: "top 80%",
        once: true
    }
});

gsap.from(".cabecalho-habilidades h2, .cabecalho-habilidades > p, .linha-decorativa", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#habilidades",
        start: "top 75%",
        once: true
    }
});

gsap.from(".habilidade-card", {
    y: 40,
    opacity: 0,
    duration: 0.65,
    stagger: 0.09,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".grade-habilidades",
        start: "top 80%",
        once: true
    }
});

gsap.utils.toArray(".habilidade-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -8,
            duration: 0.25,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});