
let totalCards = prompt('ingrese un numero par de cartas con las desea jugar');
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentattempts = 0;
let points = 0

let cardTemplate = '<div class="card"> <div class="back"> </div> <div class="face"> </div> </div>';



function activate(e){
    if (currentMove < 2){
        
        if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active') ) {            e.target.classList.add('active')
        e.target.classList.add()
        selectedCards.push(e.target);
        
            if (++currentMove == 2){
                currentattempts++;
                document.querySelector('#stats').innerHTML = currentattempts + ' errores'

                if (selectedCards[0].querySelectorAll('.face')[0].innerHTML == selectedCards[1].querySelectorAll('.face')[0].innerHTML){
                    selectedCards = []
                    currentMove = 0
                    points+=25;
                    currentattempts--;
                    document.querySelector('#puntos').innerHTML = points + ' puntos'
                    document.querySelector('#stats').innerHTML = currentattempts + ' errores'

                }
                else{
                    setTimeout(() => {
                        selectedCards[0].classList.remove('active')
                        selectedCards[1].classList.remove('active')
                        selectedCards = []
                        currentMove = 0
                    }, 600)
                }
            }
        }
    }
}

function randomValue() {
    let rnd = Math.floor(Math.random() * totalCards * 0.5)
    let values = valuesUsed.filter(value => value === rnd )
    if (values.length < 2){
        valuesUsed.push(rnd)
    }
    else{
        randomValue();
    }
}


while (totalCards % 2 == 1){
    totalCards = prompt('PONE UN NUMERO PAR MOGOLICO');
}

 if (totalCards % 2 == 0 ){
  for (let i=0; i < totalCards; i++){
    let div = document.createElement('div');
    div.innerHTML = cardTemplate;
    cards.push(div);
    document.querySelector('#game').append(cards[i]);
    randomValue();
    cards[i].querySelectorAll('.face')[0].innerHTML = valuesUsed[i]
    cards[i].querySelectorAll('.card')[0].addEventListener('click', activate)
}
}


        // Función que se ejecutará al hacer clic en el enlace
        function mostrarMensaje() {
            // Utiliza la función confirm() para mostrar un cuadro de diálogo
            var confirmacion = confirm("¿Estás seguro que queres salir ? :(");

            // Verifica la respuesta del usuario
            if (confirmacion) {
                // Si el usuario hace clic en "Aceptar"
                window.location.href = enlace.href;
            } else {
                // Si el usuario hace clic en "Cancelar" o cierra el cuadro de diálogo
                
            }
        }

        // Obtén el elemento del enlace por su ID
        var enlace = document.getElementById("salir_juego");

        // Agrega un escuchador de eventos para el clic en el enlace
        enlace.addEventListener("click", function (event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();

            // Llama a la función para mostrar el mensaje
            mostrarMensaje();
        });