function simpanInput(event) {
    event.preventDefault();

    const namaPengguna = document.getElementById('nama').value.trim();
    const storageKey = `khodam_${namaPengguna}`;

    if (namaPengguna === "") {
        document.getElementById("output").innerText = "Silakan masukkan nama terlebih dahulu.";
        return;
    }

    if (namaPengguna === 'Moch. Rizqi Hermawan') {
        document.getElementById("output").innerText = 'Anda sudah dipastikan Programmer & Network Engineer 😎';
        document.querySelector(".MemeImg").innerHTML = `<img src="https://i.imgur.com/qItEw1O.png" class="rounded-lg w-60 mt-3" />`;
        return;
    }

    // Cek apakah sudah pernah disimpan
    const storedResult = localStorage.getItem(storageKey);
    if (storedResult) {
        document.getElementById("output").innerText = `Khodam anda sudah tersimpan dan tidak bisa diubah: ${storedResult}`;
        return;
    }

    // Daftar Khodam + Gambar
    const list = [
        { nama: 'Ayanokouji 🥶', prob: 0.01, src: './img/Ayanokoji.jpeg' },
        { nama: 'Sigit Rendang 😂', prob: 0.10, src: './img/Sigit rendang.jpg' },
        { nama: 'Laba-laba Sunda 😂', prob: 0.10, src: './img/laba laba sunda.jpeg' },
        { nama: 'Rehan Digital 😂', prob: 0.10, src: 'https://i.pinimg.com/1200x/8e/b9/3b/8eb93b3fc2c2b04fdbd1655b7860aea9.jpg' },
        { nama: 'Raja Karbit 😂', prob: 0.10, src: 'https://i.pinimg.com/736x/8f/5d/af/8f5dafda27c55f0da363cd23e21c990e.jpg' },
        { nama: 'Raja JMK 😂', prob: 0.10, src: 'https://i.pinimg.com/736x/20/8d/ef/208def2cba089d7815b640ed77fae64f.jpg' },
        { nama: 'Raja Pedo 😂', prob: 0.10, src: 'https://i.pinimg.com/736x/23/e0/36/23e036adb51c2cfb1d99e6d4556e7a5d.jpg' },
        { nama: 'Member JMK 😂', prob: 0.10, src: 'https://i.pinimg.com/1200x/ec/b6/d5/ecb6d506aa4fa5d83def21187a00e942.jpg' },
        { nama: 'Karbit Pemula 😂', prob: 0.05, src: 'https://i.pinimg.com/736x/05/c7/e6/05c7e6ebfea086c7229888193b5e835a.jpg' },
        { nama: 'Si Hitam Coklat 😂', prob: 0.06, src: 'https://i.pinimg.com/736x/8f/b8/86/8fb8861f5694777b2b729ba57a7db6dd.jpg' },
        { nama: 'Si Putih Susu 😂', prob: 0.06, src: 'https://i.pinimg.com/736x/ca/9c/70/ca9c7027ed2a55f6fc95c81996bb63e9.jpg' },
        { nama: 'Admin PSHT 😂', prob: 0.10, src: 'https://madiunraya.com/wp-content/uploads/2018/08/1535526098355.png' },
    ];

    const rand = Math.random();
    let sum = 0;
    let result = "";
    let image = "";

    for (let i = 0; i < list.length; i++) {
        sum += list[i].prob;
        if (rand <= sum) {
            result = list[i].nama;
            image = list[i].src;
            break;
        }
    }

    localStorage.setItem(storageKey, result);
    document.getElementById("output").innerText = `Khodam anda : ${result}`;
    document.querySelector(".MemeImg").innerHTML = `
        <div class="mt-4">
            <img src="${image}" alt="${result}" class="rounded-lg shadow-lg w-60" />
        </div>
    `;

    console.log(`Random: ${rand}`);
}

// Opsional

function resetRandom() { 
    const namaPengguna = document.getElementById('nama').value.trim();
    const storageKey = `khodam_${namaPengguna}`;

    if (localStorage.getItem(storageKey)) {
        localStorage.removeItem(storageKey);
        document.getElementById("output").innerText = "Khodam berhasil di-reset. Silakan Submit ulang.";
    } else {
        document.getElementById("output").innerText = "Belum ada data yang disimpan.";
    }
}
