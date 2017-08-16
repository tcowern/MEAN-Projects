var Weights = require('./main.js');

app.get('/', (req, res) => {
    
    res.sendFile('index.html');
    
})