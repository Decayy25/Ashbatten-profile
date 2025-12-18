import pytemperature

angka = float(input("Masukkan suhu: "))
dari = input("Dari satuan (C/F/K): ")
ke = input("Ke satuan (C/F/K): ")

if dari == "C" and ke == "F":
    print(f"{angka} Celcius = {pytemperature.c2f(angka)} Fahrenheit")
elif dari == "C" and ke == "K":
    print(f"{angka} Celcius = {pytemperature.c2k(angka)} Kelvin")
elif dari == "F" and ke == "C":
    print(f"{angka} Fahrenheit = {pytemperature.f2c(angka)} Celcius")
elif dari == "F" and ke == "K":
    print(f"{angka} Fahrenheit = {pytemperature.f2k(angka)} Kelvin")
elif dari == "K" and ke == "C":
    print(f"{angka} Kelvin = {pytemperature.k2c(angka)} Celcius")
elif dari == "K" and ke == "F":
    print(f"{angka} Kelvin = {pytemperature.k2f(angka)} Fahrenheit")
else:
    print("Konversi tidak valid.")