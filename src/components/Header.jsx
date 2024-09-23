import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Find My Pet</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#search-form">Busca</a>
          </li>
          <li>
            <a href="#conheca">Conheça</a>
          </li>
          <li>
            <a href="#contact-footer">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
