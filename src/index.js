const express = require('express')
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/locations', (req, res) => {
  res.status(200).json([
    {
      street1: 'sharath',
      street2: 'Hosur road',
      city: 'Bangalore',
      pincode: '560095'
    },
    {
      street1: '#103',
      street2: 'Outer ring road',
      city: 'Bangalore',
      pincode: '560037'
    }
  ])
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
