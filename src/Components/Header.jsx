
import './Header.css';
import logo from '../Image/NBA-logo.png'
import search from '../Image/search.png'
import perfil from '../Image/perfil.png'

function header() {
  return (
   <nav>
    <div className="menu">
      <div className="img-header">
        <img src={logo} alt="" />
        <span>NBA</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Estatisticas</li>
        <li>Contato</li>
  
      </ul>
    </div>

    <div className="search-header">
      <input type="text" />
      <img src={search} alt="" />
    </div>

    <div className="perfil-header">
      <img src={perfil} alt="" />
    </div>
   </nav>
  );
}

export default header;