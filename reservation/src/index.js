const express = require('express')
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/reservations', (req, res) => {
  res.status(200).json([
    {
      reservationId: '1234',
      providerId: '355',
      startDate: '10/04/2019',
      endDate: '10/05/2019'
    },
    {
      reservationId: '6435',
      providerId: '356',
      startDate: '20/04/2019',
      endDate: '20/05/2019'
    },
  ])
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))