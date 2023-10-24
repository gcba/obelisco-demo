const header = `<header class="navbar navbar-light navbar-expand-lg" role="banner">
  <a href="#main" class="skip-to-main-content-link">
    Ir al contenido principal
  </a>
  <div class="container header-container">
    <a href="https://buenosaires.gob.ar" class="navbar-brand">
      <img
        class="header-logo"
        src="https://gcba.github.io/obelisco-demo/assets/header/logoBA.svg"
        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
      />
    </a>
    <div class="navbar-login-mobile">
      <a
        class="btn btn-lg btn-icon btn-outline-link"
        href="#"
        target="_blank"
      >
        <span class="material-icons-round">person</span>
        <span class="btn-text">Ingresar</span>
      </a>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent">
      <div class="navbar-content">
        <div class="navbar-sections">
          <nav>
            <h3 class="navbar-sections-title">Secciones</h3>
            <ul class="nav nav-pills nav-sections">
              <li class="dropdown">
                <button
                  type="button"
                  class="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="btn-dropdown-text">Navegación</span>
                  <span class="material-icons-round btn-dropdown-icon">
                    expand_more
                  </span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Navegación</span>
                    <span class="material-icons-round">arrow_forward</span>
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                  <span>Navegación</span>
                </a>
              </li>
              <li class="dropdown">
                <button
                  type="button"
                  class="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="btn-dropdown-text">Navegación</span>
                  <span class="material-icons-round btn-dropdown-icon">
                    expand_more
                  </span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item" href="#">
                    <span class="item-text">Navegación</span>
                  </a>
                  <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Navegación</span>
                    <span class="material-icons-round">arrow_forward</span>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="navbar-search">
          <form class="form-search">
            <div class="form-group">
              <label class="sr-only" for="search-input">Buscador</label>
              <input
                type="search"
                class="form-control input-search"
                id="search-input"
                name="name"
                placeholder="Buscar en Buenos Aires"
              />
              <button class="reset" type="reset" aria-label="Borrar"></button>
              <button
                class="submit-search"
                type="submit"
                aria-label="Buscar"
              ></button>
            </div>
          </form>
        </div>
        <div class="navbar-login">
          <a
            class="btn btn-lg btn-icon btn-outline-link"
            href="#"
            target="_blank"
          >
            <span class="material-icons-round">person</span>
            <span class="btn-text">Ingresar</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="header-backdrop"></div>
</header>`;

document.body.insertAdjacentHTML("afterbegin", header);
