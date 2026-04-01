const rankBorders = () => { let arr = [], step = 250, count = 0; for (let i = 0; i < 30; i++) { arr.push(i === 0 ? 250 : arr[i-1] + step); count++; if (count === 5) { step += 250; count = 0; } } return arr; }
const ranks = ['bronze', 'silver', 'gold', 'diamond', 'mythic', 'legendary', 'master'];

let xp = 0;

function getRankSymbol(points) {
    const symbolElement = document.createElement('div');
    const romanElement = document.createElement('b');

    const getRank = (score) => ranks[Math.min(Math.floor(score / 5), ranks.length - 1)];
    const getRomanNumeral = n => ['I', 'II', 'III', 'IV', 'V'][n % 5];

    symbolElement.classList.add('symbol');

    if (getRank(points) === undefined) {
        symbolElement.classList.add('master');
    } else {
        symbolElement.classList.add(getRank(points));
        romanElement.textContent = getRomanNumeral(points);
    }

    symbolElement.appendChild(romanElement);

    return symbolElement;
}

function loadRank() {
    const findNextBorder = (number) => {
        const borders = rankBorders();
        const index = borders.findIndex(border => border > number);
        
        return { nextBorder: borders[index], currentBorder: index > 0 ? borders[index - 1] : 0, index: index };
    };

    const { nextBorder, currentBorder, index } = findNextBorder(xp);

    const oldSymbol = rankSymbol.querySelector('.symbol');
    const newSymbol = getRankSymbol(index);
    
    if (oldSymbol) {
        rankSymbol.replaceChild(newSymbol, oldSymbol);
    } else {
        rankSymbol.appendChild(newSymbol);
    }

    const xpNeeded = nextBorder - currentBorder;
    const xpProgress = xp - currentBorder;
    
    const progressPercent = (xpProgress / xpNeeded) * 100;
    
    rankBar.style.width = `${progressPercent}%`;
}

function xpUp(count) {
    for (let index = 0; index < count; index++) {
        setTimeout(() => {
            xp += 1;
            loadRank();
        }, (1000 / count) * index);
    }
}