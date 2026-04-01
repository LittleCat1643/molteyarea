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

const playersElement = document.querySelector('.scenes > .matchmaking > .layout > .count > h3 > span');
const membersElement = document.querySelector('.scenes > .matchmaking > .layout > .members');
const exitButton = document.querySelector('.scenes > .matchmaking > .footer > .exit > button');

let timeouts = [];

exitButton.addEventListener('click', () => {
    switchScene(homeScene);
    stopMatchmaking();
});

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

function generatePlayer() {
    return [generateUsername(), Math.floor(xp + (Math.random() < 0.5 ? -(Math.floor(Math.random() * xp) / 3) : (Math.floor(Math.random() * xp) / 2)))];
}

function pushPlayer(nickname, xp, me) {
    const playerElement = document.createElement('div');
    const nicknameElement = document.createElement('div');
    const rankElement = document.createElement('div');

    playerElement.classList.add('player');
    nicknameElement.classList.add('nickname');
    rankElement.classList.add('rank');

    if (me) {
        playerElement.classList.add('me');
    }

    const findNextBorder = (number) => {
        const borders = rankBorders();
        const index = borders.findIndex(border => border > number);
        
        return { nextBorder: borders[index], currentBorder: index > 0 ? borders[index - 1] : 0, index: index };
    };

    const { nextBorder, currentBorder, index } = findNextBorder(xp);

    nicknameElement.innerHTML = nickname;

    rankElement.appendChild(getRankSymbol(index));
    playerElement.appendChild(nicknameElement);
    playerElement.appendChild(rankElement);
    membersElement.appendChild(playerElement);
}

function startMatchmaking() {
    players = [];
    timeouts = [];

    let playersCount = Math.floor(Math.random() * 9) + 1;
    let timeoutCount = 1;

    playersElement.textContent = playersCount;

    for (let index = 0; index < playersCount - 1; index++) {
        players.push(generatePlayer());
        pushPlayer(players[index][0], players[index][1], false);
    }

    players.push(['Игрок', xp]);
    pushPlayer('Игрок', xp, true);

    for (let index = playersCount; index < 10; index++) {
        const timeoutId = setTimeout(() => {
            let player = generatePlayer();

            players.push(player);
            playersCount += 1;

            playersElement.textContent = playersCount;

            pushPlayer(player[0], player[1], false);
        }, Math.floor(Math.random() * 10000) + 1 * timeoutCount * Math.floor(xp / 250));

        timeouts.push(timeoutId);
        timeoutCount += 1;
    }

    const waiting = setInterval(() => {
        if (players.length >= 10) {
            exitButton.classList.add('disabled');
            clearInterval(waiting);

            setTimeout(() => {
                switchScene(loadingScene);
                stopMatchmaking();
                startLoading(players);
            }, 1500);
        }
    });
}

function stopMatchmaking() {
    timeouts.forEach(timeoutId => clearTimeout(timeoutId));
    timeouts = [];
    
    playersElement.textContent = 0;
    membersElement.textContent = '';
}