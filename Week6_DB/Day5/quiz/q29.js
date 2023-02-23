// Retrieve the data from a form (you can use new FormData), and send this data to this API : `https://jsonplaceholder.typicode.com/posts`. 
//     * The server will send you back some dummy data that you will display on the DOM.
//     * Use the documentation of the API : https://jsonplaceholder.typicode.com/guide/
//     * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
//     * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/

const sendData = async (e) => {
    e.preventDefault()
    const form = document.forms[0];
    const formData = new FormData(form)
    let formObj = Object.fromEntries(formData)
    const { title, body } = formObj
    console.log(title, body)
    const id = Math.random() * 10 | 0

    const url = `https://jsonplaceholder.typicode.com/posts`
    try {
        const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        if (result.ok) {
            const data = await result.json()
            displayData(data)
            form.reset()
        } else {
            throw Error
        }
    } catch (error) {
        console.log(error)
    }

}

const displayData = (data) => {
    const output = document.getElementById('output')
    output.append(JSON.stringify(data))
}

document.addEventListener('submit', sendData)