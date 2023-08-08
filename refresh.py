import requests
import time

url = 'https://github.com/Exploit34/Exploit34.github.io/'
refresh_interval = 160

while True:
    response = requests.get(url)
    if response.status_code == 200:
        print(f"Contenido actualizado:\n{response.text}")
    else:
        print(f"No se pudo obtener el contenido (Código de estado: {response.status_code})")
    
    time.sleep(refresh_interval)
