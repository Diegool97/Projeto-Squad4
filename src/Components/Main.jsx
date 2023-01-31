import React from 'react'
import './Main.css'
import imageMain from '../Image/NBA-backgorund.jpg'
import LogoMaior from '../Image/NBA-logo-maior.png'
import Bola from '../Image/bola.png'
import trofeu from '../Image/trofeu.png'
import jogador from '../Image/jogador.png'


function Main() {
  return (
    <main>   <div className="image-main" style={{backgroundImage:`url(${imageMain})`}} >
    <div className="opacity">
    <div className="text-image-principal">
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
   
   <div className="NBA-info">
        <section className='info1'>
                <img src={LogoMaior} alt="" />
        <h1>National Basketball Association (NBA)</h1>
    </section>

     <section className='info2'>
        <div className="infos-text">
            <img src={Bola} alt="" />
            <h3>Um dos maiores esportes do mundo</h3>
        </div>
        <div className="infos-text">
            <img src={trofeu} alt="" />
            <h3>Um dos maiores esportes do mundo</h3>
        </div>
        <div className="infos-text">
            <img src={jogador} alt="" />
            <h3>Um dos maiores esportes do mundo</h3>
        </div>
     </section>
  
   </div>

        <aside>
            <h3>ESTATISTICAS</h3>
        </aside>

   </main>
    

 
  )
}

export default Main