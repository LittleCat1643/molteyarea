const nicknameInput = document.querySelector('.scenes > .menu > .ui > .lobby > .top > .nickname > input');
const skinsButton = document.querySelector('.scenes > .menu > .ui > .lobby > .top > .skins > button');
const playButton = document.querySelector('.scenes > .menu > .ui > .lobby > .bottom > .play > button');
const infoButton = document.querySelector('.scenes > .menu > .ui > .lobby > .bottom > .other > .info > button');
const settingsButton = document.querySelector('.scenes > .menu > .ui > .lobby > .bottom > .other > .settings > button');

infoButton.onclick = () => {
    switchScene(infoScene);
}