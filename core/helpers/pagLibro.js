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
const pagLibro = [
  { 
    infoCard: [
      { id: 1, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_libro/index.html", titleCard: "Opción 1", labelCard: "lorem", descriptionTemplate: "Descripción del primer elemento" }
    ]
  },
];

const cardsHTML6 = pagLibro.map(item => generateInfoCardHTML(item.infoCard)).join('');

// Insertar el HTML generado en el documento
const panelContent6 = document.getElementById('panel-content-6');
panelContent6.innerHTML = cardsHTML6;
