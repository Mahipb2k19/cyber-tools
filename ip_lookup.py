import sys
import requests

ip = sys.argv[1]
response = requests.get(f"https://ipinfo.io/{ip}/json")
print(response.text)
