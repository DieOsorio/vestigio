// const banners = [...document.querySelectorAll("#images > div")]

const header = document.querySelector("header")
const aside = document.querySelector("aside")
const images = Array.from(document.querySelectorAll('.mueble img'));
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.btn');

const articles = [...document.querySelectorAll(".articles article")]
const  articlesLinks = [...document.querySelectorAll("aside a")]

const idioma = document.documentElement.lang;

const offset = 50;


// DETECTAR IDIOMA DEL NAVEGADOR

// Verifica si ya se ha hecho la redirección anteriormente
if (!localStorage.getItem('redireccionado')) {
    // Aquí se obtiene el idioma del navegador
    const idioma = navigator.language || navigator.userLanguage;
  
    // Verifica si el idioma es inglés o español
    if (idioma.startsWith('en')) {
      // Si el idioma es inglés, redirige a la versión en inglés
      window.location.href = './en.html';  // Reemplaza con la URL de tu página en inglés
    } else if (idioma.startsWith('es')) {
      // Si el idioma es español, redirige a la versión en español
      window.location.href = './es.html';  // Reemplaza con la URL de tu página en español
    }
  
    // Marca que ya se ha hecho la redirección para que no se ejecute nuevamente
    localStorage.setItem('redireccionado', 'true');
  }  

  
// SELECTOR DE IDIOMA 
document.getElementById('idiomaSelector').addEventListener('change', (event) => {
const idiomaSeleccionado = event.target.value;
localStorage.setItem('idiomaSeleccionado', idiomaSeleccionado);

if (idiomaSeleccionado === 'es') {
    window.location.href = './es.html'; // Redirige a la versión en español
} else if (idiomaSeleccionado === 'en') {
    window.location.href = './en.html'; // Redirige a la versión en inglés
}
});


  

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
            const info = this.closest(".mueble-info").querySelector("p");
            
            const isOpen = info.style.maxHeight === "400px";

            if (isOpen) {
                info.style.maxHeight = "0px";
                this.innerHTML = "▼";
            } else {
                info.style.maxHeight = "400px";
                this.innerHTML = "▲";
            }
        });
    });
});



// button para mostrar mas/menos muebles

document.addEventListener("DOMContentLoaded", function () {
  const verMasBtn = document.getElementById("ver-mas-btn");
  const mueblesOcultos = document.querySelectorAll(".mueble.oculto");

  verMasBtn.addEventListener("click", function () {
      const estanOcultos = [...mueblesOcultos].some(mueble => !mueble.classList.contains("mostrar"));

      mueblesOcultos.forEach(mueble => {
          mueble.classList.toggle("mostrar", estanOcultos);
      });

      if (idioma === "en") {
            this.textContent = estanOcultos ? "See Less" : "See More";
        } else {
            this.textContent = estanOcultos ? "Ver Menos" : "Ver Más";
        }

      // **Detectar a dónde hacer scroll**
      let targetMueble;
      if (estanOcultos) {
          // Si se están mostrando, ir al primer mueble que antes estaba oculto
          targetMueble = [...mueblesOcultos].find(mueble => mueble.classList.contains("mostrar"));
      } else {
          // Si se están ocultando, ir al último mueble visible antes de ocultarse
          const mueblesVisibles = document.querySelectorAll(".mueble:not(.oculto)");
          targetMueble = mueblesVisibles[mueblesVisibles.length - 1];
      }

      if (targetMueble) {
          setTimeout(() => {
              targetMueble.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300); // Esperar la animación antes de mover la vista
      }

      // **Ajustar margin-top del botón en ≤ 1300px**
      if (window.innerWidth <= 1300) {
          this.style.marginTop = estanOcultos ? "4rem" : "-160px"; 
      }
      if (window.innerWidth >= 1300) {
          this.style.marginTop = estanOcultos ? "4rem" : "-30px";
      }
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

          if (idioma === "en") {
            toggleButton.innerText = "Read More";
        } else {
            toggleButton.innerText = "Leer Más";
        }          

          // Hacer scroll suave hacia la sección "Sobre Nosotros"
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
          textContainer.classList.add("expanded");
          if (idioma === "en") {
            toggleButton.innerText = "Read Less";
        } else {
            toggleButton.innerText = "Leer Menos";
        }    
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
