import React from "react";
import { createRoot } from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App";

import { persistedStore, store } from "./ReduxContianer/store";
// import ErrorBoundary from "./ErrorBoundary";
import { PersistGate } from "redux-persist/integration/react";
// import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
