import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache('banco')
pag = input("Digite a pagina: ") # O usuário vai digitar a url da página
response = requests.get(pag) 

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser') 
    links = soup.find_all('a', href=True)
    count = 0
    for link in links:
        if (link.get('href')!='#'):
            count+=1
            print ('%d - %s'% (count,link.get('href')))
        
        if (count>9):
            break

keyword = input("Digite a palavra chave: ")
num = int(input("Digite o número do link: "))
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser') 
    links = soup.find_all('a', href=True)
    count = 0
    for link in links:
        if (link.get('href')!='#'):
            count+=1
            response2 = requests.get(link['href'])
        
        if (count == num):
            break

# response2 = response2
# if response2.status_code == 200:
#     soup = BeautifulSoup(response2.text, 'html.parser')
#     words = soup.get_text()
#     for word in words:
#         print(word)



