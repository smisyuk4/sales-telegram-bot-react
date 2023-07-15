import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('../Layout'));
const BuyPage = lazy(() => import('../../pages/buyPage'));
const SalePage = lazy(() => import('../../pages/salePage'));
const ErrorPage = lazy(() => import('../../pages/errorPage'));
const RulsPage = lazy(() => import('../../pages/rulsPage'));
const HomePage = lazy(() => import('../../pages/homePage'));

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
