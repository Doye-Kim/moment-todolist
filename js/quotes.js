const quotes = [
	{
		quote: 'When you believe in a thing, believe in it all the way, implicitly and unquestionable.',
		author: '- Walt Disney',
	},
	{
		quote: 'Some people are worth melting for.',
		author: '- Frozen(Olaf)',
	},
	{
		quote: 'If you focus on what you left behind, you will never see what lies ahead.',
		author: '- Ratatouille',
	},
	{
		quote: 'You cannot be happy every day. But there are happy things every day.',
		author: '- Winnie the Pooh',
	},
	{
		quote: 'To love someone, you have to love yourself first.',
		author: '- Beauty and the Beast',
	},
	{
		quote: 'Share your gift with the world. Who knows how many lives you are saving just by doing so.',
		author: '- Kung Fu Panda',
	},
	{
		quote: 'Anyone can be anything.',
		author: '- Zootopia',
	},
	{
		quote: 'Don’t close your eyes. Look! The reality of fear can be different than you think.',
		author: '- Finding Nemo',
	},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;