window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //tabs
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
        if (target && target.classList.contains('info-header-tab')) {
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

    //timer

    let deadline = '2020-09-01';

    function getTImeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 100 / 60 / 60));
        return {
            'total': t,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(id, endtime) {
        let $timer = document.getElementById(id),
            $hours = timer.querySelector('.hours'),
            $minutes = timer.querySelector('.minutes'),
            $seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTImeRemaining(endtime);

            function addZero(num) {
                if (num < 10)
                    return ('0' + num);
                else return num;
            }

            $hours.textContent = addZero(t.hours);
            $minutes.textContent = addZero(t.minutes);
            $seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                $hours.textContent = '00';
                $minutes.textContent = '00';
                $seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);

    //modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtns = document.querySelectorAll('.description-btn'),
        modalBtn;

    function showModal(e) {
        overlay.style.display = "block";
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
        modalBtn = e.target;
    }

    descriptionBtns.forEach((item) => item.addEventListener('click', showModal));
    more.addEventListener('click', showModal);

    close.addEventListener('click', function () {
        overlay.style.display = "none";
        document.body.style.overflow = "";
        modalBtn.classList.remove('more-splash');
    });
});