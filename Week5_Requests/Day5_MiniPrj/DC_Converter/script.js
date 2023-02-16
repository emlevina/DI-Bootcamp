const currencies = {
    "USD": "United States Dollar",
    "EUR": "Euro",
    "ILS": "Israeli New Sheqel",
    "AED": "United Arab Emirates Dirham",
    "AMD": "Armenian Dram",
    "AUD": "Australian Dollar",
    "BTC": "Bitcoin",
    "CAD": "Canadian Dollar",
    "CHF": "Swiss Franc",
    "EGP": "Egyptian Pound",
    "JPY": "Japanese Yen",
    "MAD": "Moroccan Dirham",
    "MNT": "Mongolian Tugrik",
    "MXN": "Mexican Peso",
    "NGN": "Nigerian Naira",
    "NZD": "New Zealand Dollar",
    "PKR": "Pakistani Rupee",
    "RUB": "Russian Ruble",
    "TRY": "Turkish Lira",
    "UAH": "Ukrainian Hryvnia",
}

const renderOptions = () => {
    const to = document.getElementById('to')
    const from = document.getElementById('from')
    for(let curr in currencies){
        const option = document.createElement('option')
        option.setAttribute('value', curr)
        option.append(currencies[curr])
        to.append(option)
        const clone = option.cloneNode(true)
        from.append(clone)
    }
}

const sendRequest = async (to, from, amount) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "eaZ5mZlqArDwh7yk3Rzi82vsRb9xBoJq");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`

    try {
        const response = await fetch(url, requestOptions)
        const result = await response.json()
        return result.result
    } catch (error) {
        console.log('error', error)
    }
}

const retrieveValues = () => {
    const form = document.forms[0].elements
    const from = form.from.value
    const to = form.to.value
    const amount = +form.amount.value
    return {from, to, amount}
}

const createLoader = () => {
    const p = document.createElement('p')
    p.textContent = 'waiting'
    p.classList.add('loader')
    return p
}

const convert = async (e) => {
    e.preventDefault()
    const {from, to, amount} = retrieveValues()
    const output = document.getElementById('output')
    output.append(createLoader())
    const result = await sendRequest(to, from, amount)
    const h2 = document.createElement('h2')
    h2.append(result)
    output.innerHTML = ''
    output.append(h2)
}

renderOptions()

document.addEventListener('submit', convert)