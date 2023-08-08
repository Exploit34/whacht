import subprocess

def git_commands():
    try:
        subprocess.run(["git", "add", "."])
        commit_message = input("Introduce el mensaje del commit: ")
        subprocess.run(["git", "commit", "-m", commit_message])
        subprocess.run(["git", "push", "-u", "origin", "main"])
        print("¡Los comandos de Git se ejecutaron exitosamente!")
        print("commit anterior"+commit_message)
    except Exception as e:
        print(f"Ocurrió un error: {e}")

if __name__ == "__main__":
    git_commands()
