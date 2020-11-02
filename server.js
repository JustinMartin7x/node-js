const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
app.get('/ships', (req, res) => {
    const ships = ([
        {
            name: '40k',
            class: 'destroyer',
            weapons: 'shipt to ship compliment',
            description: 'heavy class destroyer capable of massive damage, but sacrifices manuverablity, '

        },
        {
            name: 'Endeaver',
            class: 'destroyer',
            weapons: 'ship to ship compliment',
            description: 'larger destroyer class ship, jump capable'
        }
    ]);
    res.json(ships);
});
