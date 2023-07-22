import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('../Layout'));
const BuyPage = lazy(() => import('../../pages/BuyPage'));
const SalePage = lazy(() => import('../../pages/SalePage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage'));
const RulsPage = lazy(() => import('../../pages/RulsPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const AdminPage = lazy(() => import('../../pages/AdminPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Підтягуємо гроші...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="buy" element={<BuyPage />} redirectTo="/" />
          <Route path="sale" element={<SalePage />} redirectTo="/" />
          <Route path="ruls" element={<RulsPage />} redirectTo="/" />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
