let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', sendRequest);

function sendRequest() {
    return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.addEventListener('readystatechange', function () {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(request.response);
                } else if (request.readyState === 4)
                    reject("Something went wrong!");
            });

            request.send();

        }).then(data => JSON.parse(data))
        .then(data => inputUsd.value = inputRub.value / data.usd)
        .catch(errorMessage => inputUsd.value = errorMessage);
}