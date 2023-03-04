const cron = require('node-cron');
const EmailService = require('../services/email-service');
const sender = require('../config/email-config');

const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await EmailService.fetchPendingEmails();
        console.log(response);
        response.forEach((email) => {
            sender.sendMail({
                from: "notifyservice123@gmail.com",
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            }, async(err, data) => {
                if(err)
                {
                    console.log(err);
                }
                else{
                    await EmailService.updateTicket(email.id, {status: "SUCCESS"});
                }
            });
        });
    });
}
module.exports = setupJobs