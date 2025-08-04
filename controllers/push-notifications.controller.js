const admin = require("firebase-admin");

const serviceAccount = require("../config/push-notification-key.json");

// Initialize only once (prevent reinitialization in case of hot reloads)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

exports.sendPushNotification = async (req, res, next) => {
  try {
    const message = {
      notification: {
        title: "Test Notification",
        body: "Notification Message",
      },
      data: {
        orderId: "123456",           // make sure all values in `data` are strings
        orderDate: "2022-10-28",
      },
      token: req.body.fcm_token,
    };

    const response = await admin.messaging().send(message);
    return res.status(200).send({
      message: "Notification Sent",
      response: response,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Failed to send notification",
      error: err.message,
    });
  }
};
