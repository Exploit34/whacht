import requests
import time
import sys

print('''
    #############################
    #   *         *         *   #
    #   *   ¡Paginas web    *   #
    #   *         *         *   #
    #############################
''')

url = input("pagina a refrescar: ")
refrescar = 160


while True:
    responde = requests.get(url)
    if responde.status_code == 200:
        print(f"Contenido actualizado:\n{responde.text}")
        print(f"pagina actualizada se refrescara en {refrescar} segundos")
    else:
        print(f"No se pudo obtener el contenido (Código de estado: {responde.status_code})")
        print("no se actulizo la pagina")
        res = input("salir S o N").lower()
        if res == "s":
            sys.exit()
        elif res == "n":
            print(f"la pagina se refrescara en {refrescar}")
    
    time.sleep(refrescar)
