// Toogle menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Scroll Header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 650) {
    header.classList.add('bg-gray-700', 'bg-opacity-80');
  } else {
    header.classList.remove('bg-gray-700', 'bg-opacity-80');
  }
});

// Contact Form
const contactForm = document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = e.target[0].value
  const email = e.target[1].value
  const message = e.target[2].value
  
  const response = await fetch('http://localhost:3000/contact', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, email, message })
  });

  const result = await response.json();
  alert(result.message);
});

function renderPortfolio() {
  const portfolioData = [
    {
      title: "Math-formula",
      desc: "create a way to find the answer key to a math problem",
      link: "https://math-formulav4.vercel.app/",
      source_code: "https://github.com/Decayy25/math-formula.git"
    },
    {
      title: "Gacha-Khodam",
      desc: "only for joke with friends, to summon khodam using gacha system.",
      link: "https://gacha-khodam-iota.vercel.app/",
      source_code: "https://github.com/Decayy25/Gacha-Khodam.git"
    },
    {
      title: "tic-tac-toe",
      desc: "A simple tic tac toe game using C++ programming language.",
      link: "#",
      source_code: "https://github.com/Decayy25/tic-tac-toe"
    },
    {
      title: "E-Commerce Website",
      desc: "A simple e-commerce website using HTML, CSS, Tailwind, and JavaScript.",
      link: "https://simple-e-commerce-sigma-liard.vercel.app/",
      source_code: "https://github.com/Decayy25/my-quest-from-teacher.git"
    },
  ];

  const container = document.getElementById('my-project');
  if (!container) return;

  container.innerHTML = portfolioData.map((item, index) => `
    <div 
      class="p-8 bg-white rounded-2xl border-1 border-gray-200 shadow"
      data-aos="fade-up"
      data-aos-delay="${index * 100}"
    >
      <h3 class="text-xl font-semibold">${item.title}</h3>
      <p class="text-gray-600 mt-2">${item.desc}</p>
      <div class="mt-4 flex justify-between">
        <a href="${item.link}" class="portfolio-link text-blue-500" target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
        <a href="${item.source_code}" class="portfolio-link text-blue-500" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  `).join('');

  AOS.refresh();
}

// Langguage & Framework Section
function renderSkills() {
  const skillsData = [
    { name: "TypeScript", aos: 'fade-up', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", aos: 'fade-left', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "C++", aos: 'fade-down', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" },
    { name: "Git", aos: 'fade-up', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" },
    { name: "React", aos: 'fade-left', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", aos: 'fade-down', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
    { name: "MongoDB", aos: 'fade-right', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" },
    { name: "Express", aos: 'fade-right', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Nextjs", aos: 'fade-down', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "React Native", aos: 'fade-right', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" },
  ];

  const container = document.getElementById('my-skills');
  if (!container) return;
  container.innerHTML = skillsData.map((skill, index) => `
    <div 
      class="p-6 bg-white hover:border-2 hover:border-blue-500 p-6 shadow-lg hover:scale-105 transition rounded-2xl flex flex-col items-center text-center"
      data-aos="${skill.aos}"
      data-aos-delay="${index * 100}"
    >
      <img src="${skill.icon}" alt="${skill.name} Icon" class="w-32 h-32 mb-4" />
      <h4 class="text-lg font-semibold">${skill.name}</h4>
    </div>
  `).join('');
  AOS.refresh();
}

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  renderSkills();
});
AOS.init({
  duration: 800,
  easing: 'slide',
  once: true,
});
