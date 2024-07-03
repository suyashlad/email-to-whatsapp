const nodemailer = require('nodemailer');
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

exports.handler = async (event, context) => {
    const { email, phoneNumber } = JSON.parse(event.body);

    // Here you would set up your email fetching logic
    // For demonstration, we're sending a static message

    try {
        const message = await client.messages.create({
            body: `You have a new email at ${email}`,
            from: 'whatsapp:+14155238886', // This is a Twilio Sandbox number for WhatsApp
            to: `whatsapp:${phoneNumber}`
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, sid: message.sid })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
};
