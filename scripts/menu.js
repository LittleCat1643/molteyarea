const nicknameInput = document.querySelector('.scenes > .menu > .ui > .lobby > .nickname > input');
const skinsButton = document.querySelector('.scenes > .menu > .ui > .lobby > .buttons > .first > .skins > button');
const playButton = document.querySelector('.scenes > .menu > .ui > .lobby > .buttons > .first > .play > button');
const recordsButton = document.querySelector('.scenes > .menu > .ui > .lobby > .buttons > .second > .records > button');
const infoButton = document.querySelector('.scenes > .menu > .ui > .lobby > .buttons > .second > .other > .info > button');
const settingsButton = document.querySelector('.scenes > .menu > .ui > .lobby > .buttons > .second > .other > .settings > button');

settingsButton.addEventListener('click', () => {
    switchScene(settingsScene);
});