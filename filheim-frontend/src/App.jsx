import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import CollectionPage from './pages/Collection';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/collection' element={<CollectionPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />

                    <Route path='/404' element={<Notfound />} />
                    <Route path='*' element={<Notfound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
