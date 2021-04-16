
const playerNum = Math.floor((Math.random() * 11) + 1);
const playerNumTwo = Math.floor((Math.random() * 11) + 1);
const comNum = Math.floor((Math.random() * 11) + 1);


const blackJack = {
	const playerCardOne = playerNum;
	const playerCardTwo = playerNumTwo;
	
	const comCardOne = comNum;
	const comCardTwo = comNum;
    let playerHand = playerCardOne + playerCardTwo;
	let comHand = comCardOne + comCardTwo;
	let comCardTotal = comCardOne + comCardTwo;
    let playerCardTotal = playerCardOne + playerCardTwo;

	let showPlayerHand = (playerCardOne + ', ' + playerCardTwo);
    let showComHand = (comCardOne + ', ' + comCardTwo);

console.log(showPlayerHand);
console.log(playerCardTotal);
console.log(showComHand);
console.log(comCardTotal);
};