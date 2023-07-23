import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('../Layout'));
const BuyPage = lazy(() => import('../../pages/BuyPage'));
const SalePage = lazy(() => import('../../pages/SalePage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage'));
const RulsPage = lazy(() => import('../../pages/RulsPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));

const LoginPage = lazy(() => import('../../pages/LoginPage'));

const LayoutAdmin = lazy(() => import('../LayoutAdmin'));

const DiagramsPage = lazy(() => import('../../pages/DiagramsPage'));
const AdminFormPage = lazy(() => import('../../pages/AdminFormPage'));
const NotifyPage = lazy(() => import('../../pages/NotifyPage'));

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

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DiagramsPage />} />
          <Route path="statistics" element={<NotifyPage />} />
          <Route path="form" element={<AdminFormPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
