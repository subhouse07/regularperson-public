import { initializeApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
import { getFunctions } from "firebase/functions";

const firebaseConfig = { /* Firebase Config */};

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(
    "key"
  ),
  isTokenAutoRefreshEnabled: true,
});
export const functions = getFunctions(app);
