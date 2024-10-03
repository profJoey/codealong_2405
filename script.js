const sections = document.querySelectorAll('.section');
let currentSection = 0;

document.getElementById('scrollButton').addEventListener('click', () => {
    currentSection = (currentSection + 1) % sections.length;
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
});