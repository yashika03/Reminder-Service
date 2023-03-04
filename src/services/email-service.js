const sender = require('../config/email-config');
const TicketRepository = require('../repository/ticket-repository');

const repo = new TicketRepository();

const SendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) =>{
    try {
        const response  = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log(error);
    }
}


const fetchPendingEmails = async() => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}


const updateTicket = async(ticketId, data) =>
{
    try {
        const response = repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async(data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    SendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}