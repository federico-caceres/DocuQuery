const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('public'));

// Configurar el motor de vistas Handlebars con extensión .hbs
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Ruta de inicio
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/chat-rossi', (req, res) => {
    res.render('chat-rossi');
});
app.get('/chat-oca', (req, res) => {
    res.render('chat-oca');
});

// Puerto para el servidor
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
