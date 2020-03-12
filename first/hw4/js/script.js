let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItems[2], menuItems[1]);

let fifthItem = document.createElement('li');
fifthItem.classList.add('menu-item');
fifthItem.textContent = 'Пятый пункт';

menu.appendChild(fifthItem);

document.body.style.backgroundImage ='url("../img/apple_true.jpg")';

document.querySelector("#title").textContent = 'Мы продаем только подлинную технику Apple';
document.querySelector('.adv').style.display = 'none';

document.querySelector('.prompt').textContent = prompt('Как вы относитесь к технике Эппл?');
