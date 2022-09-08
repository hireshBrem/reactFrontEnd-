// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const dotenv = require('dotenv');
// const app = express()
// const path = require("path")
// const bodyParser = require("body-parser")

// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
//     index: ['index.html'],
//     maxAge: '1m',
//     redirect: false
// }

// app.use(express.static('build', options))

// dotenv.config()

// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.json())
// app.get("/", cors(), async (req, res) => {
//     console.log("Server on!")
// })

// app.post("/post_contact", async (req, res) => {
//     console.log("In server!")
//     let {firstname, lastname, email, message} = req.body

//     var mail = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.MAIL_FROM,
//             pass: process.env.PASSWORD
//         }
//     });

//     var mailOptions = {
//         from: email,
//         to: process.env.MAIL_TO,
//         subject: 'CONTACT FROM WEBSITE',
//         text: `${message}, Name: ${firstname} ${lastname} Email: ${email}`,
//     };

//     mail.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });

// })

// app.listen(process.env.PORT, () => console.log("Server Running on " + process.env.PORT));

function sendMail() {
    console.log("In send mail function!")
}

export default sendMail