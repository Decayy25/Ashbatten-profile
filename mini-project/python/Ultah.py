import pyfiglet
import time
import os

# Input
nama = input("Masukkan Nama: ")

if nama.strip() == "":
    print("Tolong masukkan nama~")
else:
    # Konversi kata ke ASCII
    kata_list = ["Selamat", "Ulang", "Tahun", nama, "Semoga", "Menjadi", "Programmer", "Handal"]
    ascii_list = [pyfiglet.figlet_format(kata).splitlines() for kata in kata_list]

    # Tentukan lebar terminal (misalnya 100 kolom)
    LEBAR_TERMINAL = 150

    # Tampilkan zigzag 10x
    for _ in range(3):
        os.system("cls" if os.name == "nt" else "clear")  # bersihkan layar

        for i, ascii_baris in enumerate(ascii_list):
            for baris in ascii_baris:
                if i % 2 == 0:
                    print(baris)  # kiri
                else:
                    print(baris.rjust(LEBAR_TERMINAL))  # kanan
        time.sleep(0.1)  # jeda antar loop
