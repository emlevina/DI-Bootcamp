const axios = require('axios');

const fetchUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.data
    } catch (error) {
        console.log(err)
    }
}



module.exports = { fetchUsers }