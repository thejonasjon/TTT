import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NotFound from '../pages/notFound';
import Home from '../pages';

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        <Routes>
          {/* Index (Home) Page */}
          <Route index element={<Home />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
