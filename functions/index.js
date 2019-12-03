const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
//google account credentials used to send email
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "pvlgaliguzov@gmail.com",
    // pass: "ENTER CODE"
  }
});
exports.sendEmail = functions.firestore
  .document("orders/{orderId}")
  .onCreate((snap, context) => {
    console.log("success");
    const mailOptions = {
      from: "pvlgaliguzov@gmail.com",
      to: snap.data().email,
      subject: "Ваш заказ на GlassTech",
      html: `<h1>Данные заказа</h1>
              <div>
                <h3>Ваши контактные данные</h3>
                <b>Город: </b>${snap.data().town}<br>
                <b>Адрес: </b>${snap.data().address}<br>
                <b>Индекс: </b>${snap.data().index}<br>
                <b>Телефон: </b>${snap.data().phone}<br>
              </div>
              <div>
                <h3>Выбранный товар</h3>
                <b>Модель: </b>${snap.data().model}<br>
                <b>Тип стекла: </b>${snap.data().glass}<br>
                <b>Количество: </b>${snap.data().count} шт.<br>
              </div>
              <hr>
              <div>
                <h3>ИТОГ: ${snap.data().itog} руб.</h3>
              </div>`
    };
    return transporter.sendMail(mailOptions);
  });
