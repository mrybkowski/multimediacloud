import os
import subprocess
import config

def restart_nginx():
    try:
        subprocess.run(["systemctl", "restart", "nginx"], check=True)
        print(f"Nginx został zrestartowany, rekordy zostały zaktualizowane pomyślnie.")
    except subprocess.CalledProcessError as e:
        print(f"Błąd przy restartowaniu Nginx: {e}")

def generate_nginx_config(hostname, status=404):
    custom_domain = f"{hostname}{config.domain_suffix}"
    return f"""
    server {{
        listen 80;
        server_name {custom_domain};
        {"root /var/www/" + hostname + ";" if status == 404 else ""}
        {"index index.html;" if status == 404 else ""}
        location / {{
            {"try_files $uri $uri/ =404;" if status == 404 else "return 402;"}
        }}
    }}
    """

def write_nginx_config(hostname, config_content):
    config_path = os.path.join(config.nginx_sites_enabled_path, hostname)
    if os.path.exists(config_path):
        with open(config_path, 'r') as config_file:
            existing_content = config_file.read()
            if existing_content == config_content:
                return False

    try:
        with open(config_path, 'w') as config_file:
            config_file.write(config_content)
        return True
    except PermissionError:
        return False

def update_etc_hosts(hostname):
    new_entry = f"127.0.0.1 {hostname}{config.domain_suffix} {hostname}\n"
    
    try:
        with open('/etc/hosts', 'r') as hosts_file:
            hosts_content = hosts_file.readlines()
            for line in hosts_content:
                if new_entry.strip() in line.strip():
                    return False
    except PermissionError:
        print(f"Permission denied: /etc/hosts. Spróbuj uruchomić skrypt jako root.")
        return False

    try:
        with open('/etc/hosts', 'a') as hosts_file:
            hosts_file.write(new_entry)
        return True
    except PermissionError:
        print(f"Permission denied: /etc/hosts. Spróbuj uruchomić skrypt jako root.")
        return False
