const header = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
        Saltar al contenido principal
    </a>
    <div class="container header-container">
        <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="https://gcba.github.io/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="https://gcba.github.io/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        </a>
        <div class="navbar-login-mobile">
        <a
            class="btn btn-lg btn-icon btn-outline-tertiary"
            href="#"
            target="_blank"
        >
            <span class="material-symbols-rounded" aria-hidden="true">person</span>
            <span class="btn-text">Ingresar</span>
        </a>
        </div>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent1"
        aria-controls="navbarContent1"
        aria-expanded="false"
        aria-label="Menú"
        ></button>
        <div class="collapse navbar-collapse" id="navbarContent1">
        <div class="navbar-content">
            <div class="navbar-sections">
            <nav>
                <p class="navbar-sections-title">Secciones</p>
                <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                    <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
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
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
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
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
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
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                    </div>
                </li>
                </ul>
            </nav>
            </div>
            <div class="navbar-search">
            <form class="form-search">
                <label htmlFor="header-search" class="form-label sr-only">Buscador</label>
                <div class='search-container'>
                <input type="search" class="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
                </div>
            </form>
            </div>
            <div class="navbar-login">
            <a
                class="btn btn-lg btn-outline-tertiary"
                href="#"
                target="_blank"
            >
                <span class="material-symbols-rounded" aria-hidden="true">person</span>
                <span class="btn-text">Ingresar</span>
            </a>
            </div>
        </div>
    </div>
  </div>
  <div class="header-backdrop"></div>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", header);
