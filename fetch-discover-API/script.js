const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => result.textContent = JSON.stringify(data))
        .catch(err => console.error(err))
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => { 
        UserName.textContent = data.name
        UserCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}
// POST request
function addUser(newUser) {
    fetch(url,{      // Fecth aceita outros vários argumentos
        method: 'POST', // O padrão do method é o GET, por isso não é passado por padrão.
        body: JSON.stringify(newUser), // Enviando para o corpo da requisição
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })
    .then((response) => {response.json()})
    .then((data) => {alertApi.textContent = data})
    .catch((err) => {console.error(err)})
}

function updateUser(user, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(user), // Dizendo o conteúdo que estou enviando para a API
        headers: { "content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then(data => {alertApi.textContent = data})
    .catch( err => console.error(err))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then(data => {alertApi.textContent = data})
    .catch( err => console.error(err))
}

// // Update
// const userUpdate = {
//     name: "Alex Devoso",
//     avatar: "https://avatars.githubusercontent.com/u/36746185?v=4",
//     city: "Pentecoste"
// }
// updateUser(userUpdate, 2)

//Add
// const newUser = {
//     name: "Antonio Bandeira",
//     avatar: "https://avatars.githubusercontent.com/u/85970097?v=4",
//     city: "Quixadá"
// }
// addUser(newUser)

// Delete
deleteUser(4)

//Gets
getUsers()
getUser(3)