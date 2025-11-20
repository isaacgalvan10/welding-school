import './App.css';
import Header from './components/Header';
import KoalendarWidget from "./components/calendar.jsx";
import HomeContent from './components/HomeContent';

function App() {
  return (
    <>
      <Header />
      <HomeContent />
      <KoalendarWidget />
    </>
  )
}

export default App
