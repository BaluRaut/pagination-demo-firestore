import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {Login} from "./components/Login";
import {HomeContainer} from "./components/HomeContainer";
import {DataEntrtyContainer} from './components/DataEntryContainer'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/dashboard",
        element: <HomeContainer/>,
    },
    {
        path: "/data-entry",
        element: <DataEntrtyContainer/>,
    },
]);
root.render(
  <QueryClientProvider client={queryClient}>
    {/* <React.StrictMode> */}
      <RouterProvider router={router} />
      {/* </React.StrictMode> */}
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
