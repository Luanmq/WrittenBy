import "../Navbar/Navbar.css";
import WrittenbyLogo from "../../assets/img/logo_writtenby.svg";

export default function Navbar() {
  const nome = "Luan";
  return (
    <nav>
      <ul className="media">
        <li className="text_small">
          <a href="/filmes">Filmes</a>
        </li>
        <li className="text_small">
          <a href="/series">Séries</a>
        </li>
        <li className="text_small">
          <a href="/jogos">Jogos</a>
        </li>
        <li className="text_small">
          <a href="/livros">Livros</a>
        </li>
      </ul>
      <div className="user_container">
        <span className="label_large user_login">Olá, {nome}</span>
        <ul className="label_medium user_options">
          <li>
            <a href="#">Minhas Reviews</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
      <a href="/home" className="navbar_logo">
        <img src={WrittenbyLogo} alt="Wrtitenby logo" />
      </a>
    </nav>
  );
}
