import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router";
import RoutesPage from "./routes/routes";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      {/* <h1>{t("home")}</h1> */}
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </>
  );
}

export default App;
