import logo from './logo.svg';
import './App.css';
import HomeBanner from './components/HomeBanner';
import TableSpace from './components/TableSpace';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HomeBanner/>
      <TableSpace/>
      <Footer/>
    </div>
  );
}

export default App;
