const headerLogin = `<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
        Saltar al contenido principal
    </a>
    <div class="container header-container">
        <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="./../../assets/header/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="./../../assets/header/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent3"
          aria-controls="navbarContent3"
          aria-expanded="false"
          aria-label="Menú"
        ></button>
        <div class="collapse navbar-collapse" id="navbarContent3">
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
            <div class="navbar-user">
            <div class="dropdown">
                <button type="button" class="btn btn-dropdown btn-lg btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                <span class="material-symbols-rounded" aria-hidden="true">person</span>
                <span class="btn-dropdown-text ellipsis-1">Perfil</span>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#"><span class="item-text">Navegación 1</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Navegación 2</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Navegación 3</span></a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Notificaciones</span>
                    <span class="item-notifications"></span>
                </a>
                <a class="dropdown-item item-danger" href="#">
                    <span class="item-text">Cerrar sesión</span>
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div class="navbar-user-mobile">
            <nav>
            <p class="navbar-user-mobile-title">Perfil</p>
            <ul class="nav flex-column nav-pills nav-user">
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Navegación 1</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Navegación 2</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Navegación 3</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#">
                <span>Notificaciones</span>
                <span class="item-notifications"></span></a>
                </li>
                <li class="nav-item"><a class="nav-link nav-link-danger nav-link-lg" href="#">
                <div class="nav-icon">
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                    <span>Cerrar sesión</span>
                </div></a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </div>
    <div class="header-backdrop"></div>
</header>`;


document.body.insertAdjacentHTML("afterbegin", headerLogin);
