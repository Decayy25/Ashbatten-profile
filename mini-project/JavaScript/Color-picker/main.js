const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");
const hexCode = document.getElementById("hexCode");
const copyBtn = document.getElementById("copyBtn");
const randomBtn = document.getElementById("randomBtn");
const copyMsg = document.getElementById("copyMsg");

// Ubah warna saat dipilih
colorPicker.addEventListener("input", () => {
  const color = colorPicker.value;
  updateColor(color);
});

// Copy kode warna
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCode.textContent)
.then(() => {
  copyMsg.classList.remove("hidden");
  setTimeout(() => copyMsg.classList.add("hidden"), 1500);
});
});

// Generate warna random
randomBtn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  updateColor(randomColor);
  colorPicker.value = randomColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColor(color) {
  colorDisplay.style.backgroundColor = color;
  hexCode.textContent = color;
}