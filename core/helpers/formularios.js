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
const formularios = [
  { 
    infoCard: [
      { id: 1, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/formularios/inscripcion/index.html", titleCard: "Incripción", labelCard: "lorem", descriptionTemplate: "Descripción del primer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 2, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/formularios/solicitud/index.html", titleCard: "Solicitud", labelCard: "lorem", descriptionTemplate: "Descripción del segundo elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 3, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/formularios/trabaja_con_nosotros/index.html", titleCard: "Trabajá con nosotros", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 4, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/formularios/contacto/adicciones.html", titleCard: "Contacto", labelCard: "Adicciones", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 5, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/formularios/contacto/sindicatura_general.html", titleCard: "Contacto", labelCard: "Sindicatura General", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
];

const cardsHTML2 = formularios.map(item => generateInfoCardHTML(item.infoCard)).join('');

// Insertar el HTML generado en el documento
const panelContent2 = document.getElementById('panel-content-2');
panelContent2.innerHTML = cardsHTML2;
