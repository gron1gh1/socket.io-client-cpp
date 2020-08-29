import requests

response = requests.post('http://localhost:3000/message',data={'msg':'test !!'})
print(response)
