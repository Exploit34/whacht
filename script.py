import subprocess

def gitCommands():
    try:
        file = input("Hacer cambio de un archivo S o N: ")
        if file.lower() == "s": 
            name_file = input("Nombre del archivo a subir: ")
            subprocess.run(["git", "add", name_file])
            commit_message = input("Introduce el mensaje del commit: ")
            subprocess.run(["git", "commit", "-m", commit_message])
            subprocess.run(["git", "push", "-u", "origin", "main"])
            print("¡Los comandos de Git se ejecutaron exitosamente!")
            print(f"Nombre del commit anterior {commit_message}")
        elif file.lower() == "n":
            subprocess.run(["git", "add", "."])
            commit_message = input("Introduce el mensaje del commit: ")
            subprocess.run(["git", "commit", "-m", commit_message])
            subprocess.run(["git", "push", "-u", "origin", "main"])
            print("¡Los comandos de Git se ejecutaron exitosamente!")
            print(f"Nombre del commit anterior {commit_message}")

    except Exception as e:
        print(f"Ocurrió un error: {e}")

if __name__ == "__main__":
    gitCommands()
