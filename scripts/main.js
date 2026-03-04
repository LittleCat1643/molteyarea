const canFullscreen = true;

const colors = [['ff4d6d', 'ffb3c1'], ['0582ca', '00a6fb'], ['2a9134', '5bba6f'], ['ffba08', 'ffe169'], ['7b2cbf', 'c77dff'], ['e85d04', 'faa307']];
const radius = [[0, 0], [1, 0], [1, 1], [0, 1], [-1, 0], [-1, -1], [0, -1], [1, -1], [-1, 1]];
const zoomBorder = [0.5, 5];

const leaderboardMax = 3;

const enFirstUsernamesPart = ['Good', 'Bad', 'Happy', 'Sad', 'Big', 'Small', 'Young', 'Old', 'Beautiful', 'Ugly', 'Nice', 'Mean', 'Kind', 'Cruel', 'Clever', 'Stupid', 'Busy', 'Lazy', 'Quiet', 'Noisy', 'Hot', 'Cold', 'Hungry', 'Full', 'Tired', 'Rested', 'Strong', 'Weak', 'Brave', 'Scared', 'Rich', 'Poor', 'Important', 'Unimportant', 'Easy', 'Difficult', 'Interesting', 'Boring', 'Exciting', 'Calming', 'Funny', 'Serious', 'Angry', 'Friendly', 'Polite', 'Rude', 'Clean', 'Dirty', 'New', 'Old', 'Modern', 'Traditional', 'Comfortable', 'Uncomfortable', 'Safe', 'Dangerous', 'Healthy', 'Sick', 'Fast', 'Slow', 'Long', 'Short', 'Deep', 'Shallow', 'High', 'Low', 'Wide', 'Narrow', 'Thick', 'Thin', 'Heavy', 'Light', 'Soft', 'Hard', 'Smooth', 'Rough'];
const enSecondUsernamesPart = ['Time', 'Person', 'Year', 'Way', 'Day', 'Thing', 'Man', 'World', 'Life', 'Hand', 'Part', 'Child', 'Eye', 'Woman', 'Place', 'Work', 'Week', 'Case', 'Point', 'Government', 'Company', 'Number', 'Group', 'Problem', 'Fact', 'Side', 'Member', 'Family', 'System', 'Area', 'Year', 'Community', 'Name', 'Thing', 'Country', 'House', 'Service', 'Friend', 'Story', 'Customer', 'Job', 'School', 'City', 'State', 'Plant', 'Resource', 'Money', 'Air', 'Health', 'Structure', 'Car', 'Product', 'Information', 'Food', 'Safety', 'Water', 'Room', 'Level', 'Book', 'Top', 'Teacher', 'Line', 'Order', 'Word', 'Question', 'Door', 'Answer', 'Key', 'Phone', 'Result', 'Week', 'Girl', 'Boy', 'Minute', 'Corner', 'Face', 'Tax', 'Hour', 'Plan', 'Brand', 'Rule', 'Mind', 'Shape', 'Goal', 'Step', 'Weight', 'Pattern', 'Price', 'View', 'Ball', 'Month', 'Paper', 'Sign', 'Glass', 'Kind', 'Space', 'Sun', 'Music'];
const ruFirstUsernamesPart = ['Александр', 'Дмитрий', 'Максим', 'Иван', 'Михаил', 'Владимир', 'Сергей', 'Андрей', 'Николай', 'Виктор', 'Олег', 'Юрий', 'Артем', 'Антон', 'Павел', 'Игорь', 'Роман', 'Евгений', 'Анатолий', 'Егор', 'Никита', 'Алексей', 'Валерий', 'Семён', 'Кирилл', 'Денис', 'Вячеслав', 'Тимофей', 'Владислав', 'Степан', 'Леонид', 'Борис', 'Григорий', 'Виктор', 'Эдуард', 'Семён', 'Василий', 'Виталий', 'Александр', 'Руслан', 'Тимур', 'Даниил', 'Матвей', 'Константин', 'Виктор', 'Мирон', 'Илья', 'Родион', 'Глеб', 'Лев', 'Ярослав', 'Марк', 'Егор', 'Кирилл'];
const ruSecondUsernamesPart = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Батурин', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Зайцев', 'Соловьёв', 'Васильев', 'Быков', 'Воробьёв', 'Гусев', 'Фёдоров', 'Чушкин', 'Молотов', 'Миронов', 'Белов', 'Комаров', 'Григорьев', 'Степанов', 'Коняхин', 'Киселёв', 'Сергеев', 'Кириллов', 'Воронов', 'Блинников', 'Макаров', 'Анисимов', 'Логинов', 'Шутов', 'Романов', 'Игнатьев', 'Жданов', 'Филиппов'];

let width = 50;
let height = 50;
let strength = 10;
let players = []

const cellStandard = [strength, 0, false];

let map = Array(height).fill().map(() => Array(width).fill().map(() => [strength, 0, false]));

let player = { id: 1, nickname: 'Игрок', x: 25, y: 25, cellMin: 1, cellMax: 99, captured: [], canFlag: false, flagCount: 1, flagsAvailable: 0, kills: 0 }
let zoom = 3;

const game = document.querySelector('.field');
const container = document.querySelector('.game');
const layout = document.querySelector('.layout');

const leaderboard = document.querySelector('.header > .top > .left > .leaderboard > .content');
const miniMap = document.querySelector('.header > .top > .right > .map');

const joystick = [
    document.querySelector('.header > .bottom > .left > .joystick > .top > .button:nth-child(1) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(1) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(2) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .center > .button:nth-child(3) > button'),
    document.querySelector('.header > .bottom > .left > .joystick > .bottom > .button:nth-child(1) > button')
];

const zoomer = [
    document.querySelector('.header > .center > .right > .zoom > .more > button'),
    document.querySelector('.header > .center > .right > .zoom > .less > button')
]

function requestFullscreen() {
    if (canFullscreen) {
        const element = document.documentElement;
    
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
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

function checkPos(x, y) {
    return !players.some(player => player.x == x && player.y == y);
}

function generatePlayer() {
    const cell = document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);

    cell.innerHTML = '';

    const playerElement = document.createElement('div');

    playerElement.classList.add('player');
    playerElement.style.background = `#${colors[player.id - 1][0]}`;

    const nicknameElement = document.createElement('span');

    nicknameElement.textContent = player.nickname;

    cell.appendChild(playerElement);
    cell.appendChild(nicknameElement);
}

function generateRadius() {
    radius.forEach(element => {
        const newX = player.x + element[0];
        const newY = player.y + element[1];

        if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
            map[newY][newX][0] = player.cellMin;

            if (element[0] == 0 && element[1] == 0) {
                map[player.y][player.x][2] = true;
                generateFlag(player.x, player.y);
            }

            cellCapture(newX, newY);
            generateCount(newX, newY);
        }
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
    
    function isStandardCell(cell) {
        return cell && cell[0] === cellStandard[0] && cell[1] === cellStandard[1] && cell[2] === cellStandard[2];
    }

    map.forEach((line, y) => {
        line.forEach((cell, x) => {
            if (!(x < 1 || x >= width - 1 || y < 1 || y >= height - 1)) {
                if (isStandardCell(cell) && checkPos(x, y)) {
                    let allAreaFree = true;
                    const futureArea = [];
                    
                    radius.forEach(element => {
                        const newX = x + element[0];
                        const newY = y + element[1];
                        
                        if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
                            futureArea.push([newX, newY]);
                            
                            if (!isStandardCell(map[newY][newX])) {
                                allAreaFree = false;
                            }
                            
                            if (!checkPos(newX, newY)) {
                                allAreaFree = false;
                            }
                            
                            const isCaptured = players.some(player => 
                                player.captured.some(pos => pos[0] == newX && pos[1] == newY)
                            );
                            
                            if (isCaptured) {
                                allAreaFree = false;
                            }
                        } else {
                            allAreaFree = false;
                        }
                    });
                    
                    if (allAreaFree) {
                        const willBeOccupied = players.some(existingPlayer => {
                            if (existingPlayer.id == 1) return false;
                            
                            return radius.some(element => {
                                const otherX = existingPlayer.x + element[0];
                                const otherY = existingPlayer.y + element[1];
                                return otherX == x && otherY == y;
                            });
                        });
                        
                        if (!willBeOccupied) {
                            validCells.push({x, y});
                        }
                    }
                }
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

    const nicknameElement = document.createElement('span');

    nicknameElement.textContent = bot.nickname;

    cell.appendChild(botElement);
    cell.appendChild(nicknameElement);
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
        const newX = bot.x + element[0];
        const newY = bot.y + element[1];

        if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
            map[newY][newX][0] = bot.cellMin;

            if (element[0] == 0 && element[1] == 0) {
                map[bot.y][bot.x][3] == true;
                generateFlag(bot.x, bot.y);
            }

            botCellCapture(bot, newX, newY);
            generateCount(newX, newY);
        }
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

function botCapture(bot) {
    // Проверяем, принадлежит ли текущая клетка этому боту
    const isOwnedByThisBot = bot.captured.some(pos => pos[0] == bot.x && pos[1] == bot.y);
    
    // Если клетка уже принадлежит боту - ничего не делаем
    if (isOwnedByThisBot) {
        return;
    }
    
    // Атакуем только текущую клетку, на которой стоит бот
    if (map[bot.y][bot.x][0] <= 0) {
        // Клетка готова к захвату
        botCellCapture(bot, bot.x, bot.y);
    } else {
        // Уменьшаем значение клетки
        map[bot.y][bot.x][0] -= 1;
    }

    generateCount(bot.x, bot.y);
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
            moveBot(bot, Math.floor(Math.random() * 4));
            
            for (let index = 0; index < strength + 1; index++) {
                botCapture(bot);
            }
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
        if (player[0] == 1) {
            add = ' (Вы)'
        } else {
            add = ''
        }

        leaderboard.innerHTML += `<span style="color: #${colors[player[0] - 1][0]};">#${index + 1} – ${players[player[0] - 1].nickname}${add}<span>${player[1]}</span></span>`;
    });
}

function generateMiniMap() {
    miniMap.textContent = '';
    
    map.forEach((line, y) => {
        const row = document.createElement('div');
        row.classList.add('line');

        line.forEach((cell, x) => {
            const square = document.createElement('div');

            square.classList.add('cell');

            square.style.background = '#cccccc';

            players.forEach(player => {
                if (player.captured.some(pos => pos[0] == x && pos[1] == y)) {
                    square.style.background = `#${colors[player.id - 1][1]}`;
                }
            });

            players.forEach(player => {
                if (player.x == x && player.y == y) {
                    let counts = [];

                    players.forEach(player => {
                        let count = 0;

                        player.captured.forEach(cell => {
                            count += map[cell[1]][cell[0]][0]
                        });

                        counts.push([player.id, count]);
                    });

                    let count = counts.sort((a, b) => b[1] - a[1]).slice(0, 1)[0];

                    if (players[count[0] - 1].x == x && players[count[0] - 1].y == y) {
                        square.classList.add('player');
                        square.innerHTML = '<i class="fi fi-sr-crown" style="font-size: 4px; position: relative; bottom: 11px; right: 1px; color: #e85d04;"></i>';
                    }
                }
            });

            row.appendChild(square);
        });

        miniMap.appendChild(row);
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

zoomer[0].addEventListener('click', () => {
    if (zoom + 0.1 <= zoomBorder[1]) {
        zoom += 0.1;
    }

    centerOffset();
});

zoomer[1].addEventListener('click', () => {
    if (zoom - 0.1 >= zoomBorder[0]) {
        zoom -= 0.1;
    }

    centerOffset();
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
    
    requestAnimationFrame(() => {
        setTimeout(() => {
            const validCells = findValidCells();
            const cells = validCells[Math.floor(Math.random() * validCells.length)]

            player.x = cells.x;
            player.y = cells.y;

            map[player.y][player.x][2] = true;

            players.push(player);

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
            generateMiniMap();

            setInterval(() => {
                generateLeaderboard();
                generateMiniMap();
            }, 2500);
        }, 50);
    });
}

main();