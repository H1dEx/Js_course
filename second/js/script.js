window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (e) => {
        let target = e.target;
        if ( target && target.classList.contains('info-header-tab')) {
            for (let j = 0; j < tab.length; j++) {
                if (e.target == tab[j]) {
                    hideTabContent(0);
                    showTabContent(j);
                    break;
                }
            }
        }
    });
    hideTabContent(1);
});