function openPopup(src) {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('popup-img').src = src;
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.getElementById('year').textContent = new Date().getFullYear();

const bookingButton = document.querySelector('.booking button');

if (bookingButton) {
  bookingButton.addEventListener('mouseover', () => {
    bookingButton.textContent = 'Nhanh tay đặt ngay!';
    bookingButton.classList.add('pulse');
  });

  bookingButton.addEventListener('mouseout', () => {
    bookingButton.textContent = 'Đặt lịch ngay';
    bookingButton.classList.remove('pulse');
  });

  setInterval(() => {
    bookingButton.classList.add('pulse');
    setTimeout(() => bookingButton.classList.remove('pulse'), 1200);
  }, 7000);
}

const fades = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fades.forEach((fade) => {
    const top = fade.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      fade.classList.add('show');
    }
  });
});

const scriptURL =
  'https://script.google.com/macros/s/AKfycbyZJA2cUBeGop0wy1pgu0nJhlK5AtNpFRk6wkkP0rVVbZHwaKlDgijQxkhpKF-QoWo/exec';

const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      service: document.getElementById('service').value,
      note: document.getElementById('note')?.value || '',
    };

    await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    alert('Đặt lịch thành công 😄');
    bookingForm.reset();
  });
}

// Manage external placeholder for date input
(function () {
  const dateInput = document.getElementById('date');
  if (!dateInput) return;
  const dateField = dateInput.closest('.date-field');

  function update() {
    if (!dateField) return;
    if (dateInput.value) dateField.classList.add('has-value');
    else dateField.classList.remove('has-value');
  }

  dateInput.addEventListener('input', update);
  dateInput.addEventListener('change', update);
  // init
  update();
})();
