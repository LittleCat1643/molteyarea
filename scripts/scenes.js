const homeScene = document.querySelector('.scenes > .home');
const matchmakingScene = document.querySelector('.scenes > .matchmaking');
const loadingScene = document.querySelector('.scenes > .loading');
const gameScene = document.querySelector('.scenes > .game');

let currentScene = homeScene;

function switchScene(newScene) {
    currentScene.style.display = 'none';
    newScene.style.display = 'block';

    currentScene = newScene;
}