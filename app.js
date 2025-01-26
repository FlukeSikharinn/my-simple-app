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

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
