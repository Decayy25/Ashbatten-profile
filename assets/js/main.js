// Toogle menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

window.addEventListener("resize", () => {
  renderSkills();
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
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Nextjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" },
    { name: "Arch Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg"}
  ];

  const desktopAOS = [
    "fade-up-right",
    "fade-up",
    "fade-up-left"
  ];

  const container = document.getElementById("my-skills");
  if (!container) return;

  const mobile = isMobile();

  function isMobile() {
    return window.innerWidth <= 768;
  }


  container.innerHTML = skillsData.map((skill, index) => {
    const aos = mobile
      ? "fade-up"
      : desktopAOS[index % desktopAOS.length];

    return `
      <div
        class="p-6 bg-white hover:border-2 hover:border-blue-500 shadow-lg hover:scale-105 transition rounded-2xl flex flex-col items-center text-center"
        data-aos="${aos}"
        data-aos-delay="${index * 100}"
      >
        <img src="${skill.icon}" alt="${skill.name} Icon" class="w-32 h-32 mb-4" />
        <h4 class="text-lg font-semibold">${skill.name}</h4>
      </div>
    `;
  }).join("");

  AOS.refresh();
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
  });
}