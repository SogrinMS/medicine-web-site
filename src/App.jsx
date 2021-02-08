import './App.css';
import Intro from './components/Intro/Intro';
import Price from './components/Price/Price';
import Reports from './components/Reports/Reports';
import Services from './components/Services/Services';
import Specialists from './components/Specialists/Specialists';

function App() {
    return (
        <div className="wrapper">
            <Intro />
            <Services />
            <Specialists />
            <Price />
            <Reports />
        </div>
    );
}

export default App;
