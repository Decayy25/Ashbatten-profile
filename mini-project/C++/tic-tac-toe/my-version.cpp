#include <iostream>
using namespace std;

char papan[3][3]; // Deklarasi papan permainan
char pemain1 = 'X'; // Simbol pemain 1
char pemain2 = 'O'; // Simbol pemain 2

// Fungsi tampilkan papan permainan
void tampilan_papan(){
    cout << "\n";
    for (int i = 0; i < 3; i++) { // Baris
        cout << " ";
        for (int j = 0; j < 3; j++) { // Kolom
            cout << papan[i][j];
            if (j < 2) cout << " | "; // Pemisah kolom
        }
        if (i < 2) cout << "\n---+---+---\n";
    }
    cout << "\n";
}

// Fungsi inisialisasi papan permainan 1-9
void inisialisasi_papan() {
    for (int i = 0, angka = '1'; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            papan[i][j] = angka++;
        }
    }
}


// Fungsi tanda pemain pada papan
bool tanda_pemain(int posisi, char pemain) {
    int baris = (posisi - 1 ) /3;
    int kolom = (posisi - 1 ) %3;

    // Jika posisi valid dan belum ditempati
    if (posisi < 1 || posisi > 9 || papan[baris][kolom] == pemain1 || papan[baris][kolom] == pemain2) {
        return false; // Tanda tidak berhasil
    }
    papan[baris][kolom] = pemain;
    return true;
}


// Fungsi cek pemenang
bool cek_pemenang(){
    for (int i = 0; i < 3; i++) {
        // Cek Pemain 1
        if ((papan[i][0] == pemain1 && papan[i][1] == pemain1 && papan[i][2] == pemain1) || // Cek baris
            (papan[0][i] == pemain1 && papan[1][i] == pemain1 && papan[2][i] == pemain1))  // Cek kolom
            return true;
        

        // Cek Pemain 2
        if ((papan[i][0] == pemain2 && papan[i][1] == pemain2 && papan[i][2] == pemain2) || // Cek baris
            (papan[0][i] == pemain2 && papan[1][i] == pemain2 && papan[2][i] == pemain2))  // Cek kolom
            return true;
    }

    // Cek diagonal
    if ((papan[0][0] == pemain1 && papan[1][1] == pemain1 && papan[2][2] == pemain1) ||
        (papan[0][2] == pemain1 && papan[1][1] == pemain1 && papan[2][0] == pemain1))
        return true;
    
    if ((papan[0][0] == pemain2 && papan[1][1] == pemain2 && papan[2][2] == pemain2) ||
        (papan[0][2] == pemain2 && papan[1][1] == pemain2 && papan[2][0] == pemain2))
        return true;
    return false; // Tidak ada pemenang
}

// Fungsi cek seri /draw
bool cek_seri() {
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) 
            if (papan[i][j] != pemain1 && papan[i][j] != pemain2)
                return false; // Masih ada posisi kosong
    return true; // Papan penuh
}


// Fungsi ganti pemain jika sudah selesai giliran
void ganti_pemain(char &pemain_sekarang) {
    if (pemain_sekarang == pemain1)
        pemain_sekarang = pemain2;
    else
        pemain_sekarang = pemain1;
}

// Jalankan program utama
int main() {
    inisialisasi_papan(); // Inisialisasi papan
    char pemain_sekarang = pemain1; // Mulai dengan pemain 1
    int posisi;
    while (true) {
        tampilan_papan();
        cout << "Giliran pemain " << pemain_sekarang << " .Masukkan posisi (1-9): ";
        cin >> posisi;
        if (!tanda_pemain(posisi, pemain_sekarang)) {
            cout << "Posisi tidak valid atau sudah ditempati. Coba lagi.\n";
            continue;
        }
        if (cin.fail()) {
            cin.clear(); // Clear the fail state
            cin.ignore(1000, '\n'); // Discard invalid input
            cout << "Input tidak valid. Masukkan angka antara 1-9.\n";
            continue;
        }
        tampilan_papan();
        if (cek_pemenang()) {
            cout << "Pemain " << pemain_sekarang << " menang!\n";
            break;
        }
        if (cek_seri()) {
            cout << "Permainan seri!\n";
            break;
        }
        ganti_pemain(pemain_sekarang);
    }
    return 0;
}