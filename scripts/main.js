const canFullscreen = false;
const canOverlay = true;
const zoomBorder = [0.5, 5];
const leaderboardMax = 3;
const playersLimit = 12;

const colors = [['ff0000', 'ff6666'], ['ff7f00', 'ffa64d'], ['ffd700', 'ffe566'], ['32cd32', '98fb98'], ['00bfff', '87cefa'], ['1e90ff', '6ab0ff'], ['8a2be2', 'b47bff'], ['ff69b4', 'ffb6c1'], ['40e0d0', '9fe2df'], ['dc143c', 'ff6b8b'], ['daa520', 'f4c542'], ['9acd32', 'c0e36b'], ['4b0082', '7a4fa0'], ['ff7f50', 'ffa07a'], ['9932cc', 'b96bcf'], ['00ffff', '7fffff'], ['7fff00', 'b2ff66'], ['da70d6', 'e9a0e6'], ['ff4500', 'ff7d4d'], ['00ff7f', '7fffaf'], ['6a5acd', '9285e0'], ['ff8c00', 'ffb347'], ['e75480', 'f291b2'], ['007ff0', '4da6ff']];

const enFirstUsernamesPart = ['Good', 'Bad', 'Happy', 'Sad', 'Big', 'Small', 'Young', 'Old', 'Beautiful', 'Ugly', 'Nice', 'Mean', 'Kind', 'Cruel', 'Clever', 'Stupid', 'Busy', 'Lazy', 'Quiet', 'Noisy', 'Hot', 'Cold', 'Hungry', 'Full', 'Tired', 'Rested', 'Strong', 'Weak', 'Brave', 'Scared', 'Rich', 'Poor', 'Important', 'Unimportant', 'Easy', 'Difficult', 'Interesting', 'Boring', 'Exciting', 'Calming', 'Funny', 'Serious', 'Angry', 'Friendly', 'Polite', 'Rude', 'Clean', 'Dirty', 'New', 'Old', 'Modern', 'Traditional', 'Comfortable', 'Uncomfortable', 'Safe', 'Dangerous', 'Healthy', 'Sick', 'Fast', 'Slow', 'Long', 'Short', 'Deep', 'Shallow', 'High', 'Low', 'Wide', 'Narrow', 'Thick', 'Thin', 'Heavy', 'Light', 'Soft', 'Hard', 'Smooth', 'Rough'];
const enSecondUsernamesPart = ['Time', 'Person', 'Year', 'Way', 'Day', 'Thing', 'Man', 'World', 'Life', 'Hand', 'Part', 'Child', 'Eye', 'Woman', 'Place', 'Work', 'Week', 'Case', 'Point', 'Government', 'Company', 'Number', 'Group', 'Problem', 'Fact', 'Side', 'Member', 'Family', 'System', 'Area', 'Year', 'Community', 'Name', 'Thing', 'Country', 'House', 'Service', 'Friend', 'Story', 'Customer', 'Job', 'School', 'City', 'State', 'Plant', 'Resource', 'Money', 'Air', 'Health', 'Structure', 'Car', 'Product', 'Information', 'Food', 'Safety', 'Water', 'Room', 'Level', 'Book', 'Top', 'Teacher', 'Line', 'Order', 'Word', 'Question', 'Door', 'Answer', 'Key', 'Phone', 'Result', 'Week', 'Girl', 'Boy', 'Minute', 'Corner', 'Face', 'Tax', 'Hour', 'Plan', 'Brand', 'Rule', 'Mind', 'Shape', 'Goal', 'Step', 'Weight', 'Pattern', 'Price', 'View', 'Ball', 'Month', 'Paper', 'Sign', 'Glass', 'Kind', 'Space', 'Sun', 'Music'];
const ruFirstUsernamesPart = ['Александр', 'Дмитрий', 'Максим', 'Иван', 'Михаил', 'Владимир', 'Сергей', 'Андрей', 'Николай', 'Виктор', 'Олег', 'Юрий', 'Артем', 'Антон', 'Павел', 'Игорь', 'Роман', 'Евгений', 'Анатолий', 'Егор', 'Никита', 'Алексей', 'Валерий', 'Семён', 'Кирилл', 'Денис', 'Вячеслав', 'Тимофей', 'Владислав', 'Степан', 'Леонид', 'Борис', 'Григорий', 'Виктор', 'Эдуард', 'Семён', 'Василий', 'Виталий', 'Александр', 'Руслан', 'Тимур', 'Даниил', 'Матвей', 'Константин', 'Виктор', 'Мирон', 'Илья', 'Родион', 'Глеб', 'Лев', 'Ярослав', 'Марк', 'Егор', 'Кирилл'];
const ruSecondUsernamesPart = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Батурин', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Зайцев', 'Соловьёв', 'Васильев', 'Быков', 'Воробьёв', 'Гусев', 'Фёдоров', 'Чушкин', 'Молотов', 'Миронов', 'Белов', 'Комаров', 'Григорьев', 'Степанов', 'Коняхин', 'Киселёв', 'Сергеев', 'Кириллов', 'Воронов', 'Блинников', 'Макаров', 'Анисимов', 'Логинов', 'Шутов', 'Романов', 'Игнатьев', 'Жданов', 'Филиппов'];

const game = document.querySelector('.field');
const container = document.querySelector('.game');
const layout = document.querySelector('.layout');

const leaderboard = document.querySelector('.header > .top > .left > .leaderboard > .content');
const miniMap = document.querySelector('.header > .top > .right > .map');

const joystick = [
    document.querySelector('.header > .bottom > .left > .joystick > .handlers > .top'),
    document.querySelector('.header > .bottom > .left > .joystick > .handlers > .bottom'),
    document.querySelector('.header > .bottom > .right > .attack > .button'),
    document.querySelector('.header > .bottom > .left > .joystick > .handlers > .right'),
    document.querySelector('.header > .bottom > .left > .joystick > .handlers > .left')
];

const zoomer = [document.querySelector('.header > .center > .right > .zoom > .more > button'), document.querySelector('.header > .center > .right > .zoom > .less > button')];

const moveJoystickArea = document.querySelector('.header > .bottom > .left > .joystick > .button');
const moveJoystick = document.querySelector('.header > .bottom > .left > .joystick > .button > button');
const attackJoystick = document.querySelector('.header > .bottom > .right > .attack > .button > button');

let width = 50;
let height = 50;
let strength = 10;

let attackTimer = null;
let attackInterval = 300;

let zoom = 3;

let cellStandard = [strength, 0, false];

let players = [];

let map = Array(height).fill().map(() => Array(width).fill().map(() => [strength, 0, false]));

let player = { id: 1, nickname: 'Игрок', x: 25, y: 25, cellMin: 1, cellMax: 99, captured: [], flagCount: 1, kills: 0 };

function requestFullscreen() {
    if (canFullscreen) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
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

function generateEntity(entity) {
    const cell = document.querySelector(`[data-x="${entity.x}"][data-y="${entity.y}"]`);

    cell.innerHTML = '';

    const entityElement = document.createElement('div');

    entityElement.classList.add('player');
    entityElement.style.background = `#${colors[entity.id - 1][0]}`;

    const nicknameElement = document.createElement('span');

    nicknameElement.textContent = entity.nickname;

    let counts = [];

    players.forEach(player => {
        let count = 0;

        player.captured.forEach(cell => { count += map[cell[1]][cell[0]][0] });

        counts.push([player.id, count]);
    });

    counts = counts.sort((a, b) => b[1] - a[1]).slice(0, 1)[0];

    cell.appendChild(entityElement);
    cell.appendChild(nicknameElement);

    if (counts[0] == entity.id) {
        const crownElement = document.createElement('div');
        crownElement.classList.add('crown');

        crownElement.innerHTML = '<i class="fi fi-ss-crown" style="color: #ffbe0b;"></i>';

        cell.appendChild(crownElement);
    }
}

function generateRadius(entity) {
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const newX = entity.x + dx;
            const newY = entity.y + dy;

            if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
                map[newY][newX][0] = entity.cellMin;

                if (dx == 0 && dy == 0) {
                    map[entity.y][entity.x][2] = true;

                    generateFlag(entity.x, entity.y);
                }

                captureCell(entity, newX, newY);
                generateCount(newX, newY);
            }
        }
    }
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

    let capturedBy = null;
    players.forEach(player => { if (player.captured.some(pos => pos[0] == x && pos[1] == y)) { capturedBy = player } });

    const count = map[y][x][0];
    
    if (capturedBy) {
        const baseColor = colors[capturedBy.id - 1][1];
        
        const r = parseInt(baseColor.substr(0, 2), 16);
        const g = parseInt(baseColor.substr(2, 2), 16);
        const b = parseInt(baseColor.substr(4, 2), 16);
        
        const lightenFactor = 0.5 + (count / 99) * 0.5;

        const adjustedR = Math.round(r + (255 - r) * (1 - lightenFactor));
        const adjustedG = Math.round(g + (255 - g) * (1 - lightenFactor));
        const adjustedB = Math.round(b + (255 - b) * (1 - lightenFactor));
        
        cell.style.background = `rgb(${adjustedR}, ${adjustedG}, ${adjustedB})`;
        cell.classList.add('captured');
    } else {
        cell.style.background = '';
    }

    countElement.textContent = count;
    cell.appendChild(countElement);

    players.forEach(entity => {
        if (x == entity.x && y == entity.y) {
            generateEntity(entity);
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
            if (x < 1 || x >= width - 1 || y < 1 || y >= height - 1) return;
            
            if (isStandardCell(cell) && checkPos(x, y)) {
                let allAreaFree = true;
                
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        const newX = x + dx;
                        const newY = y + dy;

                        if (newY < 0 || newY >= height || newX < 0 || newX >= width) {
                            allAreaFree = false;
                            break;
                        }

                        if (!isStandardCell(map[newY][newX])) {
                            allAreaFree = false;
                            break;
                        }
                        
                        if (!checkPos(newX, newY)) {
                            allAreaFree = false;
                            break;
                        }
                        
                        const isCaptured = players.some(player => 
                            player.captured.some(pos => pos[0] == newX && pos[1] == newY)
                        );
                        
                        if (isCaptured) {
                            allAreaFree = false;
                            break;
                        }
                    }
                    if (!allAreaFree) break;
                }
                
                if (allAreaFree) {
                    let willBeOccupied = false;
                    
                    for (const existingPlayer of players) {
                        if (existingPlayer.id == 1) continue;
                        
                        for (let dy = -1; dy <= 1; dy++) {
                            for (let dx = -1; dx <= 1; dx++) {
                                const otherX = existingPlayer.x + dx;
                                const otherY = existingPlayer.y + dy;
                                if (otherX == x && otherY == y) {
                                    willBeOccupied = true;
                                    break;
                                }
                            }
                            if (willBeOccupied) break;
                        }
                        if (willBeOccupied) break;
                    }
                    
                    if (!willBeOccupied) {
                        validCells.push({x, y});
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
    
    const bot = { id: players.length + 1, nickname: generateUsername(), x: cell.x, y: cell.y, cellMin: 1, cellMax: 99, captured: [], canFlag: false, flagCount: 1, flagsAvailable: 0, kills: 0 }

    players.push(bot);

    generateEntity(bot);
    generateRadius(bot);
}

function generateUsername() {
    const random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return enFirstUsernamesPart[Math.floor(Math.random() * enFirstUsernamesPart.length)] + enSecondUsernamesPart[Math.floor(Math.random() * enSecondUsernamesPart.length)] + Math.floor(Math.random() * 100);
    } else if (random == 1) {
        return ruFirstUsernamesPart[Math.floor(Math.random() * ruFirstUsernamesPart.length)] + ' ' + ruSecondUsernamesPart[Math.floor(Math.random() * ruSecondUsernamesPart.length)];
    } else {
        return 'Гость ' + (Math.floor(Math.random() * 1000) + 100);
    }
}

function moveEntity(entity, direction) {
    const old = { x: entity.x, y: entity.y };

    if (direction == 0 && entity.y > 0) {
        if (checkPos(entity.x, entity.y - 1)) {
            entity.y -= 1;
        }
    } else if (direction == 1 && entity.y < height - 1) {
        if (checkPos(entity.x, entity.y + 1)) {
            entity.y += 1;
        }
    } else if (direction == 2 && entity.x > 0) {
        if (checkPos(entity.x - 1, entity.y)) {
            entity.x -= 1;
        }
    } else if (direction == 3 && entity.x < width - 1) {
        if (checkPos(entity.x + 1, entity.y)) {
            entity.x += 1;
        }
    }

    generateCount(old.x, old.y);
    generateEntity(entity);

    if (entity.id == 1) {
        centerOffset();
    }
}

function attack(entity) {
    const isOwnedByThisEntity = entity.captured.some(pos => pos[0] == entity.x && pos[1] == entity.y);
    
    if (isOwnedByThisEntity) {
        if (map[entity.y][entity.x][0] < entity.cellMax) {
            map[entity.y][entity.x][0] += 1;
        }

        generateCount(entity.x, entity.y);

        return;
    }

    players.forEach(otherPlayer => {
        if (otherPlayer.id !== entity.id) {
            const cellIndex = otherPlayer.captured.findIndex(pos => pos[0] == entity.x && pos[1] == entity.y);
            if (cellIndex !== -1) {
                otherPlayer.captured.splice(cellIndex, 1);
            }
        }
    });
    
    if (map[entity.y][entity.x][0] <= 1) {
        captureCell(entity, entity.x, entity.y);
    } else {
        map[entity.y][entity.x][0] -= 1;
    }

    generateCount(entity.x, entity.y);
}

function captureCell(entity, x, y) {
    if (!entity.captured.some(pos => pos[0] == x && pos[1] == y)) {
        entity.captured.push([x, y]);
    }
}

function passiveIncome(entity) {
    requestAnimationFrame(() => {
        setInterval(() => {
            entity.captured.forEach(pos => {
                if (map[pos[1]][pos[0]][0] < entity.cellMax) {
                    map[pos[1]][pos[0]][0] += 1;
                }

                generateCount(pos[0], pos[1]);
            });
        }, 1000);
    });
}

function botActive(entity) {
    if (entity.id != 1) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                if (entity.captured.some(pos => pos[0] == entity.x && pos[1] == entity.y)) {
                    let canMove = [];
                    
                    if (entity.y > 0) {
                        if (!entity.captured.some(pos => pos[0] == entity.x && pos[1] == entity.y - 1)) {
                            if (checkPos(entity.x, entity.y - 1)) {
                                canMove.push(0);
                            }
                        }
                    }
                    
                    if (entity.y < height - 1) {
                        if (!entity.captured.some(pos => pos[0] == entity.x && pos[1] == entity.y + 1)) {
                            if (checkPos(entity.x, entity.y + 1)) {
                                canMove.push(1);
                            }
                        }
                    }
                    
                    if (entity.x > 0) {
                        if (!entity.captured.some(pos => pos[0] == entity.x - 1 && pos[1] == entity.y)) {
                            if (checkPos(entity.x - 1, entity.y)) {
                                canMove.push(2);
                            }
                        }
                    }
                    
                    if (entity.x < width - 1) {
                        if (!entity.captured.some(pos => pos[0] == entity.x + 1 && pos[1] == entity.y)) {
                            if (checkPos(entity.x + 1, entity.y)) {
                                canMove.push(3);
                            }
                        }
                    }
                    
                    if (canMove.length > 0) {
                        const randomDirection = canMove[Math.floor(Math.random() * canMove.length)];
                        moveEntity(entity, randomDirection);
                    } else {
                        let anyDirection = [];
                        
                        if (entity.y > 0) {
                            anyDirection.push(0);
                        }
                        
                        if (entity.y < height - 1) {
                            anyDirection.push(1);
                        }
                        
                        if (entity.x > 0) {
                            anyDirection.push(2);
                        }
                        
                        if (entity.x < width - 1) {
                            anyDirection.push(3);
                        }
                        
                        if (anyDirection.length > 0) {
                            const randomDirection = anyDirection[Math.floor(Math.random() * anyDirection.length)];
                            moveEntity(entity, randomDirection);
                        }
                    }
                } else {
                    for (let index = 0; index < map[entity.y][entity.x][0] + 1; index++) {
                        setTimeout(() => {
                            attack(entity);
                        }, attackInterval);
                    }
                }

                botActive(entity);
            }, 1000);
        });
    }
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

    counts = counts.sort((a, b) => b[1] - a[1]);
    
    const topPlayers = counts.slice(0, leaderboardMax);
    
    const currentPlayerInTop = topPlayers.some(player => player[0] == 1);
    
    let currentPlayerData = null;
    let currentPlayerRank = null;
    
    if (!currentPlayerInTop) {
        currentPlayerData = counts.find(player => player[0] == 1);
        currentPlayerRank = counts.findIndex(player => player[0] == 1) + 1;
    }

    topPlayers.forEach((player, index) => {
        let add = player[0] == 1 ? ' (Вы)' : '';
        
        leaderboard.innerHTML += `<span style="color: #${colors[player[0] - 1][0]};">#${index + 1} – ${players[player[0] - 1].nickname}${add}<span>${player[1]}</span></span>`;
    });
    
    if (!currentPlayerInTop && currentPlayerData) {
        leaderboard.innerHTML += `<span style="color: #ffffff;">...</span>`;
        
        leaderboard.innerHTML += `<span style="color: #${colors[0][0]};">#${currentPlayerRank} – ${players[0].nickname} (Вы)<span>${currentPlayerData[1]}</span></span>`;
    }
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
                    square.style.background = `#${colors[player.id - 1][0]}`;
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
                        square.innerHTML = '<i class="fi fi-ss-crown" style="-webkit-text-stroke: 1px #000000; font-size: 12px; position: relative; bottom: 11px; right: 1px; color: #ffbe0b;"></i>';
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
        moveEntity(player, 0);
    } else if (event.code == 'ArrowDown' || event.code == 'KeyS') {
        moveEntity(player, 1);
    } else if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
        moveEntity(player, 2);
    } else if (event.code == 'ArrowRight' || event.code == 'KeyD') {
        moveEntity(player, 3);
    } else if (event.code == 'KeyE') {
        attack(player);
    }
}

joystick.forEach((element, index) => {
    let pressTimer;
    let isPressing = false;
    
    const startPress = (e) => {
        e.preventDefault();
        
        if (index == 0) {  
            moveEntity(player, 0);

            moveJoystickArea.classList.add('move');
            moveJoystick.classList.add('top');
        } else if (index == 1) {
            moveEntity(player, 2);

            moveJoystickArea.classList.add('move');
            moveJoystick.classList.add('left');
        } else if (index == 2) {
            const cell = document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
            cell.classList.add('tap');

            joystick[2].classList.add('tap');
            attackJoystick.classList.add('tap');

            isPressing = true;

            pressTimer = setTimeout(() => {
                if (isPressing) {
                    attack(player);
                    attackTimer = setInterval(() => {
                        if (isPressing) {
                            attack(player);
                        }

                    }, attackInterval);
                }
            }, attackInterval);
        } else if (index == 3) {
            moveEntity(player, 3);

            moveJoystickArea.classList.add('move');
            moveJoystick.classList.add('right');
        } else if (index == 4) {
            moveEntity(player, 1);

            moveJoystickArea.classList.add('move');
            moveJoystick.classList.add('bottom');
        }
    };
    
    const endPress = () => {
        if (index == 0) {  
            moveJoystickArea.classList.remove('move');
            moveJoystick.classList.remove('top');
        } else if (index == 1) {  
            moveJoystickArea.classList.remove('move');
            moveJoystick.classList.remove('left');
        } else if (index == 2) {
            const cell = document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
            cell.classList.remove('tap');

            joystick[2].classList.remove('tap');
            attackJoystick.classList.remove('tap');

            clearTimeout(pressTimer);
            clearInterval(attackTimer);

            isPressing = false;
        } else if (index == 3) {  
            moveJoystickArea.classList.remove('move');
            moveJoystick.classList.remove('right');
        } else if (index == 4) {  
            moveJoystickArea.classList.remove('move');
            moveJoystick.classList.remove('bottom');
        } 
    };

    element.addEventListener('touchstart', startPress);
    element.addEventListener('mousedown', startPress);
    
    element.addEventListener('touchend', endPress);
    element.addEventListener('touchcancel', endPress);
    element.addEventListener('mouseup', endPress);
    element.addEventListener('mouseleave', endPress);
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

function checkOrientation() {
    const overlay = document.querySelector('.overlay');

    if (canOverlay) {
        if (window.innerHeight > window.innerWidth) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
}

function main() {
    document.body.addEventListener('click', function fullscreenHandler() {
        requestFullscreen();
        document.body.removeEventListener('click', fullscreenHandler);
    }, { once: true });

    window.addEventListener('load', checkOrientation);
    window.addEventListener('resize', checkOrientation);

    if (window.screen && window.screen.orientation) {
        window.screen.orientation.addEventListener('change', checkOrientation);
    }
    
    generateMap();
    
    requestAnimationFrame(() => {
        setTimeout(() => {
            const validCells = findValidCells();
            const cells = validCells[Math.floor(Math.random() * validCells.length)]

            player.x = cells.x;
            player.y = cells.y;

            map[player.y][player.x][2] = true;

            players.push(player);

            generateEntity(player);
            generateRadius(player);

            centerOffset();

            for (let index = 0; index < playersLimit - 1; index++) {
                createBot();
            }

            players.forEach(entity => {
                passiveIncome(entity);
                botActive(entity);
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