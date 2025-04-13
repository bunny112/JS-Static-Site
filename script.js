const app = document.getElementById('app');

// Header
const header = document.createElement('header');
header.innerHTML = `
  <h1>My JS-Only Static Site</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
`;
app.appendChild(header);

// Main
const main = document.createElement('main');
const section = document.createElement('section');

const heading = document.createElement('h2');
heading.textContent = 'Welcome!';
section.appendChild(heading);

const paragraph = document.createElement('p');
paragraph.textContent = 'This site was created entirely using JavaScript!';
section.appendChild(paragraph);

const button = document.createElement('button');
button.textContent = 'Click Me';
button.addEventListener('click', () => {
  alert('JS DOM Power! 💥');
});
section.appendChild(button);

main.appendChild(section);
app.appendChild(main);

// Footer
const footer = document.createElement('footer');
footer.innerHTML = `<p>&copy; 2025 JS Only Site</p>`;
app.appendChild(footer);

