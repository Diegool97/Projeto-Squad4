import React from 'react'
import './Main.css'
import imageMain from '../Image/NBA-backgorund.jpg'
import LogoMaior from '../Image/NBA-logo-maior.png'
import Bola from '../Image/bola.png'
import trofeu from '../Image/trofeu.png'
import jogador from '../Image/jogador.png'
import Grafico1 from '../Image/grafico1.jpeg'
import Grafico2 from '../Image/grafico2.jpeg'
import Grafico3 from '../Image/grafico3.jpeg'


function Main() {
  return (
    <main>   <div className="image-main" style={{backgroundImage:`url(${imageMain})`}} >
    <div className="opacity">
    <div className="text-image-principal"  data-aos="fade-right" data-aos-offset="500" data-aos-delay="300" data-aos-easing="ease-in-sine">
           <div className="NBA">
               <h1 className='N'>N</h1>
               <h1 className='B'>B</h1>
               <h1 className='A'>A</h1>
           </div>
           <div className="estt">
               <span>ESTATISTICAS</span>
           </div>
           
           <div className="text">
               <p>Só aqui as melhores estatisticas de um dos esportes mais famosos do MUNDO</p>
           </div>
       </div>
    </div>
   </div>
   
   <div className="NBA-info"  >
        <section className='info1'  >
                <img src={LogoMaior} alt="" />
        <h1>National Basketball Association (NBA)</h1>
    </section>

     <section className='info2' >
        <div className="infos-text" >
            <img src={Bola} alt="" />
            <h3>Um dos maiores esportes do mundo</h3>
        </div>
        <div className="infos-text">
            <img src={trofeu} alt="" />
            <h3>League com maior reconhecimento</h3>
        </div>
        <div className="infos-text">
            <img src={jogador} alt="" />
            <h3>Onde estao os melhore jogadores do mundo</h3>
        </div>
     </section>
  
   </div>

        <aside>
            <h3>ESTATISTICAS</h3>
        </aside>

        <div className="card-main">
        <div className="card">
        <section className='img-card'>
            <img src={Grafico1} alt="" />
         
        </section>
        <section className=' text-info-card'>
        <h1>QUAIS SÃO OS TIMES MAIS NOVOS DA NBA?</h1>
            <span>Nuggets, Pacers, Mavericks, Hornets...</span>
            <h3>Onde fizemos essa consulta e como?</h3>
            <ul>
                <li>Fizemos pelo PhpMyAdmin</li>
                <li>SELECT nickname, yearfounded FROM teams ORDER BY yearfounded ASC</li>
            </ul>
            
        </section>
  
        
        </div>
    
        <hr />
        <div className="card">
        <section className='img-card'>
            <img src={Grafico2} alt="" />
         
        </section>
        <section className=' text-info-card'>
        <h1>Quais são os times com maior capacidade de arena?</h1>
            <span>Bulls, Pistons, Wizards, Cavaliers...</span>
            <h3>Onde fizemos essa consulta e como?</h3>
            <ul>
                <li>Fizemos pelo PhpMyAdmin</li>
                <li>SELECT nickname, arenacapacity FROM teams ORDER BY arenacapacity DESC LIMIT 10</li>
            </ul>
            
        </section>
  
        
        </div>
    
    
    
    </div> 


   </main>
    

    
 
  )
}

export default Main