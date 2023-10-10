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
const pagSimple = [
  { 
    infoCard: [
      { id: 1, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_simple/pagina_simple_op1/opcion-1.html", titleCard: "Opción 1", labelCard: "lorem", descriptionTemplate: "Descripción del primer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 2, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_simple/pagina_simple_op2/index.html", titleCard: "Opción 2", labelCard: "lorem", descriptionTemplate: "Descripción del segundo elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 3, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_simple/pagina_simple_op3/index.html", titleCard: "Opción 3", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 4, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_simple/pagina_simple_op4/index.html", titleCard: "Opción 4", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
  { 
    infoCard: [
      { id: 5, imgSrc: "https://booking.webestica.com/landing/assets/images/demos/01.jpg", route: "./templates/pagina_simple/pagina_simple_op5/index.html", titleCard: "Opción 5", labelCard: "lorem", descriptionTemplate: "Descripción del tercer elemento" }
    ]
  },
];

const cardsHTML7 = pagSimple.map(item => generateInfoCardHTML(item.infoCard)).join('');

// Insertar el HTML generado en el documento
const panelContent7 = document.getElementById('panel-content-7');
panelContent7.innerHTML = cardsHTML7;