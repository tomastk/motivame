/* Scripts de la página */ 

let barra = document.querySelector(".barra");
let line1 =  document.querySelector(".line");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");
let menu = document.querySelector(".menu")

/* Menú Desplegable */
barra.addEventListener("click", () => {
    menu.classList.toggle("active")
    line1.classList.toggle("line-clicked");
    line2.classList.toggle("line-2-clicked")
    line3.classList.toggle("line-3-clicked")
})

/* Arreglo dinámico de Frases */

let frases = [
    "El mejor momento para plantar un árbol era hace 20 años. El segundo mejor momento es AHORA.",
    "Cada día es una nueva oportunidad para cambiar tu vida.",
    "Ningún mar en calma hizo experto a un marinero.",
    "La gente positiva es la que se cae, se levanta, se sacude, se cura los raspones, sonríe a la vida y dice: Allá voy de nuevo",
    "El momento que da más miedo es siempre justo antes de empezar.",
    "El éxito en la vida no se mide por lo que logras sino por los obstáculos que superas.",
    "Mañana es una excusa maravillosa, ¿No crees?",
    "Intenta ser un Arco iris en el día nublado de alguien",
    "Esperar ser otra persona es una pérdida de tiempo.",
    "Existe el mañana por alguna razón.",
    "Cuando te das cuenta que estás procrastinando, preguntate: ¿de qué estoy intentando huir?",
    'Cuando me dices que no puedo lo único que escucho es “Bla, bla, bla…"',
    "Cualquier cosa que te plante la vida florecela con gracia.",
    "Deséalo, espéralo, suéñalo, pero por todos los medios… ¡Hazlo!",
    "Eres suficiente tal y como eres.",
    "Debes hacer las cosas que crees que no puedes hacer.",
    "Tu mejor profesor es tu mayor error.",
    "Las cosas buenas llegan a los que saben esperar.",
    "No es la más inteligente de las especies la que sobrevive ni la más fuerte, sino la que sabe adaptarse al cambio.",
    "No busques el momento perfecto, solo busca el momento y hazlo perfecto.",
    "Si te sientes perdido en el mundo es porque todavía no has salido a buscarte.",
    "Todo error deja una enseñanza, toda enseñanza deja una experiencia, y toda experiencia deja una huella.",
    "No importa lo que pase, siempre tendrás una historia que contar.",
    "Encuentra lo que te hace feliz y ve hacia ello.",
    "Queda terminantemente prohibido levantarse sin ilusiones",
    "Levántate, suspira, sonríe, y sigue adelante.",
    "Las dificultades no existen para hacerte renunciar sino para hacerte más fuerte.",
    "Ojalá vivas todos los días de tu vida.",
    "¿Cuándo fue la última vez que hiciste algo por primera vez?",
    "Una persona que nunca se equivocó nunca intentó nada nuevo.",
    "Dale a cada día la posibilidad de ser el mejor día de tu vida.",
    "Los retos son lo que hacen la vida interesante, y superarlos es lo que hace que la vida tenga un significado.",
    "Aunque te sientas perdido y sin fuerzas recuerda que cada día puede ser el comienzo de algo maravilloso. No te rindas.",
    "Aquél que lo piensa mucho antes de dar un paso, se pasará toda su vida en un solo pie.",
    "Evita juntarte con gente negativa. Siempre tienen un problema para cada solución.",
    "Rara vez nos damos cuenta que estamos rodeados por lo extraordinario.",
    "Lo único imposible es aquello que no intentas.",
    "La disciplina es el puente entre tus metas y tus logros.",
    "Sueña sin miedos, vive sin limites",
    "Sigue corriendo, no dejes que tus excusas te alcancen"
]


let path = location.pathname;



/* Añadiendo las frases al sitio de frases */ 

const addFrases = () => {
    frases.forEach(frase => {
        let frasesDiv = document.getElementById("frases");
        let frasetoAdd = document.createElement("div");
        frasetoAdd.classList.add("frase")    
        frasetoAdd.innerHTML = `
        <i class="fas fa-heart"></i>
        <p>${frase}</p>
        `
        frasesDiv.appendChild(frasetoAdd)
    })

}
if (path.includes("frases.html")) {
    addFrases()
}

let buttonFrase = document.getElementById("generateFrase");

if (buttonFrase != undefined || buttonFrase != null) {
    let frasesAñadidas = [];
    const generateFrase = () => {
        let randomNumber = Math.round(Math.random() * frases.length)
        frases[randomNumber] === undefined ? frase = frases[1] : frase = frases[randomNumber]
        document.getElementById("frase").innerHTML = `
        <i class="fas fa-quote-left quote-left"></i>
        ${frase}
        <i class="fas fa-quote-right quote-right"></i>
        `
    } 
    buttonFrase.addEventListener("click", () => {
        generateFrase();
    })
}
