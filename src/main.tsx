import React from "react";

import ReactDOM from "react-dom/client";
import viVN from "antd/lib/locale-provider/vi_VN";
import App from "./App.tsx";
import "./index.css";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import LocaleProvider from "antd/lib/locale-provider/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <LocaleProvider locale={viVN}>
        <App />
      </LocaleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
