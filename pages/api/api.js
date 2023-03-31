const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const data = await client.messages.create({
          body: `Hello, ${body.firstName} ${body.lastName} Is From ${body.address}. This Is My Email Account: ${body.email} And My mobile number is ${body.phone}`,
          messagingServiceSid: process.env.SERVICE_SID,
          to: process.env.PHONE_NUMBER,
        });

        res.status(200).json({
          success: true,
          data: data,
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
