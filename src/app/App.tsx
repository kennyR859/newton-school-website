import React from 'react';
import '../styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Curriculum } from './components/Curriculum';
import { Facilities } from './components/Facilities';
import { SuccessStories } from './components/SuccessStories';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Policy } from './components/Policy';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
