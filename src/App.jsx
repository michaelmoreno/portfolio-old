import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import './styles/style.css'
import Main from "./components/Main";

function App() {
  return (
    <div className="App">	
      <Nav />
	    <Main />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App
