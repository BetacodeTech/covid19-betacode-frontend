
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PT from "./PT";
import EN from "./EN";



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      PT,EN
    },
    lng: "PT",
    fallbackLng: "PT",
    keySeparator:false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
