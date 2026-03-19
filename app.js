let mapWidth = 50;
let mapHeight = 50;
let mapZoom = 3;

let cellDefaultHP = 10;
let cellMinHP = 1;
let cellMaxHP = 99;

let minTouchTime = 100;
let minSwipeDistance = 25;
let maxSwipeTime = 250;

let moveSpeedDefault = 500;
let damageSpeedDefault = 250;

let damageAttackDefault = 1;
let captureAttackDefault = 1;
let healingAttackDefault = 1;

let map = Array(mapHeight).fill().map(() => Array(mapWidth).fill().map(() => [cellDefaultHP, 0, false]));

let players = [];
let maxPlayers = 12;

const gameSwipe = document.querySelector('.scenes > .game > .over > .swipe');

const gameMain = document.querySelector('.scenes > .game');
const gameBelow = document.querySelector('.scenes > .game > .below');
const gameField = document.querySelector('.scenes > .game > .below > .field');

const nicknames = {
    en: [
        ['Good', 'Bad', 'Happy', 'Sad', 'Big', 'Small', 'Young', 'Old', 'Beautiful', 'Ugly', 'Nice', 'Mean', 'Kind', 'Cruel', 'Clever', 'Stupid', 'Busy', 'Lazy', 'Quiet', 'Noisy', 'Hot', 'Cold', 'Hungry', 'Full', 'Tired', 'Rested', 'Strong', 'Weak', 'Brave', 'Scared', 'Rich', 'Poor', 'Important', 'Unimportant', 'Easy', 'Difficult', 'Interesting', 'Boring', 'Exciting', 'Calming', 'Funny', 'Serious', 'Angry', 'Friendly', 'Polite', 'Rude', 'Clean', 'Dirty', 'New', 'Old', 'Modern', 'Traditional', 'Comfortable', 'Uncomfortable', 'Safe', 'Dangerous', 'Healthy', 'Sick', 'Fast', 'Slow', 'Long', 'Short', 'Deep', 'Shallow', 'High', 'Low', 'Wide', 'Narrow', 'Thick', 'Thin', 'Heavy', 'Light', 'Soft', 'Hard', 'Smooth', 'Rough'],
        ['Time', 'Person', 'Year', 'Way', 'Day', 'Thing', 'Man', 'World', 'Life', 'Hand', 'Part', 'Child', 'Eye', 'Woman', 'Place', 'Work', 'Week', 'Case', 'Point', 'Government', 'Company', 'Number', 'Group', 'Problem', 'Fact', 'Side', 'Member', 'Family', 'System', 'Area', 'Year', 'Community', 'Name', 'Thing', 'Country', 'House', 'Service', 'Friend', 'Story', 'Customer', 'Job', 'School', 'City', 'State', 'Plant', 'Resource', 'Money', 'Air', 'Health', 'Structure', 'Car', 'Product', 'Information', 'Food', 'Safety', 'Water', 'Room', 'Level', 'Book', 'Top', 'Teacher', 'Line', 'Order', 'Word', 'Question', 'Door', 'Answer', 'Key', 'Phone', 'Result', 'Week', 'Girl', 'Boy', 'Minute', 'Corner', 'Face', 'Tax', 'Hour', 'Plan', 'Brand', 'Rule', 'Mind', 'Shape', 'Goal', 'Step', 'Weight', 'Pattern', 'Price', 'View', 'Ball', 'Month', 'Paper', 'Sign', 'Glass', 'Kind', 'Space', 'Sun', 'Music']
    ],
    ru: [
        [
            ['Александр', 'Дмитрий', 'Максим', 'Иван', 'Михаил', 'Владимир', 'Сергей', 'Андрей', 'Николай', 'Виктор', 'Олег', 'Юрий', 'Артем', 'Антон', 'Павел', 'Игорь', 'Роман', 'Евгений', 'Анатолий', 'Егор', 'Никита', 'Алексей', 'Валерий', 'Семён', 'Кирилл', 'Денис', 'Вячеслав', 'Тимофей', 'Владислав', 'Степан', 'Леонид', 'Борис', 'Григорий', 'Виктор', 'Эдуард', 'Семён', 'Василий', 'Виталий', 'Александр', 'Руслан', 'Тимур', 'Даниил', 'Матвей', 'Константин', 'Виктор', 'Мирон', 'Илья', 'Родион', 'Глеб', 'Лев', 'Ярослав', 'Марк', 'Егор', 'Кирилл'],
            ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Батурин', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Зайцев', 'Соловьёв', 'Васильев', 'Быков', 'Воробьёв', 'Гусев', 'Фёдоров', 'Чушкин', 'Молотов', 'Миронов', 'Белов', 'Комаров', 'Григорьев', 'Степанов', 'Коняхин', 'Киселёв', 'Сергеев', 'Кириллов', 'Воронов', 'Блинников', 'Макаров', 'Анисимов', 'Логинов', 'Шутов', 'Романов', 'Игнатьев', 'Жданов', 'Филиппов']        
        ],
        [
            ['София', 'Ева', 'Анна', 'Мария', 'Варвара', 'Виктория', 'Алиса', 'Полина', 'Василиса', 'Мирослава', 'Екатерина', 'Ксения', 'Дарья', 'Александра', 'Елизавета', 'Арина', 'Вероника', 'Майя', 'Злата', 'Ольга', 'Анастасия', 'Милана', 'Эмилия', 'Кира', 'Есения', 'Таисия', 'Ульяна', 'Маргарита', 'Ангелина', 'Софья', 'Ника', 'Амина', 'Яна', 'Алисия', 'Вера', 'Надежда', 'Любовь', 'Светлана', 'Нина', 'Наталья', 'Татьяна', 'Галина', 'Людмила', 'Ирина', 'Алёна', 'Юлия', 'Олеся', 'Кристина', 'Антонина', 'Валентина', 'Лариса', 'Лидия', 'Зоя', 'Евгения', 'Марфа', 'Пелагея', 'Домна', 'Агафья', 'Фёкла', 'Степанида', 'Капитолина', 'Матрёна', 'Прасковья', 'Акулина', 'Феврония', 'Анфиса', 'Васса', 'Клавдия', 'Манефа', 'Милица', 'Неонила', 'Павла', 'Римма', 'Серафима', 'Фаина', 'Харитина', 'Юлиания', 'Агния', 'Богдана', 'Божена', 'Владислава', 'Дарина', 'Диана', 'Евдокия', 'Ефросинья', 'Ждана', 'Иванна', 'Илария', 'Инна', 'Ия', 'Карина', 'Лада', 'Леонида', 'Лилия', 'Лукерия', 'Мальвина', 'Манефа', 'Мелания', 'Милена', 'Настасья', 'Нелли', 'Оксана', 'Рада', 'Руслана', 'Снежана', 'Станислава', 'Ярослава'],
            ['Иванова', 'Смирнова', 'Кузнецова', 'Попова', 'Васильева', 'Петрова', 'Соколова', 'Михайлова', 'Новикова', 'Фёдорова', 'Морозова', 'Волкова', 'Алексеева', 'Лебедева', 'Павлова', 'Семёнова', 'Егорова', 'Степанова', 'Николаева', 'Орлова', 'Андреева', 'Макарова', 'Никитина', 'Зайцева', 'Соловьёва', 'Борисова', 'Тимофеева', 'Гусева', 'Белова', 'Комарова', 'Киселёва', 'Ильина', 'Максимова', 'Ефимова', 'Тарасова', 'Романова', 'Чернова', 'Власова', 'Калинина', 'Сорокина', 'Ермакова', 'Маркова', 'Гаврилова', 'Данилова', 'Миронова', 'Фролова', 'Игнатьева', 'Логинова', 'Савельева', 'Герасимова', 'Казакова', 'Молчанова', 'Щербакова', 'Коновалова', 'Быкова', 'Крылова', 'Пономарёва', 'Денисова', 'Гришина', 'Емельянова', 'Мухина', 'Демина', 'Сергеева', 'Антонова', 'Яковлева', 'Осипова', 'Белоусова', 'Филиппова', 'Афанасьева', 'Фомина', 'Абрамова', 'Горбунова', 'Кудрявцева', 'Архипова', 'Лазарева', 'Медведева', 'Журавлёва', 'Ершова', 'Нестерова', 'Прокофьева', 'Маслова', 'Бирюкова', 'Блинова', 'Григорьева', 'Титова', 'Львова', 'Кононова', 'Климова', 'Соболева', 'Карпова', 'Голубева', 'Кузьмина', 'Королёва', 'Виноградова', 'Наумова', 'Чернышёва', 'Тихонова', 'Богданова', 'Овчинникова', 'Ларионова', 'Беляева', 'Мартынова']
        ]
    ]
}

const playerColors = [['ff0000', 'cc0000'], ['ff7f00', 'cc6600'], ['ffd700', 'cca800'], ['32cd32', '28a428'], ['00bfff', '0099cc'], ['1e90ff', '1873cc'], ['8a2be2', '6e22b5'], ['ff69b4', 'cc5490'], ['40e0d0', '33b3a6'], ['dc143c', 'b01030'], ['daa520', 'ae841a'], ['9acd32', '7ba428'], ['4b0082', '3c0068'], ['ff7f50', 'cc6640'], ['9932cc', '7a28a3'], ['00ffff', '00cccc'], ['7fff00', '66cc00'], ['da70d6', 'ae5aab'], ['ff4500', 'cc3700'], ['00ff7f', '00cc66'], ['6a5acd', '5548a4'], ['ff8c00', 'cc7000'], ['e75480', 'b94366'], ['007ff0', '0066c0']];

const skins = [
    { title: 'Куб', slug: 'cube', type: 'div', colors: { bg: null, border: null } },
    { title: 'Призрак', slug: 'ghost', type: 'img', colors: { bg: 'f0555a', border: 'e54149' } },
    { title: 'Суши', slug: 'sushi', type: 'img', colors: { bg: '53d47d', border: '4fa867' } },
    { title: 'Танк', slug: 'tank', type: 'img', colors: { bg: '81ae5e', border: '6d904f' } },
    { title: 'Деньги', slug: 'money', type: 'img', colors: { bg: '7dc69d', border: '5da77a' } },
    { title: 'Миньон', slug: 'minion', type: 'img', colors: { bg: 'ffe78c', border: 'dfc579' } },
    { title: 'Пчела', slug: 'bee', type: 'img', colors: { bg: 'ffe78c', border: 'ffdb5c' } },
    { title: 'Корова', slug: 'cow', type: 'img', colors: { bg: '79655c', border: '60524b' } },
    { title: 'Утка', slug: 'duck', type: 'img', colors: { bg: 'feda7d', border: 'e3b771' } },
    { title: 'Свинья', slug: 'pig', type: 'img', colors: { bg: 'ffe0ea', border: 'ffbed9' } },
    { title: 'Овца', slug: 'sheep', type: 'img', colors: { bg: 'ffffff', border: 'f2f2f2' } },
];

function generateUsername() {
    const random = Math.floor(Math.random() * 5);

    if (random == 0) {
        const first = nicknames.en[0][Math.floor(Math.random() * nicknames.en[0].length)];
        const second = nicknames.en[1][Math.floor(Math.random() * nicknames.en[1].length)];
        const third = Math.floor(Math.random() * 90) + 10;

        return first + second + third;
    } else if (random == 1) {
        const first = nicknames.ru[0][0][Math.floor(Math.random() * nicknames.ru[0][0].length)];
        const second = nicknames.ru[0][1][Math.floor(Math.random() * nicknames.ru[0][1].length)];

        return first + ' ' + second;
    } else if (random == 2) {
        const first = nicknames.ru[1][0][Math.floor(Math.random() * nicknames.ru[1][0].length)];
        const second = nicknames.ru[1][1][Math.floor(Math.random() * nicknames.ru[1][1].length)];

        return first + ' ' + second;
    } else if (random == 3) {
        const first = 'Гость'
        const second = Math.floor(Math.random() * 900) + 100;

        return first + ' ' + second;
    } else if (random == 4) {
        const first = 'Guest'
        const second = Math.floor(Math.random() * 900) + 100;

        return first + ' ' + second;
    }
}

function drawMap() {
    requestAnimationFrame(() => {
        gameField.textContent = '';
    
        map.forEach((line, y) => {
            const row = document.createElement('div');

            row.classList.add('line');
    
            line.forEach((cell, x) => {
                const square = document.createElement('div');
    
                square.dataset.x = x;
                square.dataset.y = y;
    
                square.classList.add('cell');

                row.appendChild(square);
            });
    
            gameField.appendChild(row);
        });
    });
}

function getCell(x, y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
}

function checkPlayer(x, y) {
    return players.some(entity => entity.x == x && entity.y == y);
}

function checkBorders(x, y) {
    return y > 0 && y < mapHeight && x > 0 && x < mapWidth;
}

function findValidCells() {
    const validCells = [];

    for (let y = 1; y < mapHeight - 1; y++) {
        for (let x = 1; x < mapWidth - 1; x++) {
            let areaIsCompletelyFree = true;

            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    const checkX = x + dx;
                    const checkY = y + dy;

                    const checkCell = map[checkY][checkX];
                    
                    if (checkPlayer(checkX, checkY) || !(checkCell[0] == cellDefaultHP && checkCell[1] == 0 && checkCell[2] == false)) {
                        areaIsCompletelyFree = false;
                        break;
                    }
                }

                if (!areaIsCompletelyFree) {
                    break;
                }
            }

            if (areaIsCompletelyFree) {
                validCells.push({x, y});
            }
        }
    }

    return validCells;
}

function getRandomPlayerColor() {
    return playerColors[Math.floor(Math.random() * playerColors.length)];
}

function createEntity(nickname, level, skin) {
    const playerID = players.length + 1;
    const playerLevel = level - 1;

    const validCells = findValidCells();
    const cell = validCells[Math.floor(Math.random() * validCells.length)];
    const direction = Math.floor(Math.random() * 4);

    const moveSpeed = moveSpeedDefault - playerLevel * 25;
    const damageSpeed = damageSpeedDefault - playerLevel * 10;

    const damageAttack = Math.floor(damageAttackDefault + playerLevel / 2);
    const captureAttack = Math.floor(captureAttackDefault + playerLevel);
    const healingAttack = Math.floor(healingAttackDefault + playerLevel * 2);

    const entity = {
        id: playerID,
        nickname: nickname,
        skin: skin,
        skinColor: getRandomPlayerColor(),
        x: cell.x,
        y: cell.y,
        direction: { value: direction, last: direction, interval: null },
        level: level,
        speed: { move: moveSpeed, attack: damageSpeed, interval: null },
        damage: { attack: damageAttack, capture: captureAttack, healing: healingAttack },
        captured: [],
        flags: [],
        kills: 0
    }

    players.push(entity);

    return entity;
}

function entityMove(player) {
    const entity = players[player.id - 1];

    clearInterval(entity.direction.interval);

    entity.direction.interval = setInterval(() => {
        const old = { x: entity.x, y: entity.y };

        if (entity.direction.value == 0 && entity.y > 0) {
            if (!checkPlayer(entity.x, entity.y - 1)) {
                entity.y -= 1;
            }
        } else if (entity.direction.value == 1 && entity.y < mapHeight - 1) {
            if (!checkPlayer(entity.x, entity.y + 1)) {
                entity.y += 1;
            }
        } else if (entity.direction.value == 2 && entity.x > 0) {
            if (!checkPlayer(entity.x - 1, entity.y)) {
                entity.x -= 1;
            }
        } else if (entity.direction.value == 3 && entity.x < mapWidth - 1) {
            if (!checkPlayer(entity.x + 1, entity.y)) {
                entity.x += 1;
            }
        }

        drawCell(old.x, old.y);
        drawEntity(entity);

        if (player.id == 1) {
            centerOffset();
        }
    }, entity.speed.move);
}

function editEntityDirection(entity, direction) {
    players[entity.id - 1].direction.value = direction;
    players[entity.id - 1].direction.last = direction;

    entityMove(entity);
}

function entityAttack(entityID) {
    const entity = players[entityID - 1];

    const level = entity.level;
    const pos = { x: entity.x, y: entity.y };
    const cell = map[pos.y][pos.x];

    if (cell[1] == entityID) {
        cell[0] += level;
    } else {
        cell[0] -= level;

        if (cell[0] < cellMinHP) {
            capture(entity, pos.x, pos.y);
        }
    }

    drawCell(pos.x, pos.y);
    drawEntity(entity);
}

function capture(entity, x, y) {
    players[entity.id - 1].captured.push([x, y]);
    map[y][x][1] = entity.id;
}

function generateFlag(entity, x, y) {
    const cell = getCell(x, y);
    cell.classList.add('flag');

    players[entity.id - 1].flags.push([x, y]);
}

function generateRadius(entity) {
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const newX = entity.x + dx;
            const newY = entity.y + dy;

            if (newY >= 0 && newY < mapHeight && newX >= 0 && newX < mapWidth) {
                map[newY][newX][0] = cellMinHP;

                if (dx == 0 && dy == 0) {
                    map[newY][newX][2] = true;
                    generateFlag(entity, newX, newY);
                }

                capture(entity, newX, newY);
                drawCell(newX, newY);
            }
        }
    }
}

function generatePlayers() {
    for (let index = 0; index < maxPlayers; index++) {
        let nickname = 'Игрок';

        if (index != 0) {
            nickname = generateUsername();
        }

        const entity = createEntity(nickname, 1, Math.floor(Math.random() * skins.length));

        drawEntity(entity);
        generateRadius(entity);
        entityMove(entity);
    }
}

function drawCellShadows(x, y) {
    const cell = getCell(x, y);
    const player = map[y][x][1] - 1;
        
    if (player >= 0) {
        const shadows = [];

        const borderColor = skins[players[player].skin].type == 'img' ? `#${skins[players[player].skin].colors.border}` : `#${players[player].skinColor[1]}`;

        if (y == 0 || (y > 0 && map[y - 1][x][1] !== player + 1)) {
            shadows.push(`inset 0 4px 0 0 ${borderColor}`);
        }
        
        if (y == mapHeight - 1 || (y < mapHeight - 1 && map[y + 1][x][1] !== player + 1)) {
            shadows.push(`inset 0 -4px 0 0 ${borderColor}`);
        }
        
        if (x == 0 || (x > 0 && map[y][x - 1][1] !== player + 1)) {
            shadows.push(`inset 4px 0 0 0 ${borderColor}`);
        }
        
        if (x == mapWidth - 1 || (x < mapWidth - 1 && map[y][x + 1][1] !== player + 1)) {
            shadows.push(`inset -4px 0 0 0 ${borderColor}`);
        }
        
        cell.style.boxShadow = shadows.join(', ');
    }
}

function drawCell(x, y) {
    const cell = getCell(x, y);
    const player = map[y][x][1] - 1;

    if (player >= 0) {
        cell.classList.add('captured');

        if (skins[players[player].skin].type == 'img') {
            cell.style.background = `#${skins[players[player].skin].colors.bg}`;
        } else {
            cell.style.background = `#${players[player].skinColor[0]}`;
        }
        
        drawCellShadows(x, y);

        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (y + dy >= 0 && y + dy < mapHeight && x + dx >= 0 && x + dx < mapWidth) {
                    drawCellShadows(x + dx, y + dy);
                }
            }
        }
    }

    cell.textContent = '';
}

function drawEntity(entity) {
    const cell = getCell(entity.x, entity.y);
    const entityElement = document.createElement('div');

    entityElement.classList.add('player');

    if (skins[entity.skin].type == 'img') {
        entityElement.style.background = `url('images/skins/${skins[entity.skin].slug}.png') center / cover no-repeat`;
    } else {
        entityElement.style.background = `#${entity.skinColor[0]}`;
    }

    cell.innerHTML = '';

    drawEntityInfo(entity);

    cell.appendChild(entityElement);
}

function drawEntityInfo(entity) {
    const cell = getCell(entity.x, entity.y);

    const infoElement = document.createElement('div');
    const nicknameElement = document.createElement('span');
    const levelElement = document.createElement('span');

    infoElement.classList.add('info');
    nicknameElement.classList.add('nickname');
    levelElement.classList.add('level');

    nicknameElement.textContent = entity.nickname;
    levelElement.textContent = entity.level;

    nicknameElement.appendChild(levelElement);
    infoElement.appendChild(nicknameElement);
    cell.appendChild(infoElement);
}

function startAttack(entityID) {
    const entity = players[entityID - 1];

    if (entity.direction.interval) {
        clearInterval(entity.direction.interval);
        entity.direction.interval = null;
    }
    
    if (entity.speed.interval) {
        clearInterval(entity.speed.interval);
        entity.speed.interval = null;
    }
    
    entity.speed.interval = setInterval(() => {
        entityAttack(entityID);
    }, entity.speed.attack);
    
    entityAttack(entityID);
}

function stopAttack(entityID) {
    const entity = players[entityID - 1];

    if (entity.speed.interval) {
        clearInterval(entity.speed.interval);
        entity.speed.interval = null;
    }
    
    entity.direction.value = entity.direction.last;

    entityMove(entity);
}

function swipe() {
    const touch = { startX: 0, startY: 0, lastX: 0, lastY: 0, startTime: 0, isSwiping: false, longPressTimer: null, isLongPress: false };

    gameSwipe.addEventListener('touchstart', (event) => {
        event.preventDefault();
        
        touch.startX = event.touches[0].clientX;
        touch.startY = event.touches[0].clientY;
        touch.lastX = touch.startX;
        touch.lastY = touch.startY;
        touch.startTime = Date.now();
        touch.isSwiping = true;
        touch.isLongPress = false;
        
        touch.longPressTimer = setTimeout(() => {
            if (touch.isSwiping) {
                touch.isLongPress = true;
                startAttack(1);
            }
        }, minTouchTime);
    }, { passive: false });

    gameSwipe.addEventListener('touchmove', (event) => {
        event.preventDefault();
        
        if (touch.isSwiping) {
            touch.lastX = event.touches[0].clientX;
            touch.lastY = event.touches[0].clientY;
            
            const deltaX = Math.abs(touch.lastX - touch.startX);
            const deltaY = Math.abs(touch.lastY - touch.startY);
            
            if (deltaX > 10 || deltaY > 10) {
                if (touch.longPressTimer) {
                    clearTimeout(touch.longPressTimer);
                    touch.longPressTimer = null;
                }
            }
        }
    }, { passive: false });

    gameSwipe.addEventListener('touchend', (event) => {
        event.preventDefault();

        if (touch.longPressTimer) {
            clearTimeout(touch.longPressTimer);
            touch.longPressTimer = null;
        }

        if (touch.isSwiping && touch.isLongPress) {
            stopAttack(1);
        }

        if (touch.isSwiping && !touch.isLongPress) {
            const endX = event.changedTouches[0].clientX;
            const endY = event.changedTouches[0].clientY;
            const endTime = Date.now();
            
            handleSwipe(touch.startX, touch.startY, endX, endY, touch.startTime, endTime);
        }

        touch.isSwiping = false;
    }, { passive: false });

    gameSwipe.addEventListener('mousedown', (event) => {
        event.preventDefault();

        touch.startX = event.clientX;
        touch.startY = event.clientY;
        touch.lastX = touch.startX;
        touch.lastY = touch.startY;
        touch.startTime = Date.now();
        touch.isSwiping = true;
        touch.isLongPress = false;
        
        touch.longPressTimer = setTimeout(() => {
            if (touch.isSwiping) {
                touch.isLongPress = true;
                startAttack(1);
            }
        }, minTouchTime);
    });

    gameSwipe.addEventListener('mousemove', (event) => {
        if (touch.isSwiping) {
            event.preventDefault();

            touch.lastX = event.clientX;
            touch.lastY = event.clientY;
            
            const deltaX = Math.abs(touch.lastX - touch.startX);
            const deltaY = Math.abs(touch.lastY - touch.startY);
            
            if (deltaX > 10 || deltaY > 10) {
                if (touch.longPressTimer) {
                    clearTimeout(touch.longPressTimer);
                    touch.longPressTimer = null;
                }
            }
        }
    });

    gameSwipe.addEventListener('mouseup', (event) => {
        event.preventDefault();
        
        if (touch.longPressTimer) {
            clearTimeout(touch.longPressTimer);
            touch.longPressTimer = null;
        }

        if (touch.isSwiping && touch.isLongPress) {
            stopAttack(1);
        }
        
        if (touch.isSwiping && !touch.isLongPress) {
            handleSwipe(touch.startX, touch.startY, event.clientX, event.clientY, touch.startTime, Date.now());
        }

        touch.isSwiping = false;
    });

    gameSwipe.addEventListener('mouseleave', (event) => {
        if (touch.longPressTimer) {
            clearTimeout(touch.longPressTimer);
            touch.longPressTimer = null;
        }

        if (touch.isSwiping && touch.isLongPress) {
            stopAttack(1);
        }
        
        if (touch.isSwiping && !touch.isLongPress) {
            handleSwipe(touch.startX, touch.startY, touch.lastX, touch.lastY, touch.startTime, Date.now());
        }

        touch.isSwiping = false;
    });
}

function handleSwipe(startX, startY, endX, endY, startTime, endTime) {
    const timeDifference = endTime - startTime;
    
    if (timeDifference <= maxSwipeTime) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);
        
        if (absDeltaX > minSwipeDistance || absDeltaY > minSwipeDistance) {
            if (absDeltaX > absDeltaY) {
                if (deltaX > 0) {
                    editEntityDirection(players[0], 3);
                } else {
                    editEntityDirection(players[0], 2);
                }
            } else {
                if (deltaY > 0) {
                    editEntityDirection(players[0], 1);
                } else {
                    editEntityDirection(players[0], 0);
                }
            }
        }
    }
}

function centerOffset() {
    const playerCell = getCell(players[0].x, players[0].y);
    
    for (let index = 0; index < 2; index++) {
        const containerRect = gameField.getBoundingClientRect();
        const cellRect = playerCell.getBoundingClientRect();
        
        const playerCenterX = cellRect.left + cellRect.width / 2;
        const playerCenterY = cellRect.top + cellRect.height / 2;

        const offsetX = (containerRect.width / 2) - (playerCenterX - containerRect.left);
        const offsetY = (containerRect.height / 2) - (playerCenterY - containerRect.top);

        gameBelow.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${mapZoom})`;
    }
}

function startGame() {
    drawMap();

    requestAnimationFrame(() => {
        generatePlayers();

        setTimeout(() => {
            centerOffset();
        }, 50);
    });

    swipe();
}

startGame();