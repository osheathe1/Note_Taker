const express = require('express');
const html = require('./routes/html');
const PORT = process.env.PORT || 3001;
const api = require('./routes/api');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// How to view the page // 
app.use(express.static('public'));
app.use('/',html);
app.use('/api', api);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
