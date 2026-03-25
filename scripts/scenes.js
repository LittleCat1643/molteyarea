const menuScene = document.querySelector('.scenes > .menu');
const gameScene = document.querySelector('.scenes > .game');
const settingsScene = document.querySelector('.scenes > .settings');

let currentScene = menuScene;

function switchScene(newScene) {
    currentScene.style.display = 'none';
    newScene.style.display = 'block';

    currentScene = newScene;
}