// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import "../styles/globals.css";
import Layout from "../components/Layout";
config.autoAddCss = false;
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [showIcon, setShowIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <I18nextProvider i18n={i18n}>
      <Layout
        showIcon={showIcon}
        setShowIcon={setShowIcon}
        showMenu={showMenu}
        setSwitched={setSwitched}
        setShowMenu={setShowMenu}>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}
