// const banners = [...document.querySelectorAll("#images > div")]

const header = document.querySelector("header")
const aside = document.querySelector("aside")
const images = Array.from(document.querySelectorAll('.mueble img'));
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.btn');

const articles = [...document.querySelectorAll(".articles article")]
const  articlesLinks = [...document.querySelectorAll("aside a")]

const offset = 50;


// NAVBAR

const navbarFn = () => {
    articles.forEach((article, index) => {
        const articleName = new RegExp(`${article.id}`)
        const articlePos = article.getBoundingClientRect().y;

        if ((index === 0) && (articlePos > offset)) {
            header.classList.remove("hidden")
            aside.classList.add("hidden")
            articlesLinks.forEach(link => {
                link.classList.remove("active")
            })
        } else if ((index < articles.length - 1) && (articlePos <= offset) && (articles[index + 1].getBoundingClientRect().y > offset)) {
            aside.classList.remove("hidden")
            articlesLinks.forEach(link => {
                if (articleName.test(link.id)) {
                    link.classList.add("active")
                } else {
                    link.classList.remove("active")
                }
            })
            header.classList.add("hidden")
        } else if ((index === articles.length - 1) && (articlePos <= offset)) {
            aside.classList.remove("hidden")
            articlesLinks.forEach(link => {
                if (articleName.test(link.id)) {
                    link.classList.add("active")
                } else {
                    link.classList.remove("active")
                }
            })
            header.classList.add("hidden")
        }
    })
}


window.addEventListener("scroll", navbarFn)


// MODEL

images.forEach(image => {
    image.addEventListener('click', () => {
      modal.classList.add('active');
      const img = document.createElement('img');
      img.src = image.src;
      if(modal.children[1]){
        modal.removeChild(modal.children[1]);
      }
      modal.appendChild(img);
    })
  })
  
  window.addEventListener('click', (e) => {
    if(e.target === modal){
      modal.classList.remove('active');
    }
  });
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  })

  

  // BACK TO TOP

  // Seleccionamos el botón
const backToTopBtn = document.getElementById("backToTop");

// Función para mostrar/ocultar el botón
window.addEventListener("scroll", () => {
  // Puedes ajustar el valor (por ejemplo, 200) para definir cuándo debe aparecer
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Al hacer clic, vuelve a la parte superior de la página de forma suave
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// button para extender la info de los muebles

document.addEventListener("DOMContentLoaded", function () {
  function handleToggle() {
      const info = this.previousElementSibling; // Encuentra el <p> anterior al botón
      const isOpen = info.style.maxHeight && info.style.maxHeight !== "0px";

      if (isOpen) {
          info.style.maxHeight = "0px";
          this.innerHTML = "▼"; // Ícono de contraer
      } else {
          info.style.maxHeight = info.scrollHeight + "px";
          this.innerHTML = "▲"; // Ícono de expandir
      }
  }

  function applyToggle() {
      const isMobile = window.innerWidth < 768;
      document.querySelectorAll(".mueble-info").forEach((info) => {
          const paragraph = info.querySelector("p");
          let button = info.querySelector("button");

          if (isMobile) {
              paragraph.style.maxHeight = "0px"; // Oculta el texto
              if (!button) {
                  button = document.createElement("button");
                  button.innerHTML = "▼";
                  button.addEventListener("click", handleToggle);
                  info.appendChild(button);
              }
          } else {
              paragraph.style.maxHeight = "none"; // Siempre visible en pantallas grandes
              if (button) button.remove(); // Elimina el botón en pantallas grandes
          }
      });
  }

  // Ejecutar cuando cargue la página y al cambiar el tamaño
  applyToggle();
  window.addEventListener("resize", applyToggle);
});


// Mobile Menu

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".navbar-container input");
  const menuItems = document.querySelector(".menu-items");

  document.addEventListener("click", function (event) {
      const isClickInsideMenu = menuItems.contains(event.target);
      const isClickOnToggle = menuToggle === event.target;

      // Si se hace clic fuera del menú y del botón de hamburguesa, cerrarlo
      if (!isClickInsideMenu && !isClickOnToggle) {
          menuToggle.checked = false;
      }
  });

  // Cerrar el menú al hacer clic en un enlace dentro del menú
  document.querySelectorAll(".menu-items a").forEach(item => {
      item.addEventListener("click", () => {
          menuToggle.checked = false;
      });
  });
});


// Sobre Nosotros

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleText");
  const textContainer = document.querySelector(".nosotros-text");
  const section = document.getElementById("nosotros"); // Seleccionamos la sección

  toggleButton.addEventListener("click", function () {
      if (textContainer.classList.contains("expanded")) {
          textContainer.classList.remove("expanded");
          toggleButton.innerText = "Leer más";

          // Hacer scroll suave hacia la sección "Sobre Nosotros"
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
          textContainer.classList.add("expanded");
          toggleButton.innerText = "Leer menos";
      }
  });
});



// Validacion

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Bloquea el envío por defecto

      let isValid = true;

      const nombre = document.getElementById("nombre");
      const email = document.getElementById("email");
      const mensaje = document.getElementById("mensaje");

      const inputs = [nombre, email, mensaje];

      // Limpiar mensajes de error previos
      inputs.forEach(input => {
          const errorSpan = input.nextElementSibling;
          errorSpan.innerText = "";
          errorSpan.style.opacity = "0";
          input.classList.remove("input-error");
      });

      // Validar nombre
      if (nombre.value.trim() === "") {
          mostrarError(nombre, "Por favor, ingresa tu nombre.");
          isValid = false;
      }

      // Validar email con regex
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
          mostrarError(email, "Ingresa un correo válido.");
          isValid = false;
      }

      // Validar mensaje
      if (mensaje.value.trim() === "") {
          mostrarError(mensaje, "El mensaje no puede estar vacío.");
          isValid = false;
      }

      // 🚨 DEBUG: Mostrar si hay errores en la consola 🚨
      console.log("Formulario válido:", isValid);

      // Si hay errores, detener el envío
      if (!isValid) {
          return false; // 🚨 Evita el envío definitivamente
      }

      // Si todo es válido, enviar manualmente
      console.log("Formulario enviado correctamente");
      form.submit();
  });

  function mostrarError(input, mensaje) {
      const errorSpan = input.nextElementSibling;
      errorSpan.innerText = mensaje;
      errorSpan.style.opacity = "1";
      input.classList.add("input-error");
  }
});




// BANNER
// let bannerIndex = 0
// window.addEventListener("load", () => {
//     banners[0].classList.add("active-banner")
//     setInterval(() => {
//             if(bannerIndex === banners.length) {
//                 bannerIndex = 0
//             }
//             banners.forEach((banner) => {
//                 if(banner.classList.contains("active-banner")){
//                     banner.classList.toggle("active-banner")
//                 }
//             })
//             banners[bannerIndex].classList.toggle("active-banner")
//             bannerIndex++
//         }, 3500)
    
// })
