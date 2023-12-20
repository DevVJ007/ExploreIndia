const nodemailer =  require("nodemailer");

/**
 *
 * @param {{email: string; subject: string;  Content:  .Content; }} options
 */
const sendEmail = async (options) => {
  // For more info on how   content work visit https://github.com/eladnava/ #readme
  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailTextual = options.Content;

  // Generate an HTML email with the provided contents
  const emailHtml = options.Content;

  // // Create a nodemailer transporter instance which is responsible to send a mail
  // const transporter = nodemailer.createTransport({
  //   host: process.env.MAILTRAP_SMTP_HOST,
  //   port: process.env.MAILTRAP_SMTP_PORT,
  //   auth: {
  //     user: process.env.MAILTRAP_SMTP_USER,
  //     pass: process.env.MAILTRAP_SMTP_PASS,
  //   },
  // });

  // Create a transporter using Gmail SMTP settings
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.GMAIL_USER, // Your Gmail email address
  //     pass: process.env.GMAIL_PASS, // Your Gmail password or app password
  //   },
  // });

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0397c70172781b",
      pass: "ae0bb8a78a5940",
    },
  });

  const mail = {
    from: process.env.GMAIL_USER, // We can name this anything. The mail will go to your Mailtrap inbox
    to: options.email, // receiver's mail
    subject: options.subject, // mail subject
    text: emailTextual, //   content textual variant
    html: emailHtml, //   content html variant
  };

  try {
    await transporter.sendMail(mail);
    console.log("email");
  } catch (error) {
    // As sending email is not strongly coupled to the business logic it is not worth to raise an error when email sending fails
    // So it's better to fail silently rather than breaking the app
    console.log("Email service failed silently. Make sure you have provided your MAILTRAP credentials in the .env file");
    console.log("Error: ", error);
  }
};

/**
 *
 * @param {string} username
 * @param {string} verificationUrl
 * @returns { .Content}
 * @description It designs the email verification mail
 */
const emailVerificationContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app! We're very excited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

/**
 *
 * @param {string} username
 * @param {string} verificationUrl
 * @returns { .Content}
 * @description It designs the forgot password mail
 */
const forgotPasswordContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of our account",
      action: {
        instructions:
          "To reset your password click on the following button or link:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

module.exports = {
  sendEmail,
  emailVerificationContent,
  forgotPasswordContent,
};
