const TicketService = require('../services/email-service');
const create = async(req,res) => {
    try {
        console.log(req.body);
        const response = TicketService.createNotification(req.body);
        return res.status(200).json({
            data: response,
            err: {},
            message: 'Successfully created an email reminder',
            success: true
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            err: error,
            message: 'Could not create an email reminder',
            success: false
        });
    }
}

module.exports = {
    create
}