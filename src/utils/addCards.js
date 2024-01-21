import headerTpl from '../templates/card.hbs'
import getUserData from "./crud/read";

const cardsContainer = document.querySelector("#cards")

getUserData("notebook").then(laptops => {
    for (let laptop of laptops){
        const cardElement = headerTpl({
            image: laptop.img,
            name: laptop.name,
            processor: laptop.processor,
            storage: laptop.storage,
            price: laptop.price
        })
        
        cardsContainer.insertAdjacentHTML("beforeend", cardElement)
    }
})