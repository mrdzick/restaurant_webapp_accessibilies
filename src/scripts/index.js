import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../data/DATA.json';


const menuGrid = document.querySelector('.menu-grid');
const hamburgerButton = document.querySelector('.hamburger');
const navbarList = document.querySelector('.navbar-list');
const heroElement = document.querySelector('.hero');
const mainMenu = document.querySelector('main'); 

hamburgerButton.addEventListener('click', event => {
    navbarList.classList.toggle('open');
    event.stopPropagation();
});

heroElement.addEventListener('click', event => {
    navbarList.classList.remove('open');
});

mainMenu.addEventListener('click', event => {
    navbarList.classList.remove('open');
});

const restaurants = data.restaurants;

restaurants.forEach(result => {
    menuGrid.innerHTML += `<div class="menu-container">
                                <div class="menu-image">
                                    <img src="${result.pictureId}" class="menu-image" alt="menu image">
                                </div>
                                <div class="content" tabindex="0">
                                    <p class="rating">Rating: ${result.rating}</p>
                                    <h1 class="menu-title">${result.name}</h1>
                                    <p class="description">${result.description}</p>
                                    <p class="city">Kota. ${result.city}</p>
                                </div>
                            </div>`;     
});
