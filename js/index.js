//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
		'quote': 'Most of modern life, all our diseases, are diseases of abundance, not diseases of scarcity.',
		'author': 'Naval Ravikant',
	},
	{
		'quote': 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		'author': 'Emil Cioran',
	},
	{
		'quote': 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		'author': 'Emil Cioran',
	},
	{
		'quote': 'If you wish to make an apple pie from scratch, you must first invent the universe',
		'author': 'Carl Sagan',
	},
	{
		'quote': 'As you walk down the fairway of life you must smell the roses, for you only get to play one round.',
		'author': 'Ben Hogan',
	},
	{
		'quote': 'The art of life is to know how to enjoy a little and to endure very much.',
		'author': 'William Hazlitt',
	},
	{
		'quote': 'Write books only if you are going to say in them the things you would never tell anyone',
		'author': 'Emil Cioran',
	},
	{
		'quote': "I'm telling you it is going to be easy. I'm telling you it is going to be worth it.",
		'author': 'Art Williams',
	},
	{
		'quote': "Don't focus on the pain, Focus on the Progress.",
		'author': 'Dwayne Johnson',
	},
	{
		'quote': "It always seems impossible until it's done.",
		'author': 'Nelson Mandela',
	},
	{
		'quote': "Everything is hard before it is easy.",
		'author': 'Johann Wolfgang von Goethe',
	},
	{
		'quote': 'Work hard in silence. Let your success be noise.',
		'author': 'Frank Ocean',
	},
	{
		'quote': "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
		'author': 'Oscar Wilde',
	},
	{
		'quote': 'Maybe it’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.',
		'author': 'Anna White',
	},
	{
		'quote': "I've had the sort of day that would make St. Francis of Assisi kick babies.",
		'author': 'JDouglas Adams',
	},
	{
		'quote': "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
		'author': 'Jim Rohn',
	},
	{
		'quote': 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		'author': 'Thomas Edison',
	},
	{
		'quote': 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		'author': 'Thomas Edison',
	},
	{
		'quote': 'You can observe a lot just by watching.',
		'author': 'Yogi Berra',
	},
	{
		'quote': 'A house divided against itself cannot stand.',
		'author': 'Abraham Lincoln',
	},
	{
		'quote': 'Difficulties increase the nearer we get to the goal.',
		'author': 'Johann Wolfgang von Goethe',
	},
	{
		'quote': 'Fate is in your hands and no one elses',
		'author': 'Byron Pulsifer',
	},
	{
		'quote': "Be worthy of the people and things you get in your life.",
		'author': "Sulabh Bashyal",
	},
	{
		'quote': "Without music, life would be a mistake.",
		'author': "Friedrich Nietzsche",
	},
	{
		'quote': "A question that sometimes drives me hazy: am I or are the others crazy?",
		'auquotethor': "Albert Einstein",
	},
	{
		'quote': "We are surrounded by story.",
		'author': "Alice McDermott",
	},
	{
		'quote': "The past beats inside me like a second heart.",
		'author': "John Banville",
	},


];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
