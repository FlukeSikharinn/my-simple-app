const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('5555555555!');
});

app.get('/product', (req, res) => {
    const product = {
        id: 1,
        name: 'Sample Product',
        price: 100,
        description: 'This is a sample product description.',
    };
    res.json(product);
});

app.get('/user', (req, res) => {
    const product = {
        id: 1,
        name: 'Fluke',
        email: 'FlukSikharin@mail.com.',
    };
    res.json(product);
});

app.get('/car', (req, res) => { 
    const car = {
        id: 1,
        name: 'Toyota', 
        email: 'Toyota@mail.com',
    };
    res.json(car);
});

app.get('/test2', (req, res) => { 
    const car = {
        id: 1,
        name: 'test2', 
        email: 'test2@mail.com',
    };
    res.json(car);
});

app.get('/last-test', (req, res) => { 
    const car = {
        id: 1,
        name: 'LastTest', 
        email: 'LastTest@mail.com',
    };
    res.json(car);
});

app.get('/fork', (req, res) => { 
    const car = {
        id: 1,
        name: 'fork', 
        email: 'fork@mail.com',
    };
    res.json(car);
});


const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
