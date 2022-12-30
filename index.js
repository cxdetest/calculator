const express = require('express');
const app = express();
require('dotenv').config({ path: '.env' });

app.set('port', process.env.PORT || 4000);

app.use('/', express.static(__dirname));

app.use('/', (req, res) => res.sendFile(__dirname + 'index.html'));

app.listen(process.env.PORT, () => {
  console.log(`server at http://localhost:${process.env.PORT}`);
});
