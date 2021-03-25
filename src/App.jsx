import './App.css';
import Intro from './components/Intro/Intro';
import Price from './components/Price/Price';
import Reports from './components/Reports/Reports';
import Services from './components/Services/Services';
import Specialists from './components/Specialists/Specialists';
import News from './components/News/News';
import QA from './components/QA/QA';
import Recomendations from './components/Recomendations/Recomendations';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="wrapper">
            <Intro />
            <Services />
            <Specialists />
            <Price />
            <Reports />
            <News />
            <QA />
            <Recomendations />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
