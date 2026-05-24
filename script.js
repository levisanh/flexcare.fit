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

  const scriptURL =
"https://script.google.com/macros/s/AKfycbyZJA2cUBeGop0wy1pgu0nJhlK5AtNpFRk6wkkP0rVVbZHwaKlDgijQxkhpKF-QoWo/exec";

document
.getElementById("booking-form")
.addEventListener("submit", async (e)=>{

  e.preventDefault();

  const data = {

    name:
    document.getElementById("name").value,

    phone:
    document.getElementById("phone").value,

    date:
    document.getElementById("date").value,

    service:
    document.getElementById("service").value,

    time:
    document.getElementById("time").value

  };

  await fetch(scriptURL, {

    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)

  });

  alert("Đặt lịch thành công 😄");

  document
  .getElementById("booking-form")
  .reset();

});