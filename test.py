import requests
import random

urls = []

for i in range(100):
    res = requests.get(f'https://picsum.photos/id/{random.randint(0, 1000)}/info')
    if res.status_code == 200:
        urls.append(res.json()['download_url'])
print(urls)