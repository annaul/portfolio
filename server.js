const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));

app.get('/index.html', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

app.get('*', function(request, response) {
  response.status(404).send('sorry! nothing here!');
})

app.listen(PORT, function() {
  console.log('Server is up and running on port 5000 in your browser');
});
