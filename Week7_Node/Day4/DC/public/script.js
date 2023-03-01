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
        .then(res => {
            if (res.status === 200) {
                e.target.reset()
                e.target.password.blur()
            }
            return res.json()
        })
        .then(data => {
            showData(data)
        })
}

const checkPassword = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData.entries())
    fetch(`/user/${email}`, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "password": password
        }
    })
        .then(res => {
            if (res.status === 200) {
                e.target.reset()
                e.target.password.blur()
            }
            return res.json()
        })
        .then(data => {
            showData(data)
        })
}


const showData = (data) => {
    const output = document.getElementById('output')
    output.innerText = data.msg
}