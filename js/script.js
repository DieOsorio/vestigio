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
  document.querySelectorAll(".mueble-info button").forEach(button => {
      button.addEventListener("click", function () {
          const info = document.querySelectorAll(".mueble-info p")

          info.forEach(element => {
            const isOpen = element.style.maxHeight == "400px";

            if (isOpen) {
              element.style.maxHeight = "0px";
              this.innerHTML = "▼";
            } else {
                element.style.maxHeight = "400px";
                this.innerHTML = "▲";
            }
          });
      });
  });
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
      const apellido = document.getElementById("apellido");
      const celular = document.getElementById("celular");
      const email = document.getElementById("email");
      const mensaje = document.getElementById("mensaje");
      
      const inputs = [nombre, apellido, celular, email, mensaje];
      
      // Limpiar mensajes de error previos
      inputs.forEach(input => {
          const errorSpan = input.nextElementSibling;
          if (errorSpan) {
              errorSpan.innerText = "";
              errorSpan.style.opacity = "0";
          }
          input.classList.remove("input-error");
      });
      
      // Validar nombre y apellido (solo letras, mínimo 2 caracteres)
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/.test(nombre.value.trim())) {
          mostrarError(nombre, "Ingresa un nombre válido (solo letras, mínimo 2 caracteres).");
          isValid = false;
      }
      if (apellido.value.trim() !== "" && !/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/.test(apellido.value.trim())) {
          mostrarError(apellido, "Ingresa un apellido válido (solo letras, mínimo 2 caracteres).");
          isValid = false;
      }
      
      // Validar número de celular (solo números, entre 6 y 15 dígitos)
      if (!/^[0-9]{6,15}$/.test(celular.value.trim())) {
          mostrarError(celular, "Ingresa un número válido (6-15 dígitos, sin espacios ni símbolos).");
          isValid = false;
      }
      
      // Validar email con regex
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
          mostrarError(email, "Ingresa un correo válido.");
          isValid = false;
      }
      
      // Validar mensaje (mínimo 10 caracteres)
      if (mensaje.value.trim().length < 10) {
          mostrarError(mensaje, "El mensaje debe tener al menos 10 caracteres.");
          isValid = false;
      }
      
      // Si el formulario no es válido, detener el envío
      if (!isValid) {
          return;
      }
      
      // Si todo es válido, permitir el envío
      console.log("Formulario enviado correctamente");
      form.submit();
  });
  
  function mostrarError(input, mensaje) {
      const errorSpan = input.nextElementSibling;
      if (errorSpan) {
          errorSpan.innerText = mensaje;
          errorSpan.style.opacity = "1";
      }
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
