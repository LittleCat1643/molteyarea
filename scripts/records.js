const recordsTitle = document.querySelector('.scenes > .records > .header > .title > h1');
const closeRecordsButton = document.querySelector('.scenes > .records > .header > .close > button');
const recordSign = document.querySelector('.scenes > .records > .content > .main > .center > .title > h3');
const recordValue = document.querySelector('.scenes > .records > .content > .main > .center > .content > h1');
const gamesPlayedSign = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(1) > .sign > h3');
const gamesPlayedValue = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(1) > .value > h4');
const allCellsCapturedSign = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(2) > .sign > h3');
const allCellsCapturedValue = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(2) > .value > h4');
const maxCellCapturedSign = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(3) > .sign > h3');
const maxCellCapturedValue = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(3) > .value > h4');
const killsSign = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(4) > .sign > h3');
const killsValue = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(4) > .value > h4');
const maxLevelSign = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(5) > .sign > h3');
const maxLevelValue = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(5) > .value > h4');
const skinsCountSign = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(6) > .sign > h3');
const skinsCountValue = document.querySelector('.scenes > .records > .content > .other > .item:nth-child(6) > .value > h4');

closeRecordsButton.addEventListener('click', () => {
    switchScene(menuScene);
});