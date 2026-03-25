const textsRu = {
    playerDefault: 'Игрок',
    skinsButton: 'Скины',
    playButton: 'Играть',
    recordsButton: 'Рекорды',
    settingsTitle: 'Настройки',
    graphicsSign: 'Хорошая графика',
    soundsSign: 'Звуки',
    languageSign: 'Язык',
    recordSign: 'Ваш рекорд',
    gamesPlayedSign: 'Сыграно игр',
    allCellsCapturedSign: 'Всего захвачено клеток',
    maxCellCapturedSign: 'Макс. захвачено клеток',
    killsSign: 'Убито игроков',
    maxLevelSign: 'Макс. уровень',
    skinsCountSign: 'Собрано скинов',
}

const textsEn = {
    playerDefault: 'Player',
    skinsButton: 'Skins',
    playButton: 'Play',
    recordsButton: 'Records',
    settingsTitle: 'Settings',
    graphicsSign: 'Good graphics',
    soundsSign: 'Sounds',
    languageSign: 'Language',
    recordSign: 'Your record',
    gamesPlayedSign: 'Games played',
    allCellsCapturedSign: 'Total cells captured',
    maxCellCapturedSign: 'Max cells captured',
    killsSign: 'Players killed',
    maxLevelSign: 'Max level',
    skinsCountSign: 'Skins collected',
}

function innerTextsAll() {
    if (language == 'ru') {
        texts = textsRu;
    } else {
        texts = textsEn;
    }

    if (nicknameInput.value == textsRu.playerDefault || nicknameInput.value == textsEn.playerDefault) {
        nicknameInput.value = texts.playerDefault;
    }

    skinsButton.innerHTML = `<img src="images/skins.png"> ${texts.skinsButton}`;
    playButton.innerHTML = `<img src="images/play.png"> ${texts.playButton}`;
    recordsButton.innerHTML = `<img src="images/records.png"> ${texts.recordsButton}`;
    settingsTitle.innerHTML = `<img src="images/settings.png"> ${texts.settingsTitle}`;
    graphicsSign.innerHTML = `<img src="images/graphics.png"> ${texts.graphicsSign}`;
    soundsSign.innerHTML = `<img src="images/sounds.png"> ${texts.soundsSign}`;
    languageSign.innerHTML = `<img src="images/language.png"> ${texts.languageSign}`;
    recordsTitle.innerHTML = `<img src="images/records.png"> ${texts.recordsButton}`;
    recordSign.innerHTML = texts.recordSign;
    gamesPlayedSign.innerHTML = texts.gamesPlayedSign;
    allCellsCapturedSign.innerHTML = texts.allCellsCapturedSign;
    maxCellCapturedSign.innerHTML = texts.maxCellCapturedSign;
    killsSign.innerHTML = texts.killsSign;
    maxLevelSign.innerHTML = texts.maxLevelSign;
    skinsCountSign.innerHTML = texts.skinsCountSign;
}

document.addEventListener('DOMContentLoaded', () => {
    innerTextsAll();
});