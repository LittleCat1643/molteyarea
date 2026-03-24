const menuScene = document.querySelector('.scenes > .menu');
const gameScene = document.querySelector('.scenes > .game');
const skinsScene = document.querySelector('.scenes > .skins');
const infoScene = document.querySelector('.scenes > .info');
const settingsScene = document.querySelector('.scenes > .settings');

let currentScene = menuScene;

function switchScene(scene) {
    scene.style.display = 'block';
    currentScene.style.display = 'none';

    currentScene = scene;
}