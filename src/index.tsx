import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/dropzone/styles.css";
import "@mantine/core/styles/Modal.css";
import { ModalProvider } from "./contexts/ModalContext";
import { PrimeReactProvider } from "primereact/api";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <MantineProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </MantineProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
