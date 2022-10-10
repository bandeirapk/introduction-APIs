const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then((response) => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch((err) => console.error(err))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch((err) => console.error(err))
}

function addNewUser(newUser) {
    axios.post(url, newUser)     // Pega dados e envia para a API
        .then(response => console.log(response))
        .catch((err) => console.error(err))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch((err) => console.error(err))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .error((err) => console.error(err))
}

getUsers()
getUser(2)

const newUser = {
    "name": "Antonio Bandeira",
    "avatar": "https://source.unsplash.com/random",
    "city": "Quixadá"
}
//addNewUser()

const userUpdated = {
    name: "Alex devoso",
    avatar: "https://source.unsplash.com/random",
    city: "Redenção"
}

// updateUser(2, userUpdated)

deleteUser(4)