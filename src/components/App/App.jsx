import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('../Layout'));
const BuyPage = lazy(() => import('../../pages/BuyPage-1'));
const SalePage = lazy(() => import('../../pages/SalePage-1'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage-1'));
const RulsPage = lazy(() => import('../../pages/RulsPage-1'));
const HomePage = lazy(() => import('../../pages/HomePage-1'));

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
