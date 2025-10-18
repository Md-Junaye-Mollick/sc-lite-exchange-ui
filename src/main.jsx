import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n.js";
import { AppContextWrapper } from "./context/app-context.jsx";
import "./themes.css";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppContextWrapper>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark", "dim"]}
          value={{
            light: "light", // When theme is 'light', add 'light' class
            dark: "dark", // When theme is 'dark', add 'dark' class
            dim: "dim", // When theme is 'dim', add 'dim' class
          }}
        >
          <App />
        </ThemeProvider>
      </AppContextWrapper>
    </I18nextProvider>
  </StrictMode>
);
