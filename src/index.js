const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const {SendBasicEmail} = require('./services/email-service');
const ServerSetup = () => 
{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at PORT: ${PORT}`);
    });
    SendBasicEmail(
        'support@admin.com',
        'notifyservice123@gmail.com',
        'Testing Email',
        'This mail is send to test the Reminder service of Airline ManagementProject');
}
ServerSetup();