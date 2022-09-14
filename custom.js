const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// on click it will give us a new joke 
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}

// first in function generateJoke() for understanding it we use 
// fech('https://icanhazdadjoke.com', config)
// res is we for (request)
// .then((res) => res.json())
// .then((data) => console.log(data))