let graphics = true;
let sounds = true;
let language = 'ru';

const settingsTitle = document.querySelector('.scenes > .settings > .header > .title > h1');
const closeSettingsButton = document.querySelector('.scenes > .settings > .header > .close > button');
const graphicsSwitch = document.querySelector('.scenes > .settings > .content > .graphics > .value > .switch');
const soundsSwitch = document.querySelector('.scenes > .settings > .content > .sounds > .value > .switch');
const languageChoice = document.querySelector('.scenes > .settings > .content > .language > .value > .choice');
const graphicsSign = document.querySelector('.scenes > .settings > .content > .graphics > .sign > h2');
const soundsSign = document.querySelector('.scenes > .settings > .content > .sounds > .sign > h2');
const languageSign = document.querySelector('.scenes > .settings > .content > .language > .sign > h2');

const switchButtons = document.querySelectorAll('.switch');

closeSettingsButton.addEventListener('click', () => {
    switchScene(menuScene);
});

languageChoice.addEventListener('click', () => {
    if (language == 'ru') {
        editSetting('language', 'en');
    } else {
        editSetting('language', 'ru');
    }

    languageChoice.innerHTML = `<img src="images/flags/${language}.png">`;

    innerTextsAll();
});

graphicsSwitch.addEventListener('click', () => {
    if (graphics === true) {
        editSetting('graphics', false);
    } else {
        editSetting('graphics', true);
    }
});

soundsSwitch.addEventListener('click', () => {
    if (sounds === true) {
        editSetting('sounds', false);
    } else {
        editSetting('sounds', true);
    }
});

function editSetting(type, value) {
    switch (type) {
        case 'graphics': 
            graphics = value;

            if (graphics) {
                graphicsSwitch.classList.add('on');
            } else {
                graphicsSwitch.classList.remove('on');
            }
            break;
        case 'sounds': 
            sounds = value;

            if (sounds) {
                soundsSwitch.classList.add('on');
            } else {
                soundsSwitch.classList.remove('on');
            }
            break;
        case 'language': 
            language = value;

            break;
    }

    localStorage.setItem(type, value.toString());
}

function initSettings() {
    const savedGraphics = localStorage.getItem('graphics');

    if (savedGraphics !== null) {
        graphics = savedGraphics === 'true';
    } else {
        localStorage.setItem('graphics', graphics.toString());
    }
    
    const savedSounds = localStorage.getItem('sounds');

    if (savedSounds !== null) {
        sounds = savedSounds === 'true';
    } else {
        localStorage.setItem('sounds', sounds.toString());
    }
    
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage !== null) {
        language = savedLanguage;
    } else {
        localStorage.setItem('language', language);
    }
}

function loadSettings() {
    if (graphics) {
        graphicsSwitch.classList.add('on');
    } else {
        graphicsSwitch.classList.remove('on');
    }
    
    if (sounds) {
        soundsSwitch.classList.add('on');
    } else {
        soundsSwitch.classList.remove('on');
    }
    
    languageChoice.innerHTML = `<img src="images/flags/${language}.png">`;
}

document.addEventListener('DOMContentLoaded', () => {
    initSettings();
    loadSettings();
});