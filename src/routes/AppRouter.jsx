import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

import MainLayout from "../components/layout/MainLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}