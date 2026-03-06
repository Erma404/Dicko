import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Plomberie from './pages/Plomberie';
import Chauffage from './pages/Chauffage';
import VMC from './pages/VMC';
import Gaz from './pages/Gaz';
import Depannage from './pages/Depannage';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/plomberie" element={<Plomberie />} />
          <Route path="/chauffage" element={<Chauffage />} />
          <Route path="/vmc" element={<VMC />} />
          <Route path="/gaz" element={<Gaz />} />
          <Route path="/depannage" element={<Depannage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
