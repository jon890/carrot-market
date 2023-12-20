import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export async function sendMessage(text: string) {
  return client.messages.create({
    messagingServiceSid: process.env.TWILIO_MSID,
    from: process.env.TWILIO_FROM,
    to: process.env.TWILIO_TO!,
    body: text,
  });
}; 