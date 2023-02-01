import HeaderMain from './Components/Header'
import MainProject from './Components/Main'

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
   
      </main>
  

      <footer>
        <FooterProject />
       </footer>
    </div>
  );
}

export default App;
