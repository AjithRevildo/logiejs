var nodemailer = require("nodemailer")
//send email working nodemailer with gmail google auth
//refer:https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/ for creating google auth
//makers group  youtube channel for solving username password error

const sendEmail = async(email,name,otp)=>{
    try{
            let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user:"akashpoovan983@gmail.com",
        pass:"vuqdbntxiwxaruha",
        clientId:"476835146518-e1t374es0djnvgfc9l6dupru0b51f5uk.apps.googleusercontent.com",
        clientSecret:"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",
        refreshToken:"1//04Uulho6sMGFECgYIARAAGAQSNwF-L9IrfhJfVRmrDqurxXeCnswoXaRYSw62AuvXZe_ITH-EtUbm8ZFIaG25et8fl4k2LpQmpVU "
      }
    });
var composemail = {
    from:"ajithrevildo1999@gmail.com",
    to:email,
    subject:`hi ${name} Message from the Revildo Edu request for the password reset`,
    text:otp

};

transporter.sendMail(composemail,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log("Mail sent sucessfully")
    }
});
    } catch(error) {
        console.log(error,"email");
    }
}
module.exports = sendEmail;
