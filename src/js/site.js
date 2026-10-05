(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24 || !document.querySelector('.hero'));
  };

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const schedule = document.querySelector('[data-schedule]');
  const packageSelect = document.querySelector('[data-package]');
  const spotSelect = document.querySelector('[data-spot]');
  const summary = document.querySelector('[data-summary]');
  const form = document.querySelector('[data-booking-form]');
  const formMessage = document.querySelector('[data-form-message]');
  let selectedSlot = null;

  if (packageSelect) {
    const requestedPackage = new URLSearchParams(window.location.search).get('package');
    if (requestedPackage && [...packageSelect.options].some(option => option.value === requestedPackage)) {
      packageSelect.value = requestedPackage;
    }
  }

  const formatDate = date => new Intl.DateTimeFormat('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).format(date);

  const buildSlots = () => {
    if (!schedule) return;
    schedule.innerHTML = '';
    const start = new Date();
    start.setHours(12, 0, 0, 0);
    const times = ['09:00', '12:00', '15:30'];
    const badges = ['2 spots', 'available', '1 spot'];

    for (let i = 1; i <= 6; i += 1) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      const time = times[(i - 1) % times.length];
      const slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'slot';
      slot.dataset.date = formatDate(date);
      slot.dataset.time = time;
      slot.innerHTML = `<span class="slot-badge">${badges[(i - 1) % badges.length]}</span><strong>${formatDate(date)}</strong><span>${time} • demo window</span>`;
      slot.addEventListener('click', () => {
        schedule.querySelectorAll('.slot').forEach(item => item.classList.remove('is-selected'));
        slot.classList.add('is-selected');
        selectedSlot = { date: slot.dataset.date, time: slot.dataset.time };
        updateSummary();
      });
      schedule.appendChild(slot);
    }
  };

  const packageNames = {
    discovery: 'Discovery — 2h',
    beginner: 'Zero to Water Start — 3 × 2h',
    private: 'Private Session — 2h'
  };

  const updateSummary = () => {
    if (!summary || !packageSelect || !spotSelect) return;
    const chosenPackage = packageNames[packageSelect.value] || packageSelect.options[packageSelect.selectedIndex].text;
    const slotText = selectedSlot ? `${selectedSlot.date}, ${selectedSlot.time}` : 'choose a time slot';
    summary.innerHTML = `<strong>Your selection</strong><p>${chosenPackage} • ${spotSelect.value} • ${slotText}</p>`;
  };

  if (schedule) {
    buildSlots();
    updateSummary();
    packageSelect?.addEventListener('change', updateSummary);
    spotSelect?.addEventListener('change', updateSummary);
  }

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!selectedSlot) {
        formMessage.textContent = 'Choose a demo lesson window first. Nothing has been sent.';
        formMessage.style.color = '#9a5b18';
        return;
      }
      const firstName = document.querySelector('#firstName')?.value.trim() || 'Rider';
      formMessage.textContent = `${firstName}, your prototype reservation is ready to review: ${selectedSlot.date} at ${selectedSlot.time}. No data was sent and no real booking was created.`;
      formMessage.style.color = '#0c8791';
    });
  }
})();
