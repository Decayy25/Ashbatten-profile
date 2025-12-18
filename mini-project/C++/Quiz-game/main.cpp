#include <iostream>
#include <string>
#include <windows.h>
using namespace std;

void quiz() {
    string questions[5] = {
        "Apa itu pengrograman?",
        "Perbedaan Algoritma dan Struktur Data?",
        "Apa itu Infinite Loop?",
        "Jelaskan Percabangan (If-Else) dalam Pemrograman!",
        "Sebutkan Tipe Data pada C++!"
    };

    string answers[5] = {
        "Proses memberi instruksi kepada komputer menggunakan bahasa khusus untuk menyelesaikan tugas tertentu.",
        "Algoritma adalah langkah-langkah menyelesaikan masalah, sedangkan struktur data adalah cara menyimpan dan mengatur data.",
        "Infinite loop adalah perulangan yang tidak pernah berhenti karena kondisi selalu bernilai benar.",
        "Percabangan if-else digunakan untuk menjalankan kode berdasarkan kondisi tertentu.",
        "int, float, double, char, string, bool"
    };

    int total = 5;
    int score = 0;
    string user_answer;

    for (int i = 0; i < total; i++) {
        cout << "\nSoal " << i + 1 << ": " << questions[i] << endl;
        getline(cin, user_answer);

        if (user_answer == answers[i]) {
            score++;
            cout << u8"Jawaban benar! ✅\n";
        } else {
            cout << u8"Jawaban salah! ❌\n";
            cout << "Jawaban yang benar:\n" << answers[i] << endl;
        }
    }

    cout << "\n========== HASIL QUIZ ==========\n";
    cout << "Skor kamu: " << score << " / " << total << endl;

    if (score == total) {
        cout << u8"Luar biasa! 🔥\n";
    } else if (score >= total / 2) {
        cout << u8"Bagus, terus belajar 💪\n";
    } else {
        cout << u8"Jangan menyerah, coba lagi 📚\n";
    }
}

int main() {
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);

    cout << u8"\n========== Welcome to the Quiz Game! 🎮 ==========\n";
    quiz();
    return 0;
}
