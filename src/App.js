import CardContent from './components/CardContent';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Testimonios from './components/Testimonios';
import logo from './logo.svg';
import './sass/index.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{height: "70px"}} className='w-100'></div>
      <MainContent />
      <CardContent />
      <Testimonios />
      
    </div>
  );
}

export default App;
