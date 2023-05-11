const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon')
//middleware
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//routes
// Index : Show all the things! - GET /pokemons
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res) =>{
    res.render('Index',{pokemons: pokemon})
})
// New : An empty form for a new thing - GET /fruits/new
// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits
// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id (edited) 
app.get('/pokemon/:id', (req, res) =>{
    res.render('Show',{pokemon:pokemon[req.params.id]})
})
//listening 
app.listen(port, () =>{
    console.log(`Listening on port, ${port}`)
})