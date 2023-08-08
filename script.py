import subprocess
import sys

def gitCommands():
    try:
        file = input("Hacer cambio de un solo archivo S o N: ").lower()
        if file == "s": 
            name_file = input("Nombre del archivo a subir: ")
            subprocess.run(["git", "add", name_file])
            commit_message = input("Introduce el mensaje del commit: ")
            subprocess.run(["git", "commit", "-m", commit_message])
            subprocess.run(["git", "push", "-u", "origin", "main"])
            print("¡Los comandos de Git se ejecutaron exitosamente!")
            print(f"Name file cambio: {name_file} commit anterior: {commit_message}")
        elif file == "n":
            subprocess.run(["git", "add", "."])
            commit_message = input("Introduce el mensaje del commit: ")
            subprocess.run(["git", "commit", "-m", commit_message])
            subprocess.run(["git", "push", "-u", "origin", "main"])
            print("¡Los comandos de Git se ejecutaron exitosamente!")
            print("----")
            print(f"Nombre del commit anterior {commit_message}")
        else:
            print("La opción no es correcta¡")
            print("-----------------------")
            gitCommands()

    except Exception as e:
        print(f"Ocurrió un error: {e}")

if __name__ == "__main__":
    print('''
        ################################
        #                              #
        #   <h1>SCRIPT PROCESOS</h1>   #
        #                              #
        ################################
    ''')
    gitCommands()
    
