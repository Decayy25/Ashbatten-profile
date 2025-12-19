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
    header.classList.add('bg-gray-900', 'bg-opacity-80');
  } else {
    header.classList.remove('bg-gray-900', 'bg-opacity-80');
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
      link: "mini-project/JavaScript/Math-formula/index.html",
      source_code: "https://github.com/Decayy25/math-formula.git"
    },
    {
      title: "Gacha-box",
      desc: "This system is often used in gacha games such as Counter Strike 2 and others.",
      link: "#",
      source_code: "https://github.com/Decayy25/Gacha-Box-in-a-game.git"
    },
    {
      title: "Gacha-Khodam",
      desc: "only for joke with friends, to summon khodam using gacha system.",
      link: "mini-project/JavaScript/Gacha-Khodam/index.html",
      source_code: "https://github.com/Decayy25/Gacha-Khodam.git"
    },
    {
      title: "Brute-force",
      desc: "A program that can find out passwords using the brute-force method.",
      link: "#",
      source_code: "https://github.com/Decayy25/Brute-force"
    },
    {
      title: "tic-tac-toe",
      desc: "A simple tic tac toe game using C++ programming language.",
      link: "#",
      source_code: "https://github.com/Decayy25/tic-tac-toe"
    },
    {
      title: "Quiz-game",
      desc: "A simple quiz game using C++ programming language.",
      link: "#",
      source_code: "https://github.com/Decayy25/Quiz-game"
    }
  ];

  const container = document.getElementById('my-portfolio');
  if (!container) return;

  container.innerHTML = portfolioData.map((item, index) => `
    <div 
      class="p-4 bg-white rounded shadow"
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
