const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
// default folder of HTML template is views folder
app.set ( 'view engine', 'ejs' );

app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.render ('index');		
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});