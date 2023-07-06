import './App.scss';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Hero />
      <Content/>
    </div>
  );
}

export default App;
