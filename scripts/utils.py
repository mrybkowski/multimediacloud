import subprocess

def clone_repo(repo_url, target_dir):
    try:
        subprocess.run(["git", "clone", repo_url, target_dir], check=True)
        print(f"Repozytorium {repo_url} zostało sklonowane do {target_dir}.")
    except subprocess.CalledProcessError as e:
        print(f"Błąd przy klonowaniu repozytorium {repo_url}: {e}")
