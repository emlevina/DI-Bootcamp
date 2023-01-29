// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.

let createCalendar = (year, month) => {
    const days = [
        'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'
    ]
    
    let date = new Date(year, month, 0);
    let amountOfDays = date.getDate()
    let firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1)
    let firstDayOfWeek = (firstDayDate.getDay() + 6) % 7 // move 0 index from Sun to Mon
    let amountOfWeeks = (0 | (amountOfDays + firstDayOfWeek - 1) / 7) + 1

    let div = document.querySelector('div')
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    let title = document.createElement('h1')
    let titleText = document.createTextNode(`${date.toLocaleString('default', { month: 'long' })} of ${year}`)
    title.append(titleText)

    // create header
    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th')
        let text = document.createTextNode(days[i])
        th.append(text)
        thead.append(th)
    }

    // create draft table
    for (let i = 1; i <= amountOfWeeks; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < 7; j++) {
            let td = document.createElement('td')
            let text = document.createTextNode('.')
            td.append(text)
            tr.append(td)
        }
        tbody.append(tr)
    }

    table.append(thead)
    table.append(tbody)
    div.append(title)
    div.appendChild(table)

    // iterate over tds to change them to correct dates
    let allTd = document.querySelectorAll('td')
    for (let i = 0; i < amountOfDays; i++) {
        allTd[i + firstDayOfWeek].innerText = i + 1
    }
}

let month = prompt('Enter month')
let year = prompt('Enter year')
if(Number(month) && Number(year)){
    createCalendar(Number(year), Number(month))
} else {
    alert('You didn\'t enter correct dates')
}