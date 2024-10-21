import { onCall } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";
import * as google from "googleapis";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const OAuth2 = google.Auth.OAuth2Client;

const getOAuthAccessToken = (): Promise<string> => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  return new Promise((resolve, reject) => {
    oauth2Client
      .getAccessToken()
      .then((val) => {
        if (val.token) {
          resolve(val.token);
        } else {
          const error = "OAuth token is null.";
          logger.error(error);
          reject(error);
        }
      })
      .catch((error) => {
        logger.error(error);
        reject(error);
      });
  });
};

const sendMail = (
  from: string,
  message: string,
  accessToken: string
): Promise<object> => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TO_EMAIL,
    subject: `Received portfolio message from: ${from}`,
    text: message,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error(error);
        reject(error);
      } else {
        logger.info("Message received and sent.", info.response);
        resolve({
          status: "ok",
          code: 200,
        });
      }
    });
  });
};

export const sendMessage = onCall(
  {
    enforceAppCheck: true,
  },
  async (request) => {
    logger.debug("Token: ", request.app?.token);
    const from = request.data.from;
    const message = request.data.message;
    try {
      const accessToken = await getOAuthAccessToken();
      const mailResult = await sendMail(from, message, accessToken);
      logger.info("Result", mailResult);
      return mailResult;
    } catch (e) {
      return {
        status: "error",
        code: 500,
        error: e,
      };
    }
  }
);
