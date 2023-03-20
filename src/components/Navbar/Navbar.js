import "../Navbar/Navbar.css";

export default function Navbar() {
  const nome = "Luan";
  return (
    <>
      <nav>
        <ul className="media">
          <li className="text_small">
            <a href="#">Filmes</a>
          </li>
          <li className="text_small">
            <a href="#">Séries</a>
          </li>
          <li className="text_small">
            <a href="#">Jogos</a>
          </li>
          <li className="text_small">
            <a href="#">Livros</a>
          </li>
        </ul>
        <div className="user_container">
          <a href="#" className="label_large user_login">
            Olá, {nome}
          </a>
          <ul className="label_medium user_options">
            <li>
              <a href="#">Minhas Reviews •</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
