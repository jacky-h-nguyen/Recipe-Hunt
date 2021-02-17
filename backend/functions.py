import requests


APIKEY = "" #API key here
APPID = "" #APP ID here

def recipeAPI(searchParameter):
   try:
      ingredientsArr = []
      URL = "https://api.edamam.com/search?q=" + searchParameter + "&app_id=" + APPID + "&app_key=" + APIKEY
      info = requests.get(URL)
      hits = info.json()["hits"]
      recipe = hits[0]["recipe"]
      item = [hits[0]["recipe"]["label"], hits[0]["recipe"]["image"]]
      for i in range(len(recipe["ingredients"])):
         ingrededient = [recipe["ingredients"][i]["text"], recipe["ingredients"][i]["image"]]
         ingredientsArr.append(ingrededient)
      finalRecipe = [item, ingredientsArr]
      return finalRecipe
   except:
      return "error"
