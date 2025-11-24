import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import router from "./Router/routes";

// Type definition for your route config (optional but recommended)
interface AppRoute {
  path: string;
  element: React.ReactElement;
  children?: AppRoute[];
}

function AppRoutes() {
  // Tell TypeScript that "route" is an array of AppRoute
  const element = useRoutes(router as AppRoute[]);
  return element;
}

const App: React.FC = () => {
  return (
      <AppRoutes />
  );
};

export default App;
