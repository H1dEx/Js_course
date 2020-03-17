window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        form = require('./parts/form.js'),
        slider = requre('./parts/slider.js'),
        calc = requre('./parts/calc.js');

        tabs();
        timer();
        modal();
        form();
        slider();
        calc();
});