const sender = require('../config/email-config');
const SendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) =>{
    try {
        const response  = sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    SendBasicEmail
}