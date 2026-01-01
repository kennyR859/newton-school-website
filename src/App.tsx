import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/providers/theme-provider';
import { Layout } from '@/components/layout/layout';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import { Curriculum } from '@/pages/curriculum';
import { Facilities } from '@/pages/facilities';
import { SuccessStories } from '@/pages/success-stories';
import { Contact } from '@/pages/contact';
import { FAQ } from '@/pages/faq';
import { Policy } from '@/pages/policy';

// Import i18n configuration
import '@/lib/i18n';

export default function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
