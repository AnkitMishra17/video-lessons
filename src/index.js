const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const viewsPath = path.join(__dirname, "/views");

app.set('view engine', 'ejs')
app.set("views", viewsPath)

app.use('/public',express.static(path.join(__dirname, "../public")));

app.get('/', (req,res) =>{
          res.render('index');
});

const server = app.listen(port, (req, res) => {
    console.log(`Server started at port ${port}..`)
  });