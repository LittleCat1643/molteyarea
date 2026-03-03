const colors = [['ff4d6d', 'ffb3c1'], ['0582ca', '00a6fb'], ['2a9134', '5bba6f'], ['ffba08', 'ffe169'], ['7b2cbf', 'c77dff'], ['e85d04', 'faa307']];
const radius = [[0, 0], [1, 0], [1, 1], [0, 1], [-1, 0], [-1, -1], [0, -1], [1, -1], [-1, 1]];

const leaderboardMax = 3;

const enFirstUsernamesPart = ['Good', 'Bad', 'Happy', 'Sad', 'Big', 'Small', 'Young', 'Old', 'Beautiful', 'Ugly', 'Nice', 'Mean', 'Kind', 'Cruel', 'Clever', 'Stupid', 'Busy', 'Lazy', 'Quiet', 'Noisy', 'Hot', 'Cold', 'Hungry', 'Full', 'Tired', 'Rested', 'Strong', 'Weak', 'Brave', 'Scared', 'Rich', 'Poor', 'Important', 'Unimportant', 'Easy', 'Difficult', 'Interesting', 'Boring', 'Exciting', 'Calming', 'Funny', 'Serious', 'Angry', 'Friendly', 'Polite', 'Rude', 'Clean', 'Dirty', 'New', 'Old', 'Modern', 'Traditional', 'Comfortable', 'Uncomfortable', 'Safe', 'Dangerous', 'Healthy', 'Sick', 'Fast', 'Slow', 'Long', 'Short', 'Deep', 'Shallow', 'High', 'Low', 'Wide', 'Narrow', 'Thick', 'Thin', 'Heavy', 'Light', 'Soft', 'Hard', 'Smooth', 'Rough'];
const enSecondUsernamesPart = ['Time', 'Person', 'Year', 'Way', 'Day', 'Thing', 'Man', 'World', 'Life', 'Hand', 'Part', 'Child', 'Eye', 'Woman', 'Place', 'Work', 'Week', 'Case', 'Point', 'Government', 'Company', 'Number', 'Group', 'Problem', 'Fact', 'Side', 'Member', 'Family', 'System', 'Area', 'Year', 'Community', 'Name', 'Thing', 'Country', 'House', 'Service', 'Friend', 'Story', 'Customer', 'Job', 'School', 'City', 'State', 'Plant', 'Resource', 'Money', 'Air', 'Health', 'Structure', 'Car', 'Product', 'Information', 'Food', 'Safety', 'Water', 'Room', 'Level', 'Book', 'Top', 'Teacher', 'Line', 'Order', 'Word', 'Question', 'Door', 'Answer', 'Key', 'Phone', 'Result', 'Week', 'Girl', 'Boy', 'Minute', 'Corner', 'Face', 'Tax', 'Hour', 'Plan', 'Brand', 'Rule', 'Mind', 'Shape', 'Goal', 'Step', 'Weight', 'Pattern', 'Price', 'View', 'Ball', 'Month', 'Paper', 'Sign', 'Glass', 'Kind', 'Space', 'Sun', 'Music'];
const ruFirstUsernamesPart = ['Александр', 'Дмитрий', 'Максим', 'Иван', 'Михаил', 'Владимир', 'Сергей', 'Андрей', 'Николай', 'Виктор', 'Олег', 'Юрий', 'Артем', 'Антон', 'Павел', 'Игорь', 'Роман', 'Евгений', 'Анатолий', 'Егор', 'Никита', 'Алексей', 'Валерий', 'Семён', 'Кирилл', 'Денис', 'Вячеслав', 'Тимофей', 'Владислав', 'Степан', 'Леонид', 'Борис', 'Григорий', 'Виктор', 'Эдуард', 'Семён', 'Василий', 'Виталий', 'Александр', 'Руслан', 'Тимур', 'Даниил', 'Матвей', 'Константин', 'Виктор', 'Мирон', 'Илья', 'Родион', 'Глеб', 'Лев', 'Ярослав', 'Марк', 'Егор', 'Кирилл'];
const ruSecondUsernamesPart = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Батурин', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Зайцев', 'Соловьёв', 'Васильев', 'Быков', 'Воробьёв', 'Гусев', 'Фёдоров', 'Чушкин', 'Молотов', 'Миронов', 'Белов', 'Комаров', 'Григорьев', 'Степанов', 'Коняхин', 'Киселёв', 'Сергеев', 'Кириллов', 'Воронов', 'Блинников', 'Макаров', 'Анисимов', 'Логинов', 'Шутов', 'Романов', 'Игнатьев', 'Жданов', 'Филиппов'];

let width = 50;
let height = 50;
let strength = 50;
let players = []

const cellStandard = [strength, 0, false, false];

let map = Array(height).fill().map(() => Array(width).fill().map(() => [strength, 0, false, false]));

let player = { id: 1, nickname: 'Игрок', x: 25, y: 25, cellMin: 1, cellMax: 99, captured: [], canFlag: false, flagCount: 1, flagsAvailable: 0, kills: 0 }
let zoom = 4;

const game = document.querySelector('.field');
const container = document.querySelector('.game');
const layout = document.querySelector('.layout');

const leaderboard = document.querySelector('.header > .top > .left > .leaderboard > .content');

const joystick = [
    document.querySelector('.header > .bottom > .left > .joystick > .top > .button:nth-child(1) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(1) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(2) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(3) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .bottom > .button:nth-child(1) > button')
];

function requestFullscreen() {
    // const element = document.documentElement;
    
    // if (element.requestFullscreen) {
    //     element.requestFullscreen();
    // } else if (element.webkitRequestFullscreen) {
    //     element.webkitRequestFullscreen();
    // } else if (element.msRequestFullscreen) {
    //     element.msRequestFullscreen();
    // }
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

                if (player.x == x && player.y == y) {
                    square.classList.add('captured');
                    square.style.background = `#${colors[player.id - 1][1]}`;

                    players.push(player);
                }

                countElement.classList.add('count');
                countElement.textContent = map[y][x][0];

                square.appendChild(countElement);

                row.appendChild(square);
            });

            game.appendChild(row);
        });
    });
}

function checkPos(x, y) {
    return !players.some(player => player.x == x && player.y == y);
}

function generatePlayer() {
    const cell = document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);

    cell.innerHTML = '';

    const playerElement = document.createElement('div');

    playerElement.classList.add('player');
    playerElement.style.background = `#${colors[player.id - 1][0]}`;

    cell.appendChild(playerElement);
}

function generateRadius() {
    radius.forEach(element => {
        map[player.y + element[1]][player.x + element[0]][0] = player.cellMin;

        if (element[0] == 0 && element[1] == 0) {
            map[player.y][player.x][3] == true;

            generateFlag(player.x, player.y);
        }

        cellCapture(player.x + element[0], player.y + element[1]);
        generateCount(player.x + element[0], player.y + element[1]);
    });
}

function generateFlag(x, y) {
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    cell.classList.add('flag');
}

function generateCount(x, y) {
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);

    cell.innerHTML = '';

    const countElement = document.createElement('div');
    countElement.classList.add('count');

    players.forEach(player => {
        if (player.captured.some(pos => pos[0] == x && pos[1] == y)) {
            cell.classList.add('captured');
            cell.style.background = `#${colors[player.id - 1][1]}`;
        }
    });

    countElement.textContent = map[y][x][0];
    cell.appendChild(countElement);

    if (x == player.x && y == player.y) {
        generatePlayer();
    }

    players.forEach(player => {
        if (x == player.x && y == player.y) {
            if (player.id == 1) {
                generatePlayer();
            } else {
                generateBot(player);
            }
        }
    });
}

function findValidCells() {
    const validCells = [];
    
    function isTargetValue(cell) {
      return cell[0] === cellStandard[0] && cell[1] === cellStandard[1] && cell[2] === cellStandard[2] && cell[3] === cellStandard[3];
    }

    map.forEach((line, y) => {
        line.forEach((cell, x) => {
            let allNeighborsValid = true;

            if (!isTargetValue(cell)) {
                allNeighborsValid = false;
            }

            if (allNeighborsValid) {
                radius.forEach(element => {
                    if (element[0] != 0 && element[1] != 0) {
                        const newPos = { x: x + element[0], y: y + element[0] }

                        if (newPos.y >= 0 && newPos.y < height && newPos.x >= 0 && newPos.x < width) {
                            if (!isTargetValue(map[newPos.y][newPos.x])) {
                                allNeighborsValid = false;
                            }
                        } else {
                            allNeighborsValid = false;
                        }
                    }
                });
            }
              
            if (allNeighborsValid) {
                validCells.push({x, y});
            }
        });
    });
    
    return validCells;
}

function createBot() {
    const validCells = findValidCells();
    const cell = validCells[Math.floor(Math.random() * validCells.length)];
    
    const bot = { id: players.length + 1, nickname: generateBotUsername(), x: cell.x, y: cell.y, cellMin: 1, cellMax: 99, captured: [], canFlag: false, flagCount: 1, flagsAvailable: 0, kills: 0 }

    players.push(bot);

    generateBot(bot);
    generateBotRadius(bot);
}

function generateBot(bot) {
    const cell = document.querySelector(`[data-x="${bot.x}"][data-y="${bot.y}"]`);

    cell.innerHTML = '';

    const botElement = document.createElement('div');

    botElement.classList.add('player');
    botElement.style.background = `#${colors[bot.id - 1][0]}`;

    cell.appendChild(botElement);
}

function generateBotUsername() {
    const random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return enFirstUsernamesPart[Math.floor(Math.random() * enFirstUsernamesPart.length)] + enSecondUsernamesPart[Math.floor(Math.random() * enSecondUsernamesPart.length)] + Math.floor(Math.random() * 100);
    } else if (random == 1) {
        return ruFirstUsernamesPart[Math.floor(Math.random() * ruFirstUsernamesPart.length)] + ' ' + ruSecondUsernamesPart[Math.floor(Math.random() * ruSecondUsernamesPart.length)];
    } else {
        return 'Гость ' + (Math.floor(Math.random() * 1000) + 100);
    }
}

function generateBotRadius(bot) {
    radius.forEach(element => {
        map[bot.y + element[1]][bot.x + element[0]][0] = bot.cellMin;

        if (element[0] == 0 && element[1] == 0) {
            map[bot.y][bot.x][3] == true;

            generateFlag(bot.x, bot.y);
        }

        botCellCapture(bot, bot.x + element[0], bot.y + element[1]);
        generateCount(bot.x + element[0], bot.y + element[1]);
    });
}

function movePlayer(direction) {
    const old = { x: player.x, y: player.y };

    if (direction == 0 && player.y > 0) {
        if (checkPos(player.x, player.y - 1)) {
            player.y -= 1;
        }
    } else if (direction == 1 && player.y < height - 1) {
        if (checkPos(player.x, player.y + 1)) {
            player.y += 1;
        }
    } else if (direction == 2 && player.x > 0) {
        if (checkPos(player.x - 1, player.y)) {
            player.x -= 1;
        }
    } else if (direction == 3 && player.x < width - 1) {
        if (checkPos(player.x + 1, player.y)) {
            player.x += 1;
        }
    }

    generateCount(old.x, old.y);
    generatePlayer();

    centerOffset();
}

function moveBot(bot, direction) {
    const old = { x: players[bot.id - 1].x, y: players[bot.id - 1].y };

    if (direction == 0 && players[bot.id - 1].y > 0) {
        if (checkPos(players[bot.id - 1].x, players[bot.id - 1].y - 1)) {
            players[bot.id - 1].y -= 1;
        }
    } else if (direction == 1 && players[bot.id - 1].y < height - 1) {
        if (checkPos(players[bot.id - 1].x, players[bot.id - 1].y + 1)) {
            players[bot.id - 1].y += 1;
        }
    } else if (direction == 2 && players[bot.id - 1].x > 0) {
        if (checkPos(players[bot.id - 1].x - 1, players[bot.id - 1].y)) {
            players[bot.id - 1].x -= 1;
        }
    } else if (direction == 3 && players[bot.id - 1].x < width - 1) {
        if (checkPos(players[bot.id - 1].x + 1, players[bot.id - 1].y)) {
            players[bot.id - 1].x += 1;
        }
    }

    generateCount(old.x, old.y);
    generateBot(bot);
}

function playerCapture() {
    if (map[player.y][player.x][0] <= 0 && !player.captured.some(pos => pos[0] == player.x && pos[1] == player.y)) {
        cellCapture(player.x, player.y);
    } else if (!player.captured.some(pos => pos[0] == player.x && pos[1] == player.y)) {
        map[player.y][player.x][0] -= 1;
    } else {
        if (map[player.y][player.x][0] < player.cellMax) {
            map[player.y][player.x][0] += 1;
        }
    }

    generateCount(player.x, player.y);
}

function cellCapture(x, y) {
    let capturedByOther = false;
    let otherPlayer = null;
    
    players.forEach(player => {
        const cellIndex = player.captured.findIndex(pos => pos[0] == x && pos[1] == y);

        if (cellIndex !== -1 && player.id !== 1) {
            capturedByOther = true;
            otherPlayer = player;
        }
    });
    
    if (capturedByOther && otherPlayer) {
        otherPlayer.captured = otherPlayer.captured.filter(pos => !(pos[0] === x && pos[1] === y));
    }
    
    if (!player.captured.some(pos => pos[0] == x && pos[1] == y)) {
        player.captured.push([x, y]);
    }
}

function botCellCapture(bot, x, y) {
    bot.captured.push([x, y]);
}

function passiveCapture() {
    requestAnimationFrame(() => {
        setInterval(() => {
            player.captured.forEach(pos => {
                if (map[pos[1]][pos[0]][0] < player.cellMax) {
                    map[pos[1]][pos[0]][0] += 1;
                }

                generateCount(pos[0], pos[1]);
            });
        }, 1000);
    });
}

function botPassiveCapture(bot) {
    requestAnimationFrame(() => {
        setInterval(() => {
            bot.captured.forEach(pos => {
                if (map[pos[1]][pos[0]][0] < bot.cellMax) {
                    map[pos[1]][pos[0]][0] += 1;
                }

                generateCount(pos[0], pos[1]);
            });
        }, 1000);
    });
}

function botActive(bot) {
    requestAnimationFrame(() => {
        setInterval(() => {
            moveBot(bot, Math.floor(Math.random() * 4))
        }, 1000);
    });
}

function generateLeaderboard() {
    leaderboard.innerHTML = '';

    let counts = [];

    players.forEach(player => {
        let count = 0;

        player.captured.forEach(cell => {
            count += map[cell[1]][cell[0]][0]
        });

        counts.push([player.id, count]);
    });

    counts = counts.sort((a, b) => b[1] - a[1]).slice(0, leaderboardMax);

    counts.forEach((player, index) => {
        leaderboard.innerHTML += `<span style="color: #${colors[player[0] - 1][0]};">${index + 1}. ${players[player[0] - 1].nickname} <span>${player[1]}</span></span>`;
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
        generateRadius();
        centerOffset();

        for (let index = 0; index < colors.length - 1; index++) {
            createBot();
        }

        players.forEach(player => {
            if (player.id == 1) {
                passiveCapture();
            } else {
                botPassiveCapture(player);
                botActive(player);
            }
        });

        generateLeaderboard();

        setInterval(() => {
            generateLeaderboard();
        }, 2500);
    }, 50);
}

main();