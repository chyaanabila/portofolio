let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a'); // Pilih semua link di dalam header nav

window.onscroll = () => {
  const sections = document.querySelectorAll('section'); // Gunakan querySelectorAll untuk beberapa section

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150; // Sesuaikan offset sesuai kebutuhan
    const height = sec.offsetHeight;
    const id = sec.id; // Akses ID secara langsung

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href').slice(1) === id) { // Gunakan slice(1) untuk menghilangkan tanda '#'
          link.classList.add('active');
        }
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

function toggleFullContent() {
  var motivation = document.querySelector('.article .motivation');
  motivation.classList.toggle('collapsed');
}
