function calc() {
    let $calcWrapp = document.querySelector('.counter'),
        $persons = document.querySelectorAll('.counter-block-input')[0],
        $restDays = document.querySelectorAll('.counter-block-input')[1],
        $place = document.getElementById('select'),
        $totalValue = document.querySelector('#total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        cost = 7000;

    $totalValue.textContent = 0;


    function calcCost() {
        let result = $persons.value * $restDays.value * $place.value * cost;
        $totalValue.textContent = result;
    }

    $calcWrapp.addEventListener('input', (e) => {
        if (e.target == $persons || e.target == $restDays || e.target == $place) {
            calcCost();
        }
    });
}

module.exports = calc;