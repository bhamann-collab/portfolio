let express = require('express')
let path = require('path')
var compression = require('compression')

let app = express();

let PORT = process.env.PORT || 8080

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('public'))
app.use(compression())

//Routes
app.get('/', (req, res) => {
    res,sendFile('index.html', {root: fileDirectory}, (err) => {
        res.end()

        if (err) throw(err);
    })
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})