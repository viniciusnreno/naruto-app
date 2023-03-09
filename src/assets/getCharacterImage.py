import requests
import json
from bs4 import BeautifulSoup
import shutil

with open('/home/viniciusreno/projects/naruto-app/src/assets/characters.json') as f:
   data = json.load(f)

for i in range(len(data)):
   url = "https://naruto.fandom.com/pt-br/wiki/" + data[i]["name"]
   response = requests.get(url)

   soup = BeautifulSoup(response.content, "html.parser")

   image_element = soup.find("figure", {"class": "pi-item pi-image"}).find("img")

   image_url = image_element["src"]

   print(image_url + " " + "\n\n\n\n\n" + data[i]["name"])
   # file_name = 

   res = requests.get(image_url, stream = True)
   file_name = data[i]["name"] + ".png"
   if res.status_code == 200:
    with open(data[i]["name"],'wb') as f:
        shutil.copyfileobj(res.raw, f)
    print('Image sucessfully Downloaded: ',file_name)
   else:
      print('Image Couldn\'t be retrieved')
