// Función para generar el HTML del contenido dentro de <div class="box-preview">
function generatePreviewHTML(infoCard) {
  return `
    <div class="box-preview">
      <h1>${infoCard.titleTemplate}</h1>
      <div class="box-img-preview">
        <img src="${infoCard.imgSrc}" class="img-preview" alt="" />
      </div>

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
              Pestaña 1
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
          <p class="lead">${infoCard.descriptionTemplate}</p>
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

function generateInfoCardHTML(infoCard) {
  return `
    <div class="card-container" id="cards-container">
      ${infoCard.map(card => `
        <a class="thumbnail-image-card" href="${card.route}">
          <div class="box-img">
            <img src="${card.imgSrc}" class="" alt="" />
          </div>
          <div class="thumbnail-image-card-body">
            <h3>
              ${card.titleCard}
            </h3>
            <small>${card.labelCard}</small>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

// Usar la función para generar el HTML
const areaDeGobierno = [
  { 
    infoCard: [
      { id: 1, 
        imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", 
        route: "../preview.html", 
        titleCard: "Primer nivel", 
        labelCard: "Opción 1", 
        titleTemplate: "lorem lorem ipsum dolor sit amet, consectetur",
        descriptionTemplate: "Descripción del primer elemento" ,
        imgExampleSrc: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg"
      }
    ]
  },
  { 
    infoCard: [
      { id: 2, 
        imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", 
        route: "./templates/pagina_area/area_de_gobierno_1_nivel/op2.html", 
        titleCard: "Primer nivel", 
        labelCard: "Opción 2", 
        titleTemplate: "lorem lorem ipsum dolor sit amet, consectetur 2",
        descriptionTemplate: "Descripción del primer elemento" ,
        imgExampleSrc: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg" 
      }
    ]
  },
  { 
    infoCard: [
      { id: 3, 
        imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", 
        route: "./templates/pagina_area/area_de_gobierno_2_nivel/op1.html", 
        titleCard: "Segundo nivel", 
        labelCard: "Opción 1", 
        titleTemplate: "lorem lorem ipsum dolor sit amet, consectetur 3",
        descriptionTemplate: "Descripción del primer elemento" ,
        imgExampleSrc: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg"
      }
    ]
  },
  { 
    infoCard: [
      { id: 4, 
        imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", 
        route: "./templates/pagina_area/area_de_gobierno_2_nivel/op1.html", 
        titleCard: "Segundo nivel", 
        labelCard: "Opción 2", 
        titleTemplate: "lorem lorem ipsum dolor sit amet, consectetur 4",
        descriptionTemplate: "Descripción del primer elemento" ,
        imgExampleSrc: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg"

      }
    ]
  },
];

const cardsHTML = areaDeGobierno.map(item => generateInfoCardHTML(item.infoCard)).join('');

// Insertar el HTML generado en el documento
const panelContent1 = document.getElementById('panel-content-1');
panelContent1.innerHTML = cardsHTML;
// document.getElementById('cards-container').innerHTML = cardsHTML;

// Cambia el ID a 'content-preview' en lugar de 'panel-content-1'
const cardsHTMLPreview = areaDeGobierno.map(item => generatePreviewHTML(item.infoCard)).join('');

const contentPreview = document.getElementById('content-preview');
contentPreview.innerHTML = cardsHTMLPreview;
