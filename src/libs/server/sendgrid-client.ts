import sgMail, {
  ClientResponse,
  MailDataRequired,
  ResponseError,
} from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendEmail = (
  data: MailDataRequired | MailDataRequired[],
  isMultiple?: boolean,
  cb?: (err: Error | ResponseError, result: [ClientResponse, {}]) => void
) => {
  return sgMail.send(data, isMultiple, cb);
};
