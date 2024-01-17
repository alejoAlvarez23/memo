const totalCards = prompt('ingrese el total de cartas con las q quiere jugar');
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
                document.querySelector('#stats').innerHTML = currentattempts + ' intentos'

                if (selectedCards[0].querySelectorAll('.face')[0].innerHTML == selectedCards[1].querySelectorAll('.face')[0].innerHTML){
                    selectedCards = []
                    currentMove = 0
                    points++;
                    document.querySelector('#puntos').innerHTML = points + ' puntos'
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

for (let i=0; i < totalCards; i++){
    let div = document.createElement('div');
    div.innerHTML = cardTemplate;
    cards.push(div);
    document.querySelector('#game').append(cards[i]);
    randomValue();
    cards[i].querySelectorAll('.face')[0].innerHTML = valuesUsed[i]
    cards[i].querySelectorAll('.card')[0].addEventListener('click', activate)
    
}
