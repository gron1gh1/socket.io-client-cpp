import requests

response = requests.post('http://localhost:3001/message',data={'msg':'test !!'})
print(response)
