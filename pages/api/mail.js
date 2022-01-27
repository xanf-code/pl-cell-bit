const mail = require('@sendgrid/mail');

mail.setApiKey('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');

export default (req, res) => {
    const body = JSON.parse(req.body);

    const msg = `${body.message}`

    const data = {
        to: body.mail.split(','),
        from: 'darshanaswath@gmail.com',
        subject: body.subject,
        text: msg
    }

    console.log(data);
    mail.sendMultiple(data);

    res.status(200).json({ status: 200, message: 'Mail sent successfully' });
}