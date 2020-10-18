// Sticky navigation
const navigation = document.getElementById('page-navigation');
let sticky = navigation.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add('sticky');
    }
    else if (window.pageYOffset <= sticky) {
        navigation.classList.remove('sticky');
    }
};


// Check if restaurant is opened
let d = new Date();
const day = d.getDay();
const hour = d.getHours();
const minutes = d.getMinutes();
const openedElement = document.getElementById('opened');

if (day >= 1 && day <= 5) {
    // Monday - Friday
    if (hour >= 9 && hour <= 19) {
        if (hour === 19 && minutes <= 30) {
            // Opened
            openedElement.innerHTML = 'We\'re <strong>opened</strong> right now!';
        }
        else {
            openedElement.innerHTML = 'We\'re <strong>closed</strong> right now!';
        }
    }
    else {
        openedElement.innerHTML = 'We\'re <strong>closed</strong> right now!';
    }
}
else {
    // Saturday - Sunday
    if (hour >= 8 && hour < 21) {
        // Opened
        openedElement.innerHTML = 'We\'re <strong>opened</strong> right now!';
        console.log('opened')
    }
    else {
        openedElement.innerHTML = 'We\'re <strong>closed</strong> right now!';
    }
}

// Menu
const menuSoup = document.getElementById('menu-soup');
const menuMainMeal = document.getElementById('menu-mainmeal');
const menuDrinks = document.getElementById('menu-drinks');

const navSoup = document.getElementById('nav-soup');
const navMainMeal = document.getElementById('nav-mainmeal');
const navDrinks = document.getElementById('nav-drinks');

menuMainMeal.style.display = 'none';
menuDrinks.style.display = 'none';
navSoup.classList.add('active');

function changeVisibility(soup, mainmeal, drinks) {
    menuSoup.style.display = soup;
    if (soup === 'block') {
        navSoup.classList.add('active');
        navMainMeal.classList.remove('active');
        navDrinks.classList.remove('active');
    }
    menuMainMeal.style.display = mainmeal;
    if (mainmeal === 'block') {
        navSoup.classList.remove('active');
        navMainMeal.classList.add('active');
        navDrinks.classList.remove('active');
    }
    menuDrinks.style.display = drinks;
    if (drinks === 'block') {
        navSoup.classList.remove('active');
        navMainMeal.classList.remove('active');
        navDrinks.classList.add('active');
    }
}

navSoup.onclick = () => changeVisibility('block', 'none', 'none');
navMainMeal.onclick = () => changeVisibility('none', 'block', 'none');
navDrinks.onclick = () => changeVisibility('none', 'none', 'block');
