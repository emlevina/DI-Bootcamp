const createUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    fetch('/user', {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formDataObj)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}