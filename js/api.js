var urlCrytpData = 'https://api.coinlore.net/api/tickers/';

var urlCurrencyExchange = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'

var coinsData = [];
var pageSize = 10;
var currentPage = 1;


// Render Table

async function renderTable(currentPage) {
    await getData()


    if (currentPage==1) {
        document.querySelector('#prevButton').style.visibility = 'hidden'
    } else {
        document.querySelector('#prevButton').style.visibility = 'visible'
    }

    if (currentPage== numberOfPages()) {
        document.querySelector('#nextButton').style.visibility = 'hidden'
    } else {
        document.querySelector('#nextButton').style.visibility = 'visible'
    }

    // create HTML Table DATA
    var crytoCoin = ''

    coinsData.filter((row, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;

        if (index >= start && index < end) return true;
    }).forEach(coin => {

        crytoCoin += `
            <tr>
            <td>'${coin.rank}'</td>
            <td>'${coin.symbol}'</td>
            <td>'${coin.name}'</td>
            <td>'${Math.round(coin.price_usd)}'</td>
            <td>'${coin.tsupply}'</td>
            </tr>
            `;
    })

    document.querySelector('#teble-id').innerHTML = crytoCoin.replace(/["']/g, '');
}

renderTable(currentPage);

// Go to previous page

function previousPage() {
    if (currentPage > 1)
        currentPage--;
    renderTable(currentPage)
}

document.querySelector('#prevButton').addEventListener('click', previousPage, false)

// Go to next page

function nextPage() {
    if ((currentPage * pageSize) < coinsData.length) 
        currentPage++;
    renderTable(currentPage)
}

document.querySelector('#nextButton').addEventListener('click', nextPage, false)

function hideNextPage() {

}

document.querySelector('#nextButton').addEventListener('click', hideNextPage, false)

// Select how many Table rows

function getOption () {
    let optionValue = document.getElementById('option').value;
    if(optionValue)
        pageSize = optionValue;
    renderTable(currentPage)
}

document.querySelector('#option').addEventListener('click', getOption, false)

// Get number of page and return integer

function numberOfPages() {
    return Math.ceil(coinsData.length / pageSize)
}

// Fetch DATA from REST API

async function getData() {
    const response = await fetch(urlCrytpData);
    const coins = await response.json()
    coinsData = coins.data;

}




