import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import NomadCollection from './routes/NomadCollection/NomadCollection';
import Seating from './routes/Seating/Seating';
import MainContent from './componentes/MainContent/MainContent'
import Subscribe from './componentes/Subscribe/Subscribe';


function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/nomad-collection" element={<NomadCollection />} />
                <Route path="/seating" element={<Seating />} />
            </Routes>
            
                <Subscribe
                />
            
            <Footer />
        </Router>

        
    );
}
export default App;

