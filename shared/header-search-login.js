const headerLogin = `<header class="navbar navbar-light navbar-lg">
<div class="container">
  <a
    class="navbar-brand collapse multi-collapse show"
    id="navbarBrand"
    href="https://www.buenosaires.gob.ar/"
  >
    <img
      class="header-logo"
      src="https://gcba.github.io/obelisco-demo/assets/header/logoBA.svg"
      alt="Logo de la Ciudad de Buenos Aires"
    />
  </a>
  <div class="navbar-btn-search">
    <button
      id="navbarTogglerBack"
      class="navbar-toggler btn-icon"
      data-toggle="collapse"
      data-target=".multi-collapse"
      aria-expanded="false"
      aria-controls="navbarBrand navbarToggler"
    >
      <i class="bx bx-search collapse multi-collapse show"></i>
      <i class="bx bx-left-arrow-alt collapse multi-collapse"></i>
    </button>
    <div class="collapse multi-collapse" id="navbarSearch">
      <form class="form-search">
        <div class="form-group">
          <input
            type="search"
            class="form-control input-search"
            id="name-input"
            name="name"
            placeholder="Buscar en Buenos Aires..."
          />
          <button class="reset" type="reset"></button>
        </div>
      </form>
    </div>
  </div>
  <div class="collapse multi-collapse show" id="navbarToggler">
    <button
      class="navbar-toggler collapsed"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a href="https://gcba.github.io/obelisco-demo/" class="nav-link active"><span>Inicio</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span>Mi actividad</span></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span>Mi cuenta</span></a>
      </li>
      <li class="nav-item">
        <a
          href="#"
          aria-label="Notificaciones"
          class="nav-link notifications"
        >
          <span class="material-icons-round">notifications</span>
          <span>Notificaciones</span>
        </a>
      </li>
      <li class="nav-item d-responsive">
        <div class="navbar-search">
          <form class="form-search form-search-sm">
            <div class="form-group">
              <input
                type="search"
                class="form-control form-control-sm input-search"
                id="header-search-example-4"
                name="header-search"
                aria-label="Ingrese su búsqueda"
                placeholder="Buscar en Buenos Aires..."
              />
              <button class="reset" type="reset"></button>
            </div>
          </form>
        </div>
      </li>
      <li class="nav-item d-responsive-logout">
        <a
          href="#"
          aria-label="Cerrar sesión"
          class="list-group-item list-group-item-logout logout-sm"
        >
          &nbsp;
        </a>
        <a
          href="#"
          aria-label="Cerrar sesión"
          class="list-group-item-logout logout-sm logout"
        >
          <span>Cerrar sesión</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</header>`;

document.body.insertAdjacentHTML("afterbegin", headerLogin);
