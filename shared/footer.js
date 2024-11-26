const footer = `
<h2 class="sr-only">Navegación de pie de página</h2>
<footer class="main-footer">
  <div class="container">
    <section>
      <h3>Teléfonos útiles</h3>
      <ul class="list-inline">
        <li class="list-inline-item phone-items">
          <a href="tel:102">102 - Niñez y Adolescencia</a>
        </li>
        <li class="list-inline-item phone-items">
          <a href="tel:103">103 - Emergencias</a>
        </li>
        <li class="list-inline-item phone-items">
          <a href="tel:107">107 - SAME</a>
        </li>
        <li class="list-inline-item phone-items">
          <a href="tel:911">911 - Policía</a>
        </li>
        <li class="list-inline-item phone-items">
          <a href="tel:144">144 - Violencia de género</a>
        </li>
        <li class="list-inline-item phone-items">
          <a href="tel:147">147 - Atención ciudadana</a>
        </li>
      </ul>
      <a href="https://buenosaires.gob.ar/inicio/telefonos">
        Ver todos los teléfonos
      </a>
    </section>
    <section>
      <h3>Redes de la ciudad</h3>
      <ul class="list-inline">
        <li class="list-inline-item redes-items">
          <a href="https://www.facebook.com/GCBA">
            <i class="o-icon bx bxl-facebook-circle"></i>
            Facebook
          </a>
        </li>
        <li class="list-inline-item redes-items">
          <a href="https://www.instagram.com/gcba/">
            <i class="o-icon bx bxl-instagram-alt"></i>
            Instagram
          </a>
        </li>
        <li class="list-inline-item redes-items">
          <a href="https://x.com/gcba">
            <img src="https://gcba.github.io/Obelisco-V2/images/rrss_x.svg" class="o-icon" alt="x" />
            X
          </a>
        </li>
        <li class="list-inline-item redes-items">
          <a href="https://www.youtube.com/user/GCBA">
            <i class="o-icon bx bxl-youtube"></i>
            YouTube
          </a>
        </li>
        <li class="list-inline-item redes-items">
          <a
            href="https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires"
          >
            <i class="o-icon bx bxl-linkedin-square"></i>
            LinkedIn
          </a>
        </li>
        <li class="list-inline-item redes-items">
          <a href="https://www.tiktok.com/@buenosaires">
            <i class="o-icon bx bxl-tiktok"></i>
            TikTok
          </a>
        </li>
        <li class="list-inline-item redes-items">
          <a href="https://www.pinterest.es/buenosaires/">
            <i class="o-icon bx bxl-pinterest"></i>
            Pinterest
          </a>
        </li>
      </ul>
    </section>
  </div>
  <hr class="divider" />
  <div class="container">
    <section class="footer-legal-section">
      <h3 class="sr-only">Información gubernamental</h3>
      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-xl-4 footer-content-img">
          <img
            class="d-md-none"
            src="https://gcba.github.io/Obelisco-V2/images/logo-footer-mobile.svg"
            alt="Logo de Ciudad de Buenos Aires"
            height="48"
          />
          <img
            class="d-none d-md-inline"
            src="https://gcba.github.io/Obelisco-V2/images/logo-footer.svg"
            alt="Logo de Ciudad de Buenos Aires"
            height="40"
          />
          <img
            class="img-vamos-ba"
            src="https://gcba.github.io/Obelisco-V2/images/logo-footer-ba.svg"
            alt="Logo de Vamos Buenos Aires"
          />
        </div>
        <div class="col-12">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://boletinoficial.buenosaires.gob.ar">
                Boletín oficial
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://buenosaires.gob.ar/inicio/terminos-y-condiciones"
              >
                Términos y condiciones
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://buenosaires.gob.ar/inicio/privacidad">
                Política de privacidad
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales"
              >
                Oficios judiciales
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.buenosaires.gob.ar/gobierno/transparencia">
                Transparencia
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="footer-license-text">
        Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
        Commons Reconocimiento 2.5 Argentina License.
      </div>
    </section>
  </div>
</footer>
`;

document.body.children[1].insertAdjacentHTML("afterend", footer);

