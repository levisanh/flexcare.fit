 function openPopup(src){

      document.getElementById("popup").style.display = "flex";

      document.getElementById("popup-img").src = src;

    }

    function closePopup(){

      document.getElementById("popup").style.display = "none";

    }

    document.getElementById("year").textContent =
      new Date().getFullYear();
