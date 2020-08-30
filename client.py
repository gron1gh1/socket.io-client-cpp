import requests
import time
send_data = {
    'title': 'Notice',
    'content': 'Hello World!',
    'time': time.strftime('%c', time.localtime(time.time()))
}
response = requests.post('http://localhost:3001/message',data=send_data)
print(response)
