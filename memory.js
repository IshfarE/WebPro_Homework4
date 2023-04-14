const cardStorage = [
	{
		'name': 'red',
		'img': 'red.png',
	},
	{
		'name': 'oraqnge',
		'img': 'orange.png',
	},
	{
		'name': 'yellow',
		'img': 'yellow.png',
	},
	{
		'name': 'green',
		'img': 'green.png',
	},
	{
		'name': 'cyan',
		'img': 'cyan.png',
	},
	{
		'name': 'blue',
		'img': 'blue.png',
	},
	{
		'name': 'purple',
		'img': 'purple.png',
	},
	{
		'name': 'pink',
		'img': 'pink.png',
	},
];

const gameGrid = cardStorage.concat(cardStorage).sort(() => 0.5 - Math.random());

let guess1 = guess2 = '', picks = 0, previousTarget = null, determinant = 500;

playGame = document.getElementById('game'), grid = document.createElement('section');
grid.setAttribute('class', 'grid');
playGame.appendChild(grid);

gameGrid.forEach(item => {let {name, img} = item;

	card = document.createElement('div');
	card.classList.add('card');
	card.dataset.name = name;

	cover = document.createElement('div');
	cover.classList.add('front');

	reveal = document.createElement('div');
	reveal.classList.add('back');
	reveal.style.backgroundImage = `url(${img})`;

	grid.appendChild(card);
	card.appendChild(cover);
	card.appendChild(reveal);
});

const correct = () => {picked = document.querySelectorAll('.selected');
	picked.forEach(card => {card.classList.add('match');
	});
}, incorrect = () => {guess1 = guess2 = '';
	picks = 0;
	previousTarget = null;
	picked = document.querySelectorAll('.selected');
	picked.forEach(card => {card.classList.remove('selected');
	});
};

grid.addEventListener('click', event => {const clicked = event.target;

	if (clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) 
	{
		return;
	}
	if (picks <= 1) 
	{
		picks++;
		if (picks == 1) 
		{
			guess1 = clicked.parentNode.dataset.name;
			console.log(guess1);
			clicked.parentNode.classList.add('selected');
		} 
		else 
		{
			guess2 = clicked.parentNode.dataset.name;
			console.log(guess2);
			clicked.parentNode.classList.add('selected');
		}

		if (guess1 && guess2) 
		{
			if (guess1 == guess2) 
			{
				setTimeout(correct, determinant);
			}
			setTimeout(incorrect, determinant);
		}
		previousTarget = clicked;
	}
});