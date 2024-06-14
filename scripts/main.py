from nginx_manager import generate_nginx_config, write_nginx_config, update_etc_hosts, restart_nginx
from db_manager import get_db_hosts
from utils import clone_repo
import os
import config

def main():
    try:
        db_hosts = get_db_hosts()
        
        for hostname in db_hosts:
            web_root = os.path.join(config.web_root_base_path, hostname)
            if not os.path.exists(web_root):
                try:
                    os.makedirs(web_root)
                except PermissionError:
                    print(f"Permission denied: {web_root}. Spróbuj uruchomić skrypt jako root.")
                    continue
            
            clone_repo(config.github_repo_base_url, web_root)

            nginx_config = generate_nginx_config(hostname)
            write_nginx_config(hostname, nginx_config)
            update_etc_hosts(hostname)

        existing_web_roots = set(os.listdir(config.web_root_base_path))
        existing_nginx_configs = set(os.listdir(config.nginx_sites_enabled_path))

        for hostname in existing_nginx_configs:
            if hostname not in db_hosts:
                nginx_config = generate_nginx_config(hostname, status=503)
                write_nginx_config(hostname, nginx_config)
            elif hostname in existing_web_roots:
                nginx_config = generate_nginx_config(hostname, status=404)
                write_nginx_config(hostname, nginx_config)

        restart_nginx()
    except Exception as err:
        print(f"Błąd: {err}")

if __name__ == "__main__":
    main()
