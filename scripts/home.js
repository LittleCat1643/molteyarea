const rankSymbol = document.querySelector('.scenes > .home > .header > .rank');
const rankBar = document.querySelector('.scenes > .home > .header > .rank > .bar > .progress');
const playButton = document.querySelector('.scenes > .home > .layout > .lobby > .play > button');

playButton.addEventListener('click', () => {
    switchScene(matchmakingScene);
    startMatchmaking();
});

rankSymbol.addEventListener('click', () => {
    xpUp(125);
});