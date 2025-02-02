const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const image = document.querySelector('.images')

let main_container = document.getElementById('image-container');


images.forEach((elem) => {
    main_container.innerHTML += `
        <div class="image">
            <img src="${elem.image}" alt="${elem.title}">
            <div class="text">
                <h2>${elem.title}</h2>
                <p>${elem.text}</p>
            </div>
        </div>`    
})

let active_element = 0

document.querySelectorAll('.image')[active_element].classList.add('active')


const prev_btn = document.querySelector('.prev')
const next_btn = document.querySelector('.next')

prev_btn.addEventListener('click', function () {
    if (active_element === 0) {
        active_element = images.length - 1

    } else {
        active_element--
    }

    document.querySelector('.image.active').classList.remove('active')
    document.querySelectorAll('.image')[active_element].classList.add('active')
})

next_btn.addEventListener('click', function () {
    if (active_element === images.length - 1) {
        active_element = 0

    } else {
        active_element++
    }

    document.querySelector('.image.active').classList.remove('active')
    document.querySelectorAll('.image')[active_element].classList.add('active')
})

