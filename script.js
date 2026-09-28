const frases = [
    "Te amo ❤️",
    "Eres mi persona favorita 💕",
    "Eres mi todo 🥹❤️",
    "Gracias por existir 💗",
    "Contigo todo es más bonito ✨",
    "Siempre elegiría estar contigo 💞",
    "Mi lugar favorito es contigo 🫶",
    "Te quiero muchísimo 💘"
];

let indice = 0;

const boton = document.getElementById("boton");
const corazonCentral = document.getElementById("corazonCentral");
const frase = document.getElementById("frase");

boton.addEventListener("click", () => {

    frase.textContent = frases[indice];

    corazonCentral.style.display = "flex";

    // Reinicia la animación cada vez que se presiona
    corazonCentral.style.animation = "none";

    setTimeout(() => {
        corazonCentral.style.animation = "aparecerCorazon 0.8s ease forwards";
    }, 10);

    indice++;

    if (indice >= frases.length) {
        indice = 0;
    }
});