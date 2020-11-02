const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const sheetRoutes = require ('./api/routes/sheets');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requsted-With, Content-Type, Accept, Authorization')
    if (req.method =='OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE, GET');
        return res.status(200),json({});
    }
    next();
})

// Route which should handle requests

app.use('/sheets', sheetRoutes);
//app.use('/domains', domainRoutes);
//app.use('/adam', adamRoutes);
//app.use('/sdtm', sdtmRoutes);
//app.use('/sas', sasRoutes);
//app.use('/programs', sasRoutes);
//app.use('/projects', projectRoutes);


// Error handling, if nonoe of about routes worked then handle as error
app.use((req,res, next) => {
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});

app.use((error,req,res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message:error.message
        }
    });

});




module.exports = app;