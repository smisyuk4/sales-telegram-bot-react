import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Header = lazy(() => import('../Header'));
const BuyPage = lazy(() => import('../../pages/buyPage'));
const SalePage = lazy(() => import('../../pages/salePage'));
const ErrorPage = lazy(() => import('../../pages/errorPage'));
const RulsPage = lazy(() => import('../../pages/rulsPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Підтягуємо гроші...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="buy" element={<BuyPage />} redirectTo="/" />
          <Route path="sale" element={<SalePage />} redirectTo="/" />
          <Route path="ruls" element={<RulsPage />} redirectTo="/" />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
