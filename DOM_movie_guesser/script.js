const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

var i = 0;

const input = document.getElementById('input');
const submit = document.getElementById('submit'); 
const hint = document.getElementById('hint');
const movieText = document.getElementById('movie-text');
const card = document.getElementById('card');
const cardElement = document.createElement('div');

movieText.innerHTML = movies[i].explanation;
cardElement.classList.add('alert');

submit.addEventListener('click', (event) => {

    if (input.value == movies[i].title) {
        cardElement.classList.add('alert-success');
        cardElement.innerHTML = "You guessed correctly the movie was " +  movies[i].title;

        input.value = '';
        i++;
        movieText.innerHTML = movies[i].explanation;
    } else {
        cardElement.classList.add('alert-danger'); 
        cardElement.innerHTML = "You guessed incorrectly the movie was " +  movies[i].title;

        input.value = '';
        i++;
        movieText.innerHTML = movies[i].explanation;
    }
    card.appendChild(cardElement);
});

hint.addEventListener('click', (event) => {
    cardElement.classList.add('alert-info');
    cardElement.innerHTML = movies[i].hint;
    card.appendChild(cardElement);
});