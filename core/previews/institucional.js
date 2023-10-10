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
const institucional = [
  { 
    infoCard: [
      { id: 1, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/institucional/op1.html", titleCard: "Opción 1", labelCard: "lorem", descriptionTemplate: "Descripción del primer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 2, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/institucional/op2.html", titleCard: "Opción 2", labelCard: "lorem", descriptionTemplate: "Descripción del segundo elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 3, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/institucional/op3.html", titleCard: "Opción 3", labelCard: "lorem", descriptionTemplate: "Descripción del segundo elemento" }
    ]
  },
];

const cardsHTML3 = institucional.map(item => generateInfoCardHTML(item.infoCard)).join('');

// Insertar el HTML generado en el documento
const panelContent3 = document.getElementById('panel-content-3');
panelContent3.innerHTML = cardsHTML3;
