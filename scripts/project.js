document.addEventListener('DOMContentLoaded', function () {
    const inspireButton = document.querySelector('.inspireme');
    const quotesContainer = document.getElementById('quotes');
    const topicsSelect = document.getElementById('filtered');

    inspireButton.addEventListener('click', function () {
        // Obtener un tema seleccionado (si hay alguno)
        const selectedTopic = topicsSelect.value;

        // Obtener datos de la URL
        fetch('https://run.mocky.io/v3/42a21265-3d2c-401a-abf3-66c604966814')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                // Filtrar las citas según el tema
                const filteredQuotes = selectedTopic !== 'default' ?
                    data.filter(quote => quote.topic === selectedTopic) :
                    data;

                // Limpiar contenedor de citas
                quotesContainer.innerHTML = '';

                // Agregar nuevas citas al contenedor
                filteredQuotes.forEach(quote => {
                    const quoteElement = document.createElement('div');
                    quoteElement.classList.add('quote-item');

                    quoteElement.innerHTML = `
                        <img src="${quote.image}" alt="${quote.author}" title="${quote.author}">
                        <p>${quote.quote}</p>
                        <p><strong>Author:</strong> ${quote.author}</p>
                        <p><strong>Topic:</strong> ${quote.topic}</p>
                    `;

                    quotesContainer.appendChild(quoteElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    // Inicializar la lista de citas al cargar la página
    inspireButton.click();
});
