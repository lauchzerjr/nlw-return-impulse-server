import { MailAdapter, SendEmailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "25e16321960532",
    pass: "bff57f0fd00c92"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendEmailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Adalberto Junior <lauchzerjr@gmail.com>',
      subject,
      html: body
    })
  }
}