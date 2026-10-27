// src/app/Router.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";

const WorkDetailPage = lazy(() =>
  import("./pages/WorkDetailPage").then((m) => ({ default: m.WorkDetailPage }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);

function PageLoader() {
  return (
    <div className="sx-stage sx-center">
      <div className="sx-paper sx-paper--grid sx-loader">Membuka buku catatan...</div>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/works/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <WorkDetailPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
