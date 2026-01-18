document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var carta = document.getElementById("carta");
    var span = document.getElementsByClassName("close")[0];

    carta.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

const texto = "Para minha\nPretendente";
const titulo = document.getElementById("titulo");
let i = 0;

function digitar() {
    if (i < texto.length) {
        titulo.innerHTML += texto[i] === "\n" ? "<br>" : texto[i];
        i++;
        setTimeout(digitar, 70);
    }
}

digitar();


const inicio = new Date("2025-12-26T00:00:00"); // DATA QUE VOCÊS COMEÇARAM
const contador = document.getElementById("contador");

function atualizarTempo() {
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    contador.innerHTML =
        `Já fazem <strong>${dias}</strong> dias, 
         ${horas} horas e ${minutos} minutos 
         desde que começamos a conversar 💬`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
