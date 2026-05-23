 function openPopup(src){

      document.getElementById("popup").style.display = "flex";

      document.getElementById("popup-img").src = src;

    }

    function closePopup(){

      document.getElementById("popup").style.display = "none";

    }

    document.getElementById("year").textContent =
      new Date().getFullYear();
    const fades = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", ()=>{

  fades.forEach(fade => {

    const top = fade.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      fade.classList.add("show");

    }

  });

});