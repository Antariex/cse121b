document.addEventListener('DOMContentLoaded', function () {
    const inspireButton = document.querySelector('.inspireme');
    const quotesContainer = document.getElementById('quotes');

    inspireButton.addEventListener('click', function () {
        fetch('https://run.mocky.io/v3/a8033573-2450-47d3-b059-81bdbb947e70')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];

                quotesContainer.innerHTML = '';

                const quoteElement = document.createElement('div');
                quoteElement.classList.add('quotes');

                quoteElement.innerHTML = `
                    <img class="quote-image" src="${randomQuote.image}" alt="${randomQuote.author}" title="${randomQuote.author}">
                    <p class="quote-text">${randomQuote.quote}</p>
                    <p class="quote-author">${randomQuote.author}</p>
                    <p class="quote-topic"><strong>Topic:</strong> ${randomQuote.topic}</p>
                `;

                quotesContainer.appendChild(quoteElement);

                quotesContainer.style.display = 'block';
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
