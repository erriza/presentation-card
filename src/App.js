
import Footer from './Components/Footer/Footer';
import './App.css';
import Photo from './Components/Picture/Picture';
import MainContent from './Components/Main/Main';

function App() {
  return (
    <div className="card">
      <Photo/>
      <MainContent className="container"/>
      <Footer/>
    </div>
  );
}

export default App;
