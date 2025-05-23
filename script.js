// Project Filter Functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons && projectCards) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Contact Form Validation
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (form && formMessage) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value;
      const email = document.getElementById('email')?.value;
      const message = document.getElementById('message')?.value;

      if (name && email && message) {
        formMessage.classList.remove('hidden', 'text-red-400');
        formMessage.classList.add('text-green-400');
        formMessage.textContent = 'Message sent successfully!';
        form.reset();
      } else {
        formMessage.classList.remove('hidden', 'text-green-400');
        formMessage.classList.add('text-red-400');
        formMessage.textContent = 'Please fill out all fields.';
      }
    });
  }
});
// Highlight current page link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const currentPage = location.pathname.split("/").pop(); // e.g. about.html

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("border-b-2", "border-blue-400", "pb-1");
    }
  });
});
