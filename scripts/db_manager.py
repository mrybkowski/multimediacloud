import mysql.connector
import config

def get_db_hosts():
    try:
        connection = mysql.connector.connect(**config.db_config)
        cursor = connection.cursor()
        cursor.execute("SELECT hostname FROM hosts")
        db_hosts = {hostname for (hostname,) in cursor}
        cursor.close()
        connection.close()
        return db_hosts
    except mysql.connector.Error as err:
        print(f"Błąd: {err}")
        return set()
