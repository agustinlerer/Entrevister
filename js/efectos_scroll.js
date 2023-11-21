let logo= document.getElementById('logo');
let cirquito_left= document.getElementById('cirquito_left');
let cirquito_right= document.getElementById('cirquito_right');

window.addEventListener('scroll',()=>{
        let value= window.scrollY;
        logo.style.marginTop=value*1.5+"px"
        cirquito_left.style.marginRight=value*0.5+"px"
        cirquito_right.style.marginLeft=value*0.5+"px"
})



// Obtén todos los enlaces con la clase "scroll"
// Obtén todos los enlaces con la clase "scroll"
// Obtén todos los enlaces con la clase "scroll"
var scrollLinks = document.querySelectorAll(".scroll");

// Itera sobre los enlaces y agrega un event listener a cada uno
scrollLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtiene el objetivo de desplazamiento desde el atributo "data-target"
    var targetId = link.getAttribute("data-target");

    // Encuentra el elemento con el ID correspondiente
    var targetElement = document.getElementById(targetId);

    // Desplázate suavemente hasta el elemento con el comportamiento de inicio
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // Actualiza la URL con el ID de la sección
    history.pushState(null, "", "#" + targetId);
  });
});
