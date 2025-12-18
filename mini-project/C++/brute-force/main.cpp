#include <iostream>
#include <string>
#include <vector>

void bruteForceIterative(const std::string& target) {
    std::string charset =
        "abcdefghijklmnopqrstuvwxyz"
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        "0123456789";

    int n = charset.size();
    int maxLen = 8;// BATAS MAKSIMAL PANJANG PASSWORD
    long long tries = 0;

    // Loop untuk panjang 1 sampai 8 karakter
    for (int length = 1; length <= maxLen; length++) {
        std::vector<int> index(length, 0);  // array index seperti counter angka

        while (true) {
            // Bangun string dari indeks
            std::string attempt;
            attempt.reserve(length);
            for (int i : index) attempt += charset[i];

            tries++;
            if (attempt == target) {
                std::cout << "Password ditemukan: " << attempt << "\n";
                std::cout << "Total percobaan: " << tries << "\n";
                return;
            }

            // INCREMENT layaknya angka basis-X
            int pos = length - 1;
            while (pos >= 0) {
                index[pos]++;
                if (index[pos] < n) break;     // masih dalam batas
                index[pos] = 0;                // reset posisi, carry ke kiri
                pos--;
            }

            if (pos < 0) break; // selesai untuk panjang ini
        }
    }

    std::cout << "Password tidak ditemukan dalam batas 8 karakter.\n";
}

int main() {
    std::string target = "Ashbatten";  // Contoh target (≤ 8 karakter)
    bruteForceIterative(target);
    return 0;
}