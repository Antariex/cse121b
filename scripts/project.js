document.addEventListener('DOMContentLoaded', function () {
    const inspireButton = document.querySelector('.inspireme');
    const quotesContainer = document.getElementById('quotes');
    const topicsSelect = document.getElementById('filtered');

    inspireButton.addEventListener('click', function () {
        // Obtener datos de la URL
        fetch('https://run.mocky.io/v3/a8033573-2450-47d3-b059-81bdbb947e70')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                // Obtener una cita aleatoria
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];

                // Limpiar contenedor de citas
                quotesContainer.innerHTML = '';

                // Agregar la cita aleatoria al contenedor
                const quoteElement = document.createElement('div');
                quoteElement.classList.add('quotes');

                quoteElement.innerHTML = `
                    <img class="quote-image" src="${randomQuote.image}" alt="${randomQuote.author}" title="${randomQuote.author}">
                    <p class="quote-text">${randomQuote.quote}</p>
                    <p class="quote-author">${randomQuote.author}</p>
                    <p class="quote-topic"><strong>Topic:</strong> ${randomQuote.topic}</p>
                `;

                quotesContainer.appendChild(quoteElement);

                // Mostrar el contenedor de citas
                quotesContainer.style.display = 'block';
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
