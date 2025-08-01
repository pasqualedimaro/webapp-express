const express = require('express');
const app = express();
const port = process.env.PORT;

const notFound = require('./middlewares/notFound')
const handleError = require('./middlewares/handleError')

const moviesRouter = require('./routers/movies')

app.use(express.static('public'))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('siamo dentro la home');
})

app.use('/movies', moviesRouter)


app.use(handleError);
app.use(notFound);


app.listen(port, () => {
    console.log('in Ascolto')
})
