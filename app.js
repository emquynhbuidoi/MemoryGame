var cardArray=[
    {
        name: '1',
        img: 'anh/1.png',
    },
    {
        name: '2',
        img: 'anh/2.png',
    },
    {
        name: '3',
        img: 'anh/3.png',
    },
    {
        name: '4',
        img: 'anh/4.png',
    },
    {
        name: '5',
        img: 'anh/5.jpg',
    },
    {
        name: '7',
        img: 'anh/quynhne.jpg',
    },
    {
        name: '1',
        img: 'anh/1.png',
    },
    {
        name: '2',
        img: 'anh/2.png',
    },
    {
        name: '3',
        img: 'anh/3.png',
    },
    {
        name: '4',
        img: 'anh/4.png',
    },
    {
        name: '5',
        img: 'anh/5.jpg',
    },
    {
        name: '7',
        img: 'anh/quynhne.jpg',
    }
]


cardArray.sort(() =>0.5 - Math.random()) 

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds= []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'anh/6.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]


    if(optionOneId == optionTwoId){
        alert('You have clicked the same image !')
        cardsChosen[0] = []
        cardsChosen[1] = [2]
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match !')
        cards[optionOneId].setAttribute('src', 'anh/white.png')
        cards[optionTwoId].setAttribute('src', 'anh/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'anh/6.png')
        cards[optionTwoId].setAttribute('src', 'anh/6.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
 
    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }
    
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

}






















