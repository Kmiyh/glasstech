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
    pass: ""
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
              <h3>Номер заказа: ${snap.id}</h3>
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
                <b>Диагональ экрана (дюйм): </b>${snap.data().display}<br>
                <b>Тип стекла: </b>${snap.data().glass}<br>
                <b>Количество: </b>${snap.data().count} шт.<br>
              </div>
              <hr>
              <h5><b>Статус: </b>${snap.data().status}</h5>
              <hr>
              <div>
                <h3>ИТОГ: ${snap.data().itog} руб.</h3>
              </div>`
    };
    return transporter.sendMail(mailOptions);
  });

exports.updateOrder = functions.firestore
  .document("orders/{orderId}")
  .onUpdate((change, context) => {
    console.log("success");
    const mailOptions = {
      from: "pvlgaliguzov@gmail.com",
      to: change.after.data().email,
      subject: "Ваш заказ на GlassTech",
      html: `<h5>Статус вашего заказа на GlassTech обновлен</h5>
                <h3>Номер заказа: ${change.after.id}</h3>
              <h5><b>Статус: </b>${change.after.data().status}</h5>
              <hr>
              <div>
                <h3>ИТОГ: ${change.after.data().itog} руб.</h3>
              </div>`
    };
    return transporter.sendMail(mailOptions);
  });

exports.sendFeedback = functions.firestore
  .document("feedbacks/{feedbackId}")
  .onCreate((snap, context) => {
    console.log("success");
    const mailOptions = {
      from: snap.data().email2,
      to: "pvlgaliguzov@gmail.com",
      subject: "Обратная связь GlassTech",
      html: `<h3>${snap.data().firstname} ${snap.data().lastname} - ${snap.data().email2}</h3>
              <div>
                <b>Тема письма: </b>${snap.data().theme}</br>
                <p>${snap.data().text}</p>
              </div>`
    };
    return transporter.sendMail(mailOptions);
  });
