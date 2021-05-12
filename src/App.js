
import './App.css';

import Navigation from './pages/navigation/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/homepage/homepage';
import Futureproof from './pages/futureproof/futureproof';
import Ourcurriculum from './pages/ourcurriculum/ourcurriculum';
import Vedio from './pages/embitvedio/vedio';
import MoveStuffAround from './pages/ticker/ticker';
import Experience from './pages/experience/experience';
import Footer from './pages/footer/footer'



function App() {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <Futureproof />

      <Vedio />
      <MoveStuffAround />
      <Experience />
      <Footer />
    </div>
  );
}


export default App;
