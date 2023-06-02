
export const saveTask = async (req, res) => {
  try {
    const nodemailer = require("nodemailer");

            const data = req.body.email;
            console.log(data)
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'batiz.jimenez.alery.nohemi@gmail.com', // generated ethereal user
                    pass: 'yiroaqdqfhnxavqd', // generated ethereal password
                },
            });
        
            let info = await transporter.sendMail({
                from: 'batiz.jimenez.alery.nohemi@gmail.com', // sender address
                to: data, // list of receivers
                subject: `HOLA`, // Subject line
                text:`Ingresa al siguiente link para contestar al formulario `, // plain text body
            });
            console.log("Mensaje enviado");
        
        }
     catch (error) {
    console.error(error);
  }
};







