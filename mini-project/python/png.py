from PIL import Image

# Set karakter ASCII
ascii_chars = " =;_-|"

def create_to_ascii(gambar_path, lebar=100):
    img = Image.open(gambar_path)
    # Rasio Width and Height
    tinggi = int((img.height / img.width) * lebar * 0.5)
    img = img.resize((lebar, tinggi))
    img = img.convert("L")  # Grayscale

    hasil = ""
    for y in range(tinggi):
        for x in range(lebar):
            kecerahan = img.getpixel((x, y))
            hasil += ascii_chars[kecerahan * len(ascii_chars) // 256]
        hasil += "\n"

    print(hasil)

# Nama PNG
create_to_ascii("")