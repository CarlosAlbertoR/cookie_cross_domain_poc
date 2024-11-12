const express = require('express');
const vhost = require('vhost');
const path = require('path');

const app = express();

// Servidor para el subdominio "checkout.localhost"
const checkoutApp = express();
checkoutApp.use(express.static(path.join(__dirname, 'checkout')));
app.use(vhost('checkout.localhost', checkoutApp));

// Servidor para el subdominio "myaccount.localhost"
const myaccountApp = express();
myaccountApp.use(express.static(path.join(__dirname, 'myaccount')));
app.use(vhost('myaccount.localhost', myaccountApp));

// Servidor principal
app.get('/', (req, res) => {
    res.send('Servidor principal');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});