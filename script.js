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

// Dynamic service description for booking form
(function () {
  const serviceSelect = document.getElementById('service');
  const descEl = document.getElementById('service-description');
  if (!serviceSelect || !descEl) return;

  const descriptions = {
    'Giản Cơ Trị Liệu (Thân Trên)':
      'Tập trung giãn cơ vùng cổ, vai và lưng trên — giảm đau cổ-vai-gáy, cải thiện tư thế và tăng lưu thông máu vùng trên cơ thể.',
    'Giản Cơ Trị Liệu (Thân Dưới)':
      'Giãn cơ mông, hông, đùi và lưng dưới — hỗ trợ giảm đau lưng do ngồi lâu, căng cơ sau vận động và cải thiện linh hoạt.',
    'Giản Cơ Trị Liệu (Toàn Thân)':
      'Liệu trình toàn thân kết hợp kỹ thuật giãn cơ cho các nhóm cơ chính, phù hợp khi bạn cần phục hồi tổng thể và cân bằng lại cơ thể.',
    'Trị Liệu Phục Hồi':
      'Phục hồi chức năng, giảm viêm và giảm nguy cơ chấn thương — bao gồm đánh giá triệu chứng và lộ trình điều trị cá nhân hóa.'
  };

  function update() {
    const key = serviceSelect.value || '';
    const text = descriptions[key] || '';
    descEl.textContent = text;
    descEl.style.display = text ? 'block' : 'none';
  }

  serviceSelect.addEventListener('change', update);
  // init on load in case a value is preselected
  update();
})();
