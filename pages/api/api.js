const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        await client.messages
          .create({
            body: `Hi, ${body.firstName} ${body.lastName} is here from ${body.address}. This is my  email account: ${body.email} and My mobile number is ${body.phone}`,
            messagingServiceSid: process.env.SERVICE_SID,
            to: process.env.PHONE_NUMBER,
          })
          .then((message) => console.log(message.sid));

        res.status(200).json({
          success: true,
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
