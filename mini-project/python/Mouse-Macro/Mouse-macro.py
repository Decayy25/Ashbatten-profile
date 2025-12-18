import pyautogui
import threading
import time
from pynput import mouse

is_running = False 

def press_q_for_5_seconds():
    """Menekan tombol Q selama 5 detik"""
    pyautogui.keyDown('q')
    time.sleep(5)
    pyautogui.keyUp('q')

def macro_loop():
    """Loop utama macro (selama is_running True)"""
    global is_running
    while is_running:
        press_q_for_5_seconds()
        time.sleep(0.1) 

def on_click(x, y, button, pressed):
    """Event saat klik mouse"""
    global is_running

    # Jika klik kiri ditekan
    if button == mouse.Button.left and pressed:
        # Toggle status macro
        is_running = not is_running

        if is_running:
            print("🔵 Macro AKTIF — Menekan Q setiap 5 detik")
            threading.Thread(target=macro_loop, daemon=True).start()
        else:
            print("🔴 Macro DIMATIKAN")

# Jalankan listener mouse
print("=== Mouse Macro Aktif ===")
print("Klik kiri untuk toggle ON/OFF macro (tekan Ctrl+C untuk keluar)\n")

with mouse.Listener(on_click=on_click) as listener:
    listener.join()
