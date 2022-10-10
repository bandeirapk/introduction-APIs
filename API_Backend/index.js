const express = require('express')
const axios = require('axios')

const app = express()

app.listen(3000)

app.route('/').get( (req, res) => {
    axios
        .get("https://api.github.com/users/bandeiramgn")
        .then( (result) => res.send(`<img src=${result.data.avatar_url} />`) )
        .catch( (err) => console.error(err) )
})

// Importação da express para usar a API
// const express = require('express') // Fazendo a requisição do módulo do Express
// const app = express(); // Inicializando a constante e passando para outra variável

// app.listen('3000')                  // Acesso os "metódos" do express

// app.route('/').get( (req, res) => res.send(req.query))

// {
//     app.route('/').get((req, res) => res.send("Hello"))

//     app.route('/:name').get((req, res) => res.send(req.params.name))

//     app.route('/name/:name').get((req, res) => res.send(req.params.name))
// }

// app.use(express.json())

// app.route('/').post( (req, res) => {
//     const {name, city} = req.body
//     res.send(`Meu nome é ${name} e moro em ${city}`)
// })

// {
// let author = "Antonio"

// app.route('/:id').delete( (req, res) => {
//     author = ""
//     res.send(req.params.id) 
// })
// }
// { // PUT
//     app.use(express.json())

//     let author = "Bandeira Magalhães"

//     app.route('/').get((req, res) => { res.send(author) })

//     app.route('/').put((req, res) => {
//         author = req.body.author
//         res.send(author)
//     }
// // PUT == editar informações
// }
// {// Middleware -> Faz uma ponte entre as requisições, primeiro passa por aqui depois vai executar o que vier depois.
// app.use(express.json())

// app.route('/').post( (req, res) => res.send(req.body) )
// }

// METÓDO GET -> app.route('/').get( (req, res) => res.send("hello world!") )  // Passando qual a rota que meu app deve percorrer usando o route() e passando uma requisição e uma resposta como argumento