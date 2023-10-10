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
const pagAreas = [
  { 
    infoCard: [
      { id: 1, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_area/cultura/index.html", titleCard: "Cultura", labelCard: "lorem", descriptionTemplate: "Descripción del primer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 2, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_area/educacion/index.html", titleCard: "Educación", labelCard: "lorem", descriptionTemplate: "Descripción del segundo elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 3, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_area/justicia_y_seguridad/index.html", titleCard: "Justicia y Seguridad", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 4, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_area/museo/index.html", titleCard: "Museo", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
];

const cardsHTML5 = pagAreas.map(item => generateInfoCardHTML(item.infoCard)).join('');

// Insertar el HTML generado en el documento
const panelContent5 = document.getElementById('panel-content-5');
panelContent5.innerHTML = cardsHTML5;
