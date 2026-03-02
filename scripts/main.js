const colors = [['ff4d6d', 'ffb3c1']];

let width = 50;
let height = 50;
let strength = 50;
let cellMax = 99;

let map = Array(height).fill().map(() => Array(width).fill().map(() => [strength, 0, false]));

let player = { id: 1, x: 25, y: 25, captured: [] }
let zoom = 4;

const game = document.querySelector('.field');
const container = document.querySelector('.game');
const layout = document.querySelector('.layout');

const joystick = [
    document.querySelector('.header > .bottom > .left > .joystick > .top > .button:nth-child(1) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(1) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(2) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(3) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .bottom > .button:nth-child(1) > button')
];

function requestFullscreen() {
    const element = document.documentElement;
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

document.addEventListener('gesturestart', (event) => {
    event.preventDefault();
});

function generateMap() {
    requestAnimationFrame(() => {
        game.textContent = '';
        
        map.forEach((line, y) => {
            const row = document.createElement('div');
            row.classList.add('line');

            line.forEach((cell, x) => {
                const square = document.createElement('div');
                const countElement = document.createElement('div');

                square.dataset.x = x;
                square.dataset.y = y;

                square.classList.add('cell');

                countElement.classList.add('count');
                countElement.textContent = map[y][x][0];

                square.appendChild(countElement);

                row.appendChild(square);
            });

            game.appendChild(row);
        });
    });
}

function generatePlayer() {
    const cell = document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);

    cell.innerHTML = '';

    const playerElement = document.createElement('div');

    playerElement.classList.add('player');
    playerElement.style.background = `#${colors[player.id - 1][0]}`;

    cell.appendChild(playerElement);
}

function generateCount(x, y) {
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);

    cell.innerHTML = '';

    const countElement = document.createElement('div');
    countElement.classList.add('count');
    
    if (player.captured.some(pos => pos[0] == x && pos[1] == y)) {
        cell.classList.add('captured');
        cell.style.background = `#${colors[player.id - 1][1]}`;
    }

    countElement.textContent = map[y][x][0];
    cell.appendChild(countElement);

    if (x === player.x && y === player.y) {
        generatePlayer();
    }
}

function movePlayer(direction) {
    const old = { x: player.x, y: player.y };

    if (direction == 0 && player.y > 0) {
        player.y -= 1;
    } else if (direction == 1 && player.y < height - 1) {
        player.y += 1;
    } else if (direction == 2 && player.x > 0) {
        player.x -= 1;
    } else if (direction == 3 && player.x < width - 1) {
        player.x += 1;
    }

    generateCount(old.x, old.y);
    generatePlayer();

    centerOffset();
}

function playerCapture() {
    if (map[player.y][player.x][0] <= 0 && !player.captured.some(pos => pos[0] == player.x && pos[1] == player.y)) {
        cellCapture(player.x, player.y);
    } else if (!player.captured.some(pos => pos[0] == player.x && pos[1] == player.y)) {
        map[player.y][player.x][0] -= 1;
    } else {
        if (map[player.y][player.x][0] < cellMax) {
            map[player.y][player.x][0] += 1;
        }
    }

    generateCount(player.x, player.y);
}

function cellCapture(x, y) {
    player.captured.push([x, y]);
}

function passiveCapture() {
    requestAnimationFrame(() => {
        player.captured.forEach(pos => {
            if (map[pos[1]][pos[0]][0] < cellMax) {
                map[pos[1]][pos[0]][0] += 1;
            }

            generateCount(pos[0], pos[1]);
        });
    });
}

document.body.onkeydown = (event) => {
    if (event.code == 'ArrowUp' || event.code == 'KeyW') {
        movePlayer(0);
    } else if (event.code == 'ArrowDown' || event.code == 'KeyS') {
        movePlayer(1);
    } else if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
        movePlayer(2);
    } else if (event.code == 'ArrowRight' || event.code == 'KeyD') {
        movePlayer(3);
    } else if (event.code == 'KeyE') {
        playerCapture();
    }
}

joystick.forEach((element, index) => {
    element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        
        if (index == 0) {
            movePlayer(0);
        } else if (index == 1) {
            movePlayer(2);
        } else if (index == 2) {
            playerCapture();
        } else if (index == 3) {
            movePlayer(3);
        } else if (index == 4) {
            movePlayer(1);
        }
    });

    element.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (index == 0) {
            movePlayer(0);
        } else if (index == 1) {
            movePlayer(2);
        } else if (index == 2) {
            playerCapture();
        } else if (index == 3) {
            movePlayer(3);
        } else if (index == 4) {
            movePlayer(1);
        }
    });
});

function centerOffset() {
    const playerCell = document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
    
    for (let index = 0; index < 2; index++) {
        const containerRect = container.getBoundingClientRect();
        const cellRect = playerCell.getBoundingClientRect();
        
        const playerCenterX = cellRect.left + cellRect.width / 2;
        const playerCenterY = cellRect.top + cellRect.height / 2;

        const offsetX = (containerRect.width / 2) - (playerCenterX - containerRect.left);
        const offsetY = (containerRect.height / 2) - (playerCenterY - containerRect.top);

        layout.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;
    }
}

function main() {
    document.body.addEventListener('click', function fullscreenHandler() {
        requestFullscreen();
        document.body.removeEventListener('click', fullscreenHandler);
    }, { once: true });
    
    generateMap();
    
    setTimeout(() => {
        generatePlayer();
        centerOffset();
    }, 50);

    setInterval(() => {
        passiveCapture();
    }, 1000);
}

main();