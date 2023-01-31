import HeaderMain from './Components/Header'
import MainProject from './Components/Main'
import CardRigth from './Components/CardRigth'
import CardLeft from './Components/CardLeft'
 import FooterProject  from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
  
  <header>
     <HeaderMain/>
  </header>


     <main>
      <MainProject/>
      <CardRigth/>
      <CardLeft />
      <CardRigth/>
      <CardLeft />
      </main>
  

      <footer>
        <FooterProject />
       </footer>
    </div>
  );
}

export default App;
