const express = require('express');

const app = express();
// Const path = require('path');
app.use(express.static('public'));

app.get('/', (request, res) => {
	res.sendFile(__dirname + '/index.html');
});
const port=(process.env.PORT || 3000);
app.listen(port, () => console.log('server is listening to port 3000'));
