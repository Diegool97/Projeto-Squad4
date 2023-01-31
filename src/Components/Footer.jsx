import React from 'react'
import './Footer.css'
import PaulaImg from '../Image/paula.png'
import ThiagoImg from '../Image/thiago.jpg'
import MatheusImg from '../Image/matheus.png' 
import SergioImg from '../Image/sergio.png' 
import DiegoImg from '../Image/diego.png' 
import Github from '../Image/github.png'
import linkedin from '../Image/linkedin.png'
const Footer = () => {
  return (
    <div className="footer">


        <section className='equipe'>

        
          <div className="img-equipe"> 
            <img src={PaulaImg} alt="" />
            <div className="icon-img">
                <a href="https://www.linkedin.com/in/pauladinucci/"> Ver mais</a>
            </div>
          </div>
          <div className="img-equipe"> 
            <img src={ThiagoImg} alt="" />
            <div className="icon-img">
                <a href='https://www.linkedin.com/in/thiago-duarte-n/'> Ver mais</a>
            </div>
          </div>
          <div className="img-equipe"> 
            <img src={MatheusImg} alt="" />
            <div className="icon-img">
                <a href="https://www.linkedin.com/in/matheus-gomes-780339211/"> Ver mais</a>
            </div>
          </div>
          <div className="img-equipe"> 
            <img src={DiegoImg} alt="" />
            <div className="icon-img">
                <a href="https://www.linkedin.com/in/diegomarques097/"> Ver mais</a>
            </div>
          </div>
          <div className="img-equipe"> 
            <img src={SergioImg} alt="" />
            <div className="icon-img">
                <a href="https://www.linkedin.com/in/sergio-luiz19/"> Ver mais</a>
            </div>
          </div>
         
        
        </section>
        <section></section>
    </div>
  )
}

export default Footer