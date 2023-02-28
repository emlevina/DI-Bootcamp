const addItem = (e) => {
    e.preventDefault();
    console.log({item: e.target.item.value, amount: e.target.amount.value});
    fetch('/item', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({item: e.target.item.value, amount: e.target.amount.value})
    })
    .then(res => res.json())
    .then(data => renderItems(data))
    e.target.reset()
    e.target.amount.blur()
}

const renderItems = (arrayOfItems) => {
    const output = document.getElementById('output');
    output.innerHTML = ''
    arrayOfItems.forEach(item => {
        const p = document.createElement('p')
        p.innerHTML = `${item.item} : ${item.amount}`
        output.append(p)
    })
}

const getData = () => {
    fetch('/items')
    .then(res => res.json())
    .then(data => renderItems(data))
}

getData()