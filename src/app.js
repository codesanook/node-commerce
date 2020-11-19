const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
// default folder of HTML template is views folder
app.set ( 'view engine', 'ejs' );

app.get('/', (req, res) => {
    res.render ('index', 
        { 
            products : 
            [
                { url: 'images/product-a.jpg' },
                { url: 'images/product-b.jpg' },
                { url: 'images/product-c.jpg' },
            ]
        }
    );		
});

app.listen(port, () => {
    console.log(`The app listening at http://localhost:${port}`)
});