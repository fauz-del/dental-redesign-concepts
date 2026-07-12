document.getElementById('logoText').textContent = `${clinicData.name1} ${clinicData.name2}`;

document.getElementById('nav').innerHTML = clinicData.navLinks
  .map(link => `<a href="#${link.toLowerCase().replace(' ', '-')}">${link}</a>`)
  .join('');

document.getElementById('headerCta').textContent = clinicData.heroCtaText;

document.getElementById('heroEyebrow').textContent = clinicData.heroEyebrow;
document.getElementById('heroTitle').innerHTML = clinicData.heroTitle;
document.getElementById('heroDesc').textContent = clinicData.heroDesc;
document.getElementById('heroCta').textContent = clinicData.heroCtaText;
document.getElementById('heroSecondary').textContent = clinicData.heroSecondary;
document.getElementById('heroImg').src = clinicData.heroImg;

document.getElementById('slotLabel').textContent = clinicData.heroCardLabel;
document.getElementById('slotDay').textContent = clinicData.heroCardDay;
document.getElementById('slotTime').textContent = clinicData.heroCardTime;

document.getElementById('heroStats').innerHTML = `
  <div><p class="stat-val">${clinicData.stat1Val}</p><p class="stat-label">${clinicData.stat1Label}</p></div>
  <div><p class="stat-val">${clinicData.stat2Val}</p><p class="stat-label">${clinicData.stat2Label}</p></div>
  <div><p class="stat-val">${clinicData.stat3Val}</p><p class="stat-label">${clinicData.stat3Label}</p></div>
`;

document.getElementById('aboutImg').src = clinicData.aboutImg;
document.getElementById('aboutBadgeVal').textContent = clinicData.aboutBadgeVal;
document.getElementById('aboutBadgeLabel').textContent = clinicData.aboutBadgeLabel;
document.getElementById('aboutEyebrow').textContent = clinicData.aboutEyebrow;
document.getElementById('aboutTitle').innerHTML = clinicData.aboutTitle;
document.getElementById('aboutDesc').textContent = clinicData.aboutDesc;
document.getElementById('aboutPoints').innerHTML = clinicData.aboutPoints
  .map(p => `<li>${p}</li>`)
  .join('');

document.getElementById('servicesGrid').innerHTML = clinicData.services.map(s => `
  <div class="service-card">
    <img src="${s.img}" alt="${s.title}">
    <div class="service-icon-badge"><i class="fa-solid ${s.icon}"></i></div>
    <div class="service-overlay">
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  </div>
`).join('');

document.getElementById('doctorsGrid').innerHTML = clinicData.doctors.map(d => `
  <div class="doctor-card">
    <img src="${d.img}" alt="${d.name}">
    <div class="doctor-info">
      <h3>${d.name}</h3>
      <p>${d.role}</p>
      <p class="doctor-meta">${d.experience} experience</p>
      <p class="doctor-meta">${d.qualifications}</p>
      <div class="doctor-rating"><i class="fa-solid fa-star"></i> ${d.rating}</div>
    </div>
  </div>
`).join('');

document.getElementById('reviewsGrid').innerHTML = clinicData.reviews.map(r => `
  <div class="review-card">
    <div class="review-header">
      <img class="review-avatar" src="${r.img}" alt="${r.name}">
      <div>
        <p class="review-name">${r.name}</p>
        <p class="review-loc">${r.loc}</p>
      </div>
    </div>
    <div class="review-stars">${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}</div>
    <p class="review-text">"${r.text}"</p>
  </div>
`).join('');

document.getElementById('contactTitle').textContent = clinicData.contactTitle;
document.getElementById('contactDesc').textContent = clinicData.contactDesc;
document.getElementById('contactPhone').textContent = clinicData.phone;
document.getElementById('contactEmail').textContent = clinicData.email;
document.getElementById('contactLocation').textContent = clinicData.location;

document.getElementById('formServiceSelect').innerHTML = clinicData.formServices
  .map(s => `<option>${s}</option>`)
  .join('');

document.getElementById('footerLogo').textContent = `${clinicData.name1} ${clinicData.name2}`;
document.getElementById('footerDesc').textContent = clinicData.footerDesc;
document.getElementById('footerNav').innerHTML = clinicData.navLinks
  .map(l => `<a href="#${l.toLowerCase().replace(' ', '-')}">${l}</a>`)
  .join('');
document.getElementById('footerPhone').textContent = clinicData.phone;
document.getElementById('footerEmail').textContent = clinicData.email;
document.getElementById('footerMaps').href = clinicData.mapsUrl;
document.getElementById('footerMaps').textContent = clinicData.location;
document.getElementById('footerTagline').textContent = clinicData.footerTagline;

// Header shadow on scroll
const siteHeader = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll-reveal for sections
document.querySelectorAll('section').forEach(sec => sec.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// FAQ accordion
document.getElementById('faqList').innerHTML = clinicData.faqs.map((f, i) => `
  <div class="faq-item" data-index="${i}">
    <div class="faq-question">
      <span>${f.q}</span>
      <i class="fa-solid fa-plus"></i>
    </div>
    <div class="faq-answer"><p>${f.a}</p></div>
  </div>
`).join('');

document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

document.getElementById('footerAddress').textContent = clinicData.address;

document.getElementById('footerHours').innerHTML = clinicData.hours
  .map(h => `<div class="footer-hours-row"><span>${h.day}</span><span>${h.time}</span></div>`)
  .join('');

document.getElementById('footerSocial').innerHTML = clinicData.social
  .map(s => `<a href="${s.url}" target="_blank"><i class="fa-brands ${s.icon}"></i></a>`)
  .join('');
