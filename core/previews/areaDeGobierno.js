// Función para generar el HTML del contenido dentro de <div class="box-preview">
function generatePreviewHTML(infoCard) {
  return `
    <div class="box-preview col-12 col-lg-8">
      <h1>${infoCard.titleTemplate}</h1>
      <a href="#" class="box-img-preview">
        <img src="${infoCard.imgSrc}" class="img-preview" alt="" />
      </a>

      <nav class="tabs-slider" aria-label="Simple tab list">
        <ul class="nav nav-pills tabs" id="simple-myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              data-toggle="tab"
              data-target="#panel-content-99"
              type="button"
              role="tab"
              aria-controls="panel-content-99"
              aria-selected="false"
              aria-selected="true"
            >
              Descripción
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              data-toggle="tab"
              data-target="#panel-content-98"
              type="button"
              role="tab"
              aria-controls="panel-content-98"
              aria-selected="false"
            >
              Pestaña 2
            </button>
          </li>
        </ul>
      </nav>
      <div class="tab-content" id="simple-myTabContent">
        <div
          class="tab-pane fade show active"
          id="panel-content-99"
          role="tabpanel"
          aria-label="1-tab"
        >
          <section>
            <p>
              Con este template buscamos mejorar la experiencia de las personas a la hora de navegar nuestro sitio web.
              Buscamos crear jerarquías claras de contenido donde se aplique el sistema de diseño Obelisco.
              Esta guía tiene como fin orientar a quienes trabajan como webmasters para que sepan qué tipo de componente se utiliza en las distintas casuísticas.
              Si bien se contempla la máxima de contenido en esta propuesta, pueden ir quitando aquellos bloques que consideren que no se adaptan al contenido de la página.
            </p>
            
            <p>
              <strong>¡Comencemos!</strong>
            </p>
            
            <h2 class="my-4">¿A qué llamamos nivel 2?</h2>
            
            <p>
              Se llama segundo nivel de navegación a toda página que se desprenda de los atajos de las home de Ministerios.
              <br />
              Son páginas que por su contenido funcionan como nexo a más información de un área específica y buscan mostrar los destacados, programas y servicios.
            </p>
            
            <h2 class="my-4">¿Qué debe tener una página de nivel 2?</h2>
            
            <p>
                Los bloques de contenido son los siguientes:
            </p>
            
            <h3 class="my-4">Header</h3>
            
            <ul>
              <li>
                <p>Migas de pan que nos indican el camino recorrido hasta llegar a dónde estamos navegando.</p>
              </li>
              <li>
                <p>Título</p>
              </li>
              <li>
                <p>Bajada</p>
              </li>
              <li>
                <p>Desplegables de “Institucional” y/o “Transparencia activa”. Evitamos sumar más desplegables. La idea de este bloque es que sea la presentación de lo que las personas encontrarán al seguir scrolleando.</p>
              </li>
            </ul>
            
            <h3 class="my-4">Accesos rápidos / destacados</h3>
            
            <h4 class="my-4">Contexto de uso</h4>
            
            <p>
                El propósito de la sección es acercar al usuario las principales acciones que el área considere relevantes para interactuar. Es importante mencionar que cuantas más opciones haya, más va a demorar el usuario en decidirse por la acción, por lo tanto es primordial que el área tenga una <strong>elección clara en el contenido de las tarjetas destacadas</strong>.
            </p>
            
            <h4 class="my-4">Encabezado</h4>
            
            <p>
                Llevan un título que puede ser “Accesos rápidos” o “Destacados”, siempre haciendo referencia que esos son los destacados de la página.
            </p>
            
            <h4 class="my-4">Variante de componente</h4>
            
            <p>
                Se utiliza la tarjeta horizontal con ícono con la alineación interna al borde superior izquierdo. Sugerimos que tanto el título como la bajada no lleve más de dos líneas.
            </p>
            
            <h5 class="my-4">Malas prácticas</h5>
            
            <ul>
                <li>
                  <p>Generar puntos de tensión en la lectura y desequilibrio visual en el inicio de la página. En las situaciones en las que haya tres tarjetas en la primera línea y una por debajo, recomendamos reubicar la última tarjeta en la sección que corresponda y velar por el equilibrio en la página.</p>
                </li>
                <li>
                  <p>Presentar sólo dos opciones como destacadas. En estas situaciones, recomendamos preservar la simetría y el equilibrio al inicio de la página ya que un diseño agradable crea respuestas positivas en el cerebro de las personas. Por lo tanto, considerar incluir una tercera tarjeta con contenido relevante para los usuarios.</p>
                </li>
                <li>
                  <p>Creer que todo es importante para destacar. No recomendamos tener más de 6 tarjetas destacadas, ya que el tiempo que lleva tomar una decisión aumenta con el número y la complejidad de las opciones.</p>
                  <blockquote>
                      <p>En las situaciones que haya 6 tarjetas destacadas recomendamos colocar los elementos menos importantes en medio de la lista y las acciones claves en los extremos izquierdo y derecho para aumentar la memorización.</p>
                  </blockquote>
                </li>
                <li>
                  <p>Desplegables de “Institucional” y/o “Transparencia activa”. Evitamos sumar más desplegables. La idea de este bloque es que sea la presentación de lo que las personas encontrarán al seguir scrolleando.</p>
                </li>
            </ul>
          </section>

          <section class="mt-5">
            <h2 class="my-4">Programas</h2>
            <p>
              Los programas son contenido de valor que crean desde las distintas áreas de gobierno para acercarse a los vecinos, para promover su trabajo o las políticas que llevan adelante durante su gestión. Por eso es que para este tipo de contenidos se utilizan las tarjetas horizontales con imagen.
            </p>
            
            <p>
              Esta agrupación de tarjetas de programas siempre llevan un título que haga referencia a dicho grupo.
            </p>
            
            <h2 class="my-4">Servicios</h2>
            
            <p>
              Son aquellas acciones proporcionadas por el gobierno para satisfacer necesidades públicas y mejorar la calidad de vida de los/as ciudadanos/as y residentes de la Ciudad de Buenos Aires.
            </p>
            
            <p>
              La agrupación de estas tarjetas lleva un título “Servicios” o “Nuestros servicios” y se utiliza el acceso solo con título. Se utilizan en grilla de tres columnas por fila.
            </p>
            
            <div class="section-panel">
              <h2 class="my-4">Destacados</h2>
              <p>
                En caso que haya contenido a destacar tenemos dos variantes disponibles del template.
              </p>
              
              <h3 class="my-4">Un solo destacado</h3>
              
              <p>
                Se utiliza el destacado con fondo. Compuesto de título, bajada y accionable con el fondo grisulado. Para los accionables hay tres variantes: enlace, acceso y botón primario. Se elegirá el accionable acorde al tipo de contenido.
              </p>
              
              <h3 class="my-4">Dos destacados</h3>
              
              <p>
                Se utiliza el panel vertical. Se posicionan ambos destacados uno al lado del otro, debajo de los servicios.
              </p>
            </div>
            
            <h2 class="my-4">Noticias</h2>
            
            <p>
              Se utilizan tarjetas de noticia con etiquetas y fecha. Se muestran tres por página, con el enlace de ver todas las noticias.
            </p>
            
            <div class="section-institutional">
              <h2 class="my-4">Institucional</h2>
              <p>
                Este bloque se compone de la siguiente información.
              </p>
              
              <h3>Título: Información Institucional.</h3>
              
              <p>Nombre del funcionario/a a cargo.</p>
              
              <p>Cargo</p>
              
              <h3>Contacto</h3>
              
              <p>Teléfono de contacto</p>
              
              <p>Correo electrónico</p>
              
              <p>
                  La información institucional se aplica siempre y cuando el área tenga un funcionario a cargo. En caso de que no haya alguna persona con este rol, este bloque de información no debe incluirse y van únicamente las redes sociales.
              </p>
              
              <h3>Título: Redes sociales</h3>
              
              <p classs="mb-4">
                  Facebook   /   Instagram   /   X   /   YouTube
              </p>
              
              <p>
                Se utiliza el acceso con iconografía correspondiente a la red social y título.
              </p>
            </div>
          </section>

          <img src="${infoCard.imgExampleSrc}" class="img-preview" alt="" />
        </div>
        <div
          class="tab-pane fade"
          id="panel-content-98"
          role="tabpanel"
          aria-label="2-tab"
        >
          Contenido Pestaña 2
        </div>
      </div>
    </div>
  `;
}

// Usar la función para generar el HTML
const areaDeGobierno = [
  {
    infoCard: {
      id: 1,
      titleTemplate: "Página de área - Área de Gobierno - Segundo Nivel",
      imgSrc:
        "https://themes.getbootstrap.com/wp-content/uploads/2023/09/phoenix-react-v1.0.0.jpg",
    },
  },
  // {
  //   infoCard:
  //     {
  //       id: 2,
  //       titleTemplate: "lorem lorem ipsum dolor sit amet, consectetur",
  //       descriptionTemplate: "Descripción del primer elemento" ,
  //       imgSrc: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg"
  //     }
  // },
  // {
  //   infoCard:
  //     {
  //       id: 3,
  //       titleTemplate: "lorem lorem ipsum dolor sit amet, consectetur",
  //       descriptionTemplate: "Descripción del primer elemento" ,
  //       imgSrc: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg"
  //     }
  // },
  // {
  //   infoCard:
  //     {
  //       id: 4,
  //       titleTemplate: "lorem lorem ipsum dolor sit amet, consectetur",
  //       descriptionTemplate: "Descripción del primer elemento" ,
  //       imgSrc: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg"
  //     }
  // },
];

const cardsHTMLPreview = areaDeGobierno
  .map((item) => generatePreviewHTML(item.infoCard))
  .join("");

const contentPreview = document.getElementById("content-preview");
contentPreview.innerHTML = cardsHTMLPreview;
