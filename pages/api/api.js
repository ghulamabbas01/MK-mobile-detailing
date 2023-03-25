const accountSid = "AC97c4904f97c490cd0d0db874b7c5a9aa";
const authToken = "f98adb5205a226dc8a8c4e590c2bb4df";
const client = require("twilio")(accountSid, authToken);
export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        await client.messages
          .create({
            messagingServiceSid: "MG35cf96141388849c475b0c3df0c858f7",
            body: `Hi, ${body.firstName} ${body.lastName} is here from ${body.address}. This is my  email account: ${body.email} and My mobile number is ${body.phone}`,
            from: "+14754656778",
            to: "+923035501602",
            // sendAt: new Date(Date.UTC(2021, 10, 30, 20, 36, 27)),
            // scheduleType: "fixed",
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
