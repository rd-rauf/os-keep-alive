let express = require('express');

let app = express();

const port = 3001

app.get('/', (req, res) => res.send('Hello Express!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))