import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "@/router";
import zhCN from "zarm/lib/config-provider/locale/zh_CN";
import { ConfigProvider } from 'zarm';
import "zarm/dist/zarm.css";
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          ></Route>
        ))}
      </Routes>
    </ConfigProvider>
  );
}

export default App;
