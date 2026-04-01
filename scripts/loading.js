const titleSpan = document.querySelector('.scenes > .loading > .layout > .title > span');
const percentSpan = document.querySelector('.scenes > .loading > .layout > .bar > .percent > span');
const sliderElement = document.querySelector('.scenes > .loading > .layout > .bar > .progress > .slider');

function startLoading(players) {
    let percent = 0;

    titleSpan.textContent = 'Подключение к серверу боёв...';
    percentSpan.textContent = percent + '%';

    setTimeout(() => {
        percent = 12;
        percentSpan.textContent = percent + '%';
        sliderElement.style.width = percent + '%';
    }, 1000);

    setTimeout(() => {
        titleSpan.textContent = 'Проверка пинга...';
        percent = 37;
        percentSpan.textContent = percent + '%';
        sliderElement.style.width = percent + '%';
    }, 2500);

    setTimeout(() => {
        percent = 62;
        percentSpan.textContent = percent + '%';
        sliderElement.style.width = percent + '%';
    }, 3500);

    setTimeout(() => {
        titleSpan.textContent = 'Синхронизация с сервером...';
        percent = 88;
        percentSpan.textContent = percent + '%';
        sliderElement.style.width = percent + '%';
    }, 6000);

    setTimeout(() => {
        percent = 100;
        percentSpan.textContent = percent + '%';
        sliderElement.style.width = percent + '%';
    }, 6500);

    setTimeout(() => {
        startGame(players);
    }, 8000);
}