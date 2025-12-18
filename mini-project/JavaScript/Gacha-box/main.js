// Input jml box yg ingin dibuka
// let inputBox = parseInt(prompt('Masukan berapa box yang ingin dibuka : '));
let inputBox = 40

// Storage
var DataPlayer = {
    username : 'React.js-jsx',
    dm : 8367,
    coint : 6706,
    Token : 0
};

// Hasilkan token
function RandomBox () {
    return Math.floor(Math.random() * (10 - 3 + 1)) + 3;
}

// variabel 
let Output;
let boxDibuka = 0;
const hargaPerBox = 40;
let maxBoxDariDM = Math.floor(DataPlayer.dm / hargaPerBox);
let boxYangAkanDibuka = Math.min(inputBox, maxBoxDariDM);
let bonusRules = [
    { setiap : 15, bonus : 10},
    { setiap : 35, bonus : 10},
    { setiap : 56, bonus : 10},
    { setiap : 75, bonus : 10},
    { setiap : 90, bonus : 10},
];

// tentukan jumlah box yang benar-benar dibuka
if (isNaN(boxYangAkanDibuka)) {
    console.log(`DM anda tidak cukup! Minimal perlu ${hargaPerBox} DM untuk buka 1 box`);
} else {
    for (let i = 0 ; i < boxYangAkanDibuka; i++) {
        DataPlayer.dm -= hargaPerBox;
        Output = RandomBox();
        DataPlayer.Token += Output;
        boxDibuka++;
        console.log(`Box ke-${boxDibuka} dibuka. Dapat ${Output} Token.`);

        // Bonus
        bonusRules.forEach(rule => {
            if (boxDibuka % rule.setiap === 0) {
                DataPlayer.Token += rule.bonus;
                console.log(`🎉 Bonus! +${rule.bonus} token karena sudah buka ${rule.setiap} box.`);
            }
        });
    }

    if (boxYangAkanDibuka < inputBox ) {
        console.log(`\nPermintaan buka ${inputBox} box, tapi hanya ${boxYangAkanDibuka} box yang bisa dibuka karena keterbatasan DM.`);
    }
}

console.log(`Total box yang berhasil dibuka : ${boxDibuka}`);
console.log(`Total token yang didapat : ${DataPlayer.Token}`);
console.log(`Sisa dm : ${DataPlayer.dm}`);