function form() {
    let message = {
        loading: 'Загрузка ...',
        success: 'Спасибо, скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        statusMessage = document.createElement('div'),
        contactForm = document.querySelector('#form');

    statusMessage.classList.add('status');

    form.addEventListener('submit', sendRequest);
    contactForm.addEventListener('submit', sendRequest);

    function sendRequest(e) {
        e.preventDefault();
        this.appendChild(statusMessage);
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(this),
            input = this.getElementsByTagName('input'),
            obj = {};

        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        function getStatus() {
            return new Promise((resolve, reject) => {
                request.addEventListener('readystatechange', () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState == 4 && request.status == 200) {
                        resolve();
                    } else reject();
                    for (let i = 0; i < input.length; i++)
                        input[i].value = '';
                });
            });
        }
        getStatus()
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure);
    }
}

module.exports = form;