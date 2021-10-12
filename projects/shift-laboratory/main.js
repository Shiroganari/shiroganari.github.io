const table = document.getElementById('table');
const titles = document.querySelectorAll('.cell-title');
const result = document.getElementById('result-count')
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    let title = searchInput.value.toLowerCase();
    let titlesCount = 0;

    titles.forEach(function(element) {
        if (element.textContent.toLowerCase().includes(title) && title.length != 0) {
            element.classList.add('active')
            titlesCount++;
        } else {
            element.classList.remove('active')
        }
    })

    if (titlesCount != 0) {
        result.textContent = 'Количество найденных совпадений: ' + titlesCount;
    } else {
        result.textContent = 'Совпадений не найдено'
    }
})
