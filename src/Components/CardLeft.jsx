import React from 'react'
import './CardLeft.css'
const CardLeft = () => {
  return (
    <div className="card">
            <hr/>
    <div className="cardLeft">
    <section className='img-card'>
        <img src="" alt="" />
        <img src="" alt="" />
    </section>
    <section className=' text-info-card'>
        <h1>QUAL TIME X MAIS GANHOU?</h1>
            <span>“tal time foi o que mais ganhou na temporada 12”</span>
            <h3>.Como e onde fiz essa consulta?</h3>
            <ul>
                <li>fiz tal coisa</li>
                <li>fiz tal coisa</li>
                <li>fiz tal coisa</li>
            </ul>
        </section>
    </div>
    <hr className='hr-2'/>
    
</div>
  )
}

export default CardLeft