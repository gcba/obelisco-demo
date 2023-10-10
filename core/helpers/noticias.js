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
const noticias = [
  { 
    infoCard: [
      { id: 1, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/noticias/galeria.html", titleCard: "Galería de imágenes", labelCard: "lorem", descriptionTemplate: "Descripción del primer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 2, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/noticias/foco_en_accionable.html", titleCard: "Foco en accionable", labelCard: "lorem", descriptionTemplate: "Descripción del segundo elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 3, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/noticias/foco_en_texto.html", titleCard: "Foco en texto", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 4, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/noticias/foco_en_video.html", titleCard: "Foco en video", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
];

const cardsHTML4 = noticias.map(item => generateInfoCardHTML(item.infoCard)).join('');

// Insertar el HTML generado en el documento
const panelContent4 = document.getElementById('panel-content-4');
panelContent4.innerHTML = cardsHTML4;
