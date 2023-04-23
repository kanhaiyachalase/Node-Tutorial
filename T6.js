// How to send email

var nodeMailer = require("nodemailer");

var transport = nodeMailer.createTransport({
  host: "jd.gmail.com",
  port: 578,
  secure: false,
  requireTLS: true,
  auth: {
    user: "khfchalase.gmail.com",
    pass: "ebfhbfh",
  },
});

var mmailOption = {
  from: "webmailergmail.com",
  to: "njfjfh.gmail.com",
  subject: "Text oAKNS tHIS",
  text: "Hello from kanhaiya side",
};
transport.sendMail(mmailOption, function (error, info) {
  if (error) {
    console.log("Error");
  } else {
    console.log("email send");
  }
});
