const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors')

//settings
app.set('port', process.env.PORT || 5000);

//Soluciona problema de 'Access-Control-Allow-Origin'
app.use(cors()) // Use this after the variable declaration

//middlewares
app.use(morgan('dev'));

//para entender datos de los input
app.use(express.urlencoded({extended: false}));

//entender formato json
app.use(express.json());


//routes
app.use(require('./routes/index'));



//comenznado servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});