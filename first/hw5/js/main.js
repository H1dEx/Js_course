let $startBtn = document.querySelector('#start'),
    $budgetValue = document.querySelector('.budget-value'),
    $dayBudgetValue = document.querySelector('.daybudget-value'),
    $levelValue = document.querySelector('.level-value'),
    $expensesValue = document.querySelector('.expenses-value'),
    $optExpensesValue = document.querySelector('.optionalexpenses-value'),
    $incomeValue = document.querySelector('.income-value'),
    $monthSavingsValue = document.querySelector('.monthsavings-value'),
    $yearSavingsValue = document.querySelector('.yearsavings-value'),
    $expensesItems = document.querySelectorAll('.expenses-item'),
    $expensesBtn = document.getElementsByTagName('button')[0],
    $optExpensesBtn = document.getElementsByTagName('button')[1],
    $countBtn = document.querySelector('.count-budget-btn'),
    $optExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    $chooseIncome = document.querySelector('.choose-income'),
    $checkSavings = document.querySelector('#savings'),
    $sumValue = document.querySelector('.choose-sum'),
    $percentValue = document.querySelector('.choose-percent'),
    $yearValue = document.querySelector('.year-value'),
    $monthValue = document.querySelector('.month-value'),
    $dayValue = document.querySelector('.day-value');

let money, time;

let btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length - 1; i++) {
    btns[i].disabled = true;
}

$startBtn.addEventListener('click', () => {
        btns[0].disabled = false;
    
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    $budgetValue.textContent = money.toFixed();
    $yearValue.value = new Date(Date.parse(time)).getFullYear();
    $monthValue.value = new Date(Date.parse(time)).getMonth() + 1;

    $dayValue.value = new Date(Date.parse(time)).getDate();
});

$expensesBtn.addEventListener('click', () => {
    btns[1].disabled = false;
    let sum = 0;

    for (let i = 0; i < $expensesItems.length; i++) {
        let a = $expensesItems[i].value,
            b = $expensesItems[++i].value;

        if ((typeof (a) === 'string') && a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    $expensesValue.textContent = sum;
});

$optExpensesBtn.addEventListener('click', () => {
    btns[2].disabled = false;

    for (let i = 0; i < $optExpensesItems.length; i++) {
        appData.optionalExpenses[i] = $optExpensesItems[i].value;
        $optExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }

});

$countBtn.addEventListener('click', () => {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30 - $expensesValue.textContent / 30).toFixed(0);
        $dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            $levelValue.textContent = 'Низкий уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            $levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            $levelValue.textContent = 'Высокий уровень достатка';
        } else {
            $levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        $dayBudgetValue.textContent = "Произошла ошибка";
    }
});


$chooseIncome.addEventListener('input', () => {
    let items = $chooseIncome.value;
    appData.income = items.split(',');
    $incomeValue.textContent = appData.income;
});

$checkSavings.addEventListener('click', () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

$sumValue.addEventListener('input', () => {
    if (appData.savings) {
        let sum = +$sumValue.value,
            percent = +$percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        $monthSavingsValue.textContent = appData.monthIncome.toFixed();
        $yearSavingsValue.textContent = appData.yearIncome.toFixed();
    }
});

$percentValue.addEventListener('input', () => {

    if (appData.savings) {
        let sum = +$sumValue.value,
            percent = +$percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        $monthSavingsValue.textContent = appData.monthIncome.toFixed();
        $yearSavingsValue.textContent = appData.yearIncome.toFixed();
    }

});


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};