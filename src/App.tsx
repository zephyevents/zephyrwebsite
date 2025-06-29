import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

// Simple loading component without animation
const PageLoader = () => (
  <div className="min-h-screen bg-background-500 flex items-center justify-center">
    <div className="text-center">
      <p className="text-neutral-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-500 overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;