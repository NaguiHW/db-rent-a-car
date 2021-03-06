const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
